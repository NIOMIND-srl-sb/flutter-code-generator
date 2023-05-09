import * as path from 'path';
import * as _ from 'lodash';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { BaseElevation } from '../../template/style/base_elevation';

export class BaseElevationFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'style', 'base');
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'style',
            'base',
            ...this.folders
        );
    }

    create(): void {
        const result = new BaseElevation(this.getFileName, '');
        this.createFiles(this.pathValue, this.getFileName, result.dartString);
        YamlHelper.initializeWithDependencies();
    }
}
