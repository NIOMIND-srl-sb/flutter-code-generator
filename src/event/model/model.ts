import * as path from 'path';
import { Model } from '../../template/model/model';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';

export class ModelFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'model');
        }
        return path.join(this.rootPath, 'lib', 'src', 'model', ...this.folders);
    }

    create(): void {
        const model = new Model(this.fileName, '');
        this.createFiles(this.pathValue, this.getFileName, model.dartString);
        YamlHelper.initializeWithDependencies();
    }
}
