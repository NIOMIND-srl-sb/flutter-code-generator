import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { BaseManageDatabase } from '../../../template/service/local/base_manage_database';
import { BaseFile } from '../../base/base';

export class BaseManageDatabaseFile extends BaseFile {
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
                'service',
                'local',
                'base'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'local',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new BaseManageDatabase(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
