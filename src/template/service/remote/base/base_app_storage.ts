import { BaseTemplate } from '../../../base/base';

export class BaseAppStorage extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'dart:io';
abstract class BaseAppStorage {
    Future<String> saveFile({
        required String fileName,
        required File file,
        Map<String, String>? customMetadata,
    });
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
