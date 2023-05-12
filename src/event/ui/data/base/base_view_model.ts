import * as path from 'path';
import { YamlHelper } from '../../../../utility/yaml_helper';
import { BaseFile } from '../../../base/base';
import { BaseDataViewModel } from '../../../../template/ui/data/base/base_view_model';

export class BaseDataViewModelFile extends BaseFile {
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
                'base'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'ui',
            ...this.folders,
            'base'
        );
    }

    create(): void {
        const baseModel = new BaseDataViewModel(this.folders !== undefined ? this.folders![0] : this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}