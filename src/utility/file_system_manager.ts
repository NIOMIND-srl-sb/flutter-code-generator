import {
    WriteFileOptions,
    writeFileSync,
    existsSync,
    readFile,
    readFileSync,
} from 'fs';
import * as path from 'path';
import { Utils } from './utils';
import * as shell from 'shelljs';
import { VsCodeActions } from './vs_cose_actions';
import { YamlHelper } from './yaml_helper';
import { AppLogger } from './logger';

export class FileSystemManager {
    public static createFile(
        pathValue: string,
        fileName: string,
        data: string
    ) {
        try {
            const filePath = path.join(pathValue, fileName);
            writeFileSync(filePath, data);
            Utils.openFile(filePath);
        } catch (error) {
            AppLogger.error(`Unable to create file: ${error}`);
            return;
        }
    }

    public static createFolder(pathValue: string): boolean {
        if (!existsSync(pathValue)) {
            try {
                shell.mkdir('-p', pathValue);
            } catch (error) {
                AppLogger.error(`Unable to create folder: ${error}`);
                return false;
            }
        }
        return true;
    }

    public static doesFileExist(filePath: string, fileName: string): boolean {
        return existsSync(path.join(filePath, fileName));
    }

    public static readFileAsString(
        filePath: string,
        fileName: string
    ): string | undefined {
        if (!this.doesFileExist(filePath, fileName)) {
            return undefined;
        }

        try {
            const fileBuffer = readFileSync(path.join(filePath, fileName));
            const fileData = fileBuffer.toString();
            return fileData;
        } catch (error) {
            AppLogger.error(`Unable to read file: ${error}`);
            return undefined;
        }
    }

    public static isFlutterProject(): boolean {
        const rootPath = VsCodeActions.rootPath;
        if (!existsSync(path.join(rootPath, 'pubspec.yaml'))) {
            AppLogger.error('Pubspec.yaml not found');
            return false;
        }
        const errorMessage = YamlHelper.isValidFlutterPubspec();

        if (errorMessage !== undefined) {
            AppLogger.error(errorMessage);
            return false;
        }

        return true;
    }
}
