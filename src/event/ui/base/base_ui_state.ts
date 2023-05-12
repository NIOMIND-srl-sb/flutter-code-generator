import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { BaseFile } from '../../base/base';
import { BaseUiState } from '../../../template/ui/base/base_ui_state';

export class BaseUiStateFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(
                this.rootPath,
                'lib',
                'src',
                'ui',
                'base'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'ui',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new BaseUiState(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}