import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { AppSecureStorage } from '../../../template/service/local/app_secure_storage';
import { BaseFile } from '../../base/base';

export class AppSecureStorageFile extends BaseFile {
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
                'database'
            );
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
        const baseModel = new AppSecureStorage(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
