import {
    window,
    InputBoxOptions,
    workspace,
    WorkspaceConfiguration,
} from 'vscode';
import * as _ from 'lodash';

export class VsCodeActions {
    /**
     * Accepts an input string in the current Vscode context
     * @param placeHolder The placeholder string to display in the input box
     * @param validateInput The function to validate if the text entered in the input box is of a valid format or not
     */
    public static async getInputString(
        placeHolder?: string,
        validateInput?: InputBoxOptions['validateInput']
    ): Promise<string> {
        const input = await window.showInputBox({
            placeHolder: placeHolder,
            validateInput: validateInput,
        });
        if (input === undefined) {
            return '';
        }
        return input;
    }

    /**
     * Get the root path of the current context
     */
    public static get rootPath(): string {
        const rootPath = workspace.rootPath;
        if (_.isUndefined(rootPath)) {
            return '';
        }
        return rootPath;
    }

    public static getEditorConfiguration(): WorkspaceConfiguration {
        return workspace.getConfiguration('editor');
    }
}
