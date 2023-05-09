import * as path from 'path';
import * as _ from 'lodash';
import { FileSystemManager } from '../utility/file_system_manager';
import { YamlHelper } from '../utility/yaml_helper';
import { BaseModel } from '../template/base_model';
import { BaseFile } from './base/base';

export class BaseModelFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'model', 'base');
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'model',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new BaseModel(
            this.getFileName,
            'Model',
            YamlHelper.getProjectName()
        );
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
