import * as path from 'path';
import { YamlHelper } from '../../../../utility/yaml_helper';
import { BaseFile } from '../../../base/base';
import { BaseDiRemoteService } from '../../../../template/service/remote/base/base_di_remote_service';

export class BaseDiRemoteServiceFile extends BaseFile {
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
                'base'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'remote',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new BaseDiRemoteService(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}