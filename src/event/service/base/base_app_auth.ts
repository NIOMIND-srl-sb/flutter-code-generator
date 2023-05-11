import * as path from 'path';
import { BaseAppAuth } from '../../../template/service/base/base_app_auth';
import { YamlHelper } from '../../../utility/yaml_helper';
import { BaseFile } from '../../base/base';

export class BaseAppAuthFile extends BaseFile {
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
                'base'
            );
        }
        return path.join(
            this.rootPath,
            'lib', 
            'src', 
            'service',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const model = new BaseAppAuth(this.fileName, '');
        this.createFiles(
            this.pathValue, 
            this.getFileName, 
            model.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
