import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { BaseFile } from '../../base/base';
import { ListDataView } from '../../../template/ui/listData/view';

export class ListDataViewFile extends BaseFile {
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
                'ui',
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'ui',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new ListDataView(this.folders !== undefined ? this.folders![0] : this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}