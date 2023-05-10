import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { Typography } from '../../template/style/typography';

export class TypographyFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'style');
        }
        return path.join(this.rootPath, 'lib', 'src', 'style', ...this.folders);
    }

    create(): void {
        const result = new Typography(this.getFileName, '');
        this.createFiles(this.pathValue, this.getFileName, result.dartString);
        YamlHelper.initializeWithDependencies();
    }
}
