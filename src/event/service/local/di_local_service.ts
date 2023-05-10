import * as path from 'path';
import * as _ from 'lodash';
import { YamlHelper } from '../../../utility/yaml_helper';
import { LocalServiceServiceLocator } from '../../../template/service/local/di_local_service';
import { BaseFile } from '../../base/base';

export class LocalServiceServiceLocatorFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'service', 'local', 'di');
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'local',
            'di',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new LocalServiceServiceLocator(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
