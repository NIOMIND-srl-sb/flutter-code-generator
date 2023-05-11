import * as path from 'path';
import { YamlHelper } from '../../../../utility/yaml_helper';
import { BaseFile } from '../../../base/base';
import { DiRemoteService } from '../../../../template/service/remote/di/di_remote_service';

export class DiRemoteServiceFile extends BaseFile {
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
                'di'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'remote',
            'di',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new DiRemoteService(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}