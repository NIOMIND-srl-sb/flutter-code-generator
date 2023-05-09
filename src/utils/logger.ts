import * as vscode from 'vscode';

export class AppLogger {
    public static error(error: string) {
        console.error(error);
        vscode.window.showErrorMessage(error);
    }

    public static info(message: string) {
        console.info(message);
        vscode.window.showInformationMessage(message);
    }

    public static debug(message: string) {
        console.debug(message);
    }
}
