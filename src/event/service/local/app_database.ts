import * as path from 'path';
import * as _ from 'lodash';
import { YamlHelper } from '../../../utility/yaml_helper';
import { AppDatabase } from '../../../template/service/local/app_database';
import { BaseFile } from '../../base/base';

export class AppDatabaseFile extends BaseFile {
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
        const baseModel = new AppDatabase(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
