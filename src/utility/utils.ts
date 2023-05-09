import * as vscode from 'vscode';
import _ = require('lodash');
import { AppLogger } from './logger';

export class Utils {
    public static isValidClassName(className: string): string | undefined {
        if (className.length === 0) {
            return 'File name should have atleast 1 character';
        }
        if (className.toLowerCase() === 'view') {
            return 'View is not a valid file name';
        }

        if (className.toLowerCase() === 'widget') {
            return 'Widget is not a valid file name';
        }

        if (
            !className
                .substring(0, 1)
                .match(new RegExp('([a-zA-Z$][w$]*.)*[a-zA-Z_$][w$]*'))
        ) {
            return 'Invalid class name format';
        }
        return undefined;
    }

    public static openFile(filePath: string) {
        AppLogger.debug(`openFile: ${filePath}`);
        const openPath = vscode.Uri.file(filePath);

        vscode.workspace.openTextDocument(openPath).then((document) => {
            vscode.window.showTextDocument(document);
        });
    }

    public static processFileName(fileName: string): string {
        if (fileName.length < 4) {
            return fileName;
        }
        fileName = _.lowerCase(fileName);

        const viewFileName = fileName
            .substring(fileName.length - 4, fileName.length)
            .toLowerCase();

        const widgetFileName = fileName
            .substring(fileName.length - 6, fileName.length)
            .toLowerCase();

        if (viewFileName === 'view') {
            const truncatedFileName = fileName.substring(
                0,
                fileName.length - 4
            );
            return truncatedFileName.trim();
        }

        if (widgetFileName === 'widget') {
            const truncatedFileName = fileName.substring(
                0,
                fileName.length - 6
            );
            return truncatedFileName.trim();
        }

        return fileName.trim();
    }
}
