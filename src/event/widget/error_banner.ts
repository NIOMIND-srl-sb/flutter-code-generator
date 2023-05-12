import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { ErrorBanner } from '../../template/widget/error_banner';

export class ErrorBannerFile extends BaseFile {
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
                'widget',
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'widget',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new ErrorBanner(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}