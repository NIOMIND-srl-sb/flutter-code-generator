import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { LocalService } from '../../../template/service/local/local_service';
import { BaseFile } from '../../base/base';

export class LocalServiceFile extends BaseFile {
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
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'local',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new LocalService(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
