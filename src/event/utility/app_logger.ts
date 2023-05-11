import * as path from 'path';
import { AppLogger } from '../../template/utility/app_logger';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';

export class AppLoggerFile extends BaseFile {
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
                'utility'
            );
        }
        return path.join(
            this.rootPath,
            'lib', 
            'src', 
            'utility', 
            ...this.folders
        );
    }

    create(): void {
        const model = new AppLogger(this.fileName, '');
        this.createFiles(
            this.pathValue, 
            this.getFileName, 
            model.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
