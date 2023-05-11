import * as path from 'path';
import { YamlHelper } from '../../../utility/yaml_helper';
import { FirebaseAppAuth } from '../../../template/service/auth/firebase_app_auth';
import { BaseFile } from '../../base/base';

export class FirebaseAppAuthFile extends BaseFile {
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
                'auth',
            );
        }
        return path.join(
            this.rootPath,
            'lib',
            'src',
            'service',
            'auth',
            ...this.folders
        );
    }

    create(): void {
        const baseModel = new FirebaseAppAuth(this.getFileName, '');
        this.createFiles(
            this.pathValue,
            this.getFileName,
            baseModel.dartString
        );
        YamlHelper.initializeWithDependencies();
    }
}
