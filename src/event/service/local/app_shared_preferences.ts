import * as path from 'path';
import * as _ from 'lodash';
import { YamlHelper } from '../../../utility/yaml_helper';
import { AppSharedPreferences } from '../../../template/service/local/app_shared_preferences';
import { BaseFile } from '../../base/base';

export class AppSharedPreferencesFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'service', 'local', 'database');
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'local',
            'database',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new AppSharedPreferences(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
