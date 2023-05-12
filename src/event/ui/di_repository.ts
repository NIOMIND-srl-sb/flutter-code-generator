import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { RepositoryServiceLocator } from '../../template/ui/di_repository';

export class RepositoryServiceLocatorFile extends BaseFile {
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
                'ui',
                'di'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'ui',
            ...this.folders,
            'di',   
        );
    }

    create(): void {
        const baseModel = new RepositoryServiceLocator(this.folders !== undefined ? this.folders![0] : this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}