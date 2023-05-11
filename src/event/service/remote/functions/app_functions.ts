import * as path from 'path';
import { YamlHelper } from '../../../../utility/yaml_helper';
import { BaseFile } from '../../../base/base';
import { AppFunctions } from '../../../../template/service/remote/functions/app_functions';

export class AppFunctionsFile extends BaseFile {
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
                'service',
                'remote',
                'functions'
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'remote',
            'functions',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new AppFunctions(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}