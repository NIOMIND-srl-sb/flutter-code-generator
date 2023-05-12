import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { RemoteService } from '../../../template/service/remote/remote_service';
import { BaseFile } from '../../base/base';

export class RemoteServiceFile extends BaseFile {
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
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'remote',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new RemoteService(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
