import { BaseTemplate } from '../../base/base';

export class BaseAppSecureStorage extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract class BaseAppSecureStorage {
  BaseAppSecureStorage();

  Future<void> write(String key, String value);
  Future<String?> read(String key);
  Future<Map<String, String>> readAll();
  Future<void> delete(String key);
  Future<void> deleteAll();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
