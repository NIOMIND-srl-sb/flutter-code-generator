import * as path from 'path';
import * as _ from 'lodash';
import { FileSystemManager } from '../utils/file_system_manager';
import { Model } from '../templates/model';
import { YamlHelper } from '../utils/yaml_helper';
import { BaseFile } from './base/base';

export class ModelFile extends BaseFile {
    constructor(rootPath: string, fileName: string, folders?: string[]) {
        super(rootPath, fileName, folders);
        this.createFolder();
    }

    createFolder(): void {
        FileSystemManager.createFolder(this.pathValue);
    }

    get pathValue(): string {
        if (this.folders === undefined) {
            return path.join(this.rootPath, 'lib', 'src', 'model');
        }
        return path.join(this.rootPath, 'lib', 'src', 'model', ...this.folders);
    }

    create(): void {
        const model = new Model(this.fileName, '');
        this.createFiles(this.pathValue, this.getFileName, model.dartString);
        YamlHelper.initializeWithDependencies();
    }

    // constructor(
    //     private rootPath: string,
    //     private fileName: string,
    //     private folders?: string[]
    // ) {
    //     AppLogger.debug(
    //         `ModelFile(rootPath: ${rootPath}, fileName: ${fileName})`
    //     );
    //     let folderCreated = FileSystemManager.createFolder(this.pathValue);
    //     if (!folderCreated) {
    //         return;
    //     }
    // }
    // public createModelFile() {
    //     const model = new Model(
    //         this.snakeCasedFileName,
    //         'Model',
    //         YamlHelper.getProjectName()
    //     );
    //     this.createFiles(this.snakeCasedFileName + '.dart', model.dartString);
    //     YamlHelper.initializeWithDependencies();
    // }
    // private get snakeCasedFileName(): string {
    //     let snakeCasedFileName = _.snakeCase(this.fileName);
    //     AppLogger.debug(`get snakeCasedFileName: ${snakeCasedFileName}`);
    //     return snakeCasedFileName;
    // }
    // private get pathValue(): string {
    //     if (this.folders === undefined) {
    //         return path.join(
    //             this.rootPath,
    //             'lib',
    //             'src',
    //             'model',
    //             this.snakeCasedFileName
    //         );
    //     }
    //     return path.join(
    //         this.rootPath,
    //         'lib',
    //         'src',
    //         'model',
    //         ...this.folders,
    //         this.snakeCasedFileName
    //     );
    // }
    // private createFiles(fileName: string, data: string) {
    //     if (existsSync(path.join(this.pathValue, this.snakeCasedFileName))) {
    //         AppLogger.error(`${fileName} already exists`);
    //         return;
    //     }
    //     FileSystemManager.createFile(this.pathValue, fileName, data);
    // }
}
