import * as vscode from 'vscode';
import { AppLogger } from './utility/logger';
import { ModelFile } from './event/model/model';
import { BaseModelFile } from './event/model/base_model';
import { VsCodeActions } from './utility/vs_cose_actions';
import { FileSystemManager } from './utility/file_system_manager';
import { Utils } from './utility/utils';
import * as _ from 'lodash';
import { BaseAppColorFile } from './event/style/base_app_color';
import { BaseDiAppThemeFile } from './event/style/base_di_app_theme';
import { BaseElevationFile } from './event/style/base_elevation';
import { BaseThemeFile } from './event/style/base_theme';
import { BaseTypographyFile } from './event/style/base_typography';
import { DiThemeFile } from './event/style/di_theme';
import { ColorFile } from './event/style/color';
import { ElevationFile } from './event/style/elevation';
import { ThemeFile } from './event/style/theme';
import { TypographyFile } from './event/style/typography';

export function activate(context: vscode.ExtensionContext) {
    const modelDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createModel',
        async () => {
            const inputString = await Utils.checkInputString();
            if (inputString === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const folders = Utils.getFolders(inputString);
            const fileName = Utils.getFileName(inputString);
            if (fileName === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }
            const baseModelFile = new BaseModelFile(rootPath, 'base_model');

            const isExistBaseModelFile = FileSystemManager.doesFileExist(
                baseModelFile.pathValue,
                baseModelFile.getFileName
            );
            if (!isExistBaseModelFile) {
                baseModelFile.create();
            }
            const modelFile = new ModelFile(rootPath, fileName, folders);
            modelFile.create();
            AppLogger.info('Model is created successfully');
        }
    );

    const styleDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createStyle',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }
            const baseAppColorFile = new BaseAppColorFile(
                rootPath,
                'base_color'
            );
            const baseDiAppThemeFile = new BaseDiAppThemeFile(
                rootPath,
                'base_di_app_theme'
            );
            const baseElevationFile = new BaseElevationFile(
                rootPath,
                'base_elevation'
            );
            const baseThemeFile = new BaseThemeFile(rootPath, 'base_theme');
            const baseTypographyFile = new BaseTypographyFile(
                rootPath,
                'base_typography'
            );
            const diThemeFile = new DiThemeFile(rootPath, 'di_theme');
            const colorFile = new ColorFile(rootPath, 'color');
            const elevationColorFile = new ElevationFile(rootPath, 'elevation');
            const themeFile = new ThemeFile(rootPath, 'theme');
            const typographyFile = new TypographyFile(rootPath, 'typography');

            baseAppColorFile.create();
            baseDiAppThemeFile.create();
            baseElevationFile.create();
            baseThemeFile.create();
            baseTypographyFile.create();
            diThemeFile.create();
            colorFile.create();
            elevationColorFile.create();
            themeFile.create();
            typographyFile.create();
            AppLogger.info('Style is created successfully');
        }
    );

    context.subscriptions.push(modelDisposable);
    context.subscriptions.push(styleDisposable);
}

export function deactivate() {}
