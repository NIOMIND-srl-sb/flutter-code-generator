import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { UserModel } from '../../template/model/user_model';
import { BaseFile } from '../base/base';

export class UserModelFile extends BaseFile {
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
                'model'
            );
        }
        return path.join(
            this.rootPath, 
            'lib', 
            'src', 
            'model', 
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new UserModel(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
