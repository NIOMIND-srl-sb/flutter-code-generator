import * as path from 'path';
import { YamlHelper } from '../../utility/yaml_helper';
import { BaseFile } from '../base/base';
import { LoadingIndicator } from '../../template/widget/loading_indicator';

export class LoadingIndicatorFile extends BaseFile {
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
        const baseModel = new LoadingIndicator(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}