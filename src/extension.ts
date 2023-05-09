import * as vscode from 'vscode';
import { AppLogger } from './utility/logger';
import { ModelFile } from './event/model';
import { VsCodeActions } from './utility/vs_cose_actions';
import { FileSystemManager } from './utility/file_system_manager';
import { Utils } from './utility/utils';
import { BaseModelFile } from './event/base_model';
import * as _ from 'lodash';

export function activate(context: vscode.ExtensionContext) {
    const baseModelFileName = 'base_model';

    const modelDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createModel',
        async () => {
            const inputString = await checkInputString();
            if (inputString === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const folders = getFolders(inputString);
            const fileName = getFileName(inputString);
            if (fileName === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }
            const baseModelFile = new BaseModelFile(
                rootPath,
                baseModelFileName
            );

            const isExistBaseModelFile = FileSystemManager.doesFileExist(
                baseModelFile.pathValue,
                baseModelFile.getFileName
            );
            if (!isExistBaseModelFile) {
                baseModelFile.create();
                AppLogger.info('File BaseModel is created successfully');
            }
            const modelFile = new ModelFile(rootPath, fileName, folders);
            modelFile.create();
            AppLogger.info('File Model is created successfully');
        }
    );

    const baseModelDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createBaseModel',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            const fileName = baseModelFileName;
            if (rootPath === undefined) {
                return;
            }
            const baseModelFile = new BaseModelFile(rootPath, fileName);
            baseModelFile.create();
            AppLogger.info('File BaseModel is created successfully');
        }
    );

    context.subscriptions.push(modelDisposable);
    context.subscriptions.push(baseModelDisposable);

    const checkInputString = async () => {
        if (!FileSystemManager.isFlutterProject()) {
            return;
        }
        const inputString = await VsCodeActions.getInputString(
            'Enter class name',
            async (value) => {
                if (value.length === 0) {
                    return 'Enter class name';
                }
                if (value.toLowerCase() === 'view') {
                    return 'View is not a valid class name';
                }
                return undefined;
            }
        );
        if (inputString.length === 0 || inputString.toLowerCase() === 'view') {
            console.warn('activate: inputString length is 0');
            return;
        }
        console.debug(`fileName: { ${inputString} }`);
        return inputString;
    };

    const getFolders = (inputString: String) => {
        const nameArray = inputString.trim().split('/');
        let folders: string[] = [];
        if (nameArray.length > 1) {
            const folderList = nameArray
                .splice(0, nameArray.length - 1)
                .map((element) => {
                    return element;
                });
            console.debug(`folderlist: { ${folderList} }`);
            folders = folderList;
        }
        console.debug(`folders: { ${folders} }`);
        return folders;
    };

    const getFileName = (inputString: String) => {
        const nameArray = inputString.trim().split('/');
        const formattedInputString = _.last(nameArray);
        if (formattedInputString === undefined) {
            console.error('formattedInputString is undefined');
            return;
        }
        const fileName = Utils.processFileName(formattedInputString);
        console.debug(`activate: fileName: ${fileName}`);
        return fileName;
    };
}

export function deactivate() {}
