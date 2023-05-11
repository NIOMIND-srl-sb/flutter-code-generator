import * as path from 'path';
import { YamlHelper } from '../../../../utility/yaml_helper';
import { BaseFile } from '../../../base/base';
import { AppStorage } from '../../../../template/service/remote/storage/app_storage';

export class AppStorageFile extends BaseFile {
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
                'remote',
                'storage'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'remote',
            'storage',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new AppStorage(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}