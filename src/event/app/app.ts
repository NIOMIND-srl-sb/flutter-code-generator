import * as path from 'path';
import * as _ from 'lodash';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { App } from '../../template/app/app';

export class AppFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'app');
        }
        return path.join(this.rootPath, 'lib', 'src', 'app', ...this.folders);
    }

    create(): void {
        const result = new App(this.fileName, '');
        this.createFiles(this.pathValue, 'app.dart', result.dartString);
        YamlHelper.initializeWithDependencies();
    }
}
