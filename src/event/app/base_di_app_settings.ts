import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { BaseDiAppSettings } from '../../template/app/base_di_app_settings';

export class BaseDiAppSettingsFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'app', 'base');
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'app',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const result = new BaseDiAppSettings(this.getFileName, '');
        this.createFiles(this.pathValue, this.getFileName, result.dartString);
        YamlHelper.initializeWithDependencies();
    }
}
