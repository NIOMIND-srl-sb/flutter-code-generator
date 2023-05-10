import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { DiTheme } from '../../template/style/di_theme';

export class DiThemeFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'style', 'di');
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'style',
            'di',
            ...this.folders
        );
    }

    create(): void {
        const result = new DiTheme(this.getFileName, '');
        this.createFiles(this.pathValue, this.getFileName, result.dartString);
        YamlHelper.initializeWithDependencies();
    }
}
