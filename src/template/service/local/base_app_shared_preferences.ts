import { BaseTemplate } from '../../base/base';

export class BaseAppSharedPreferences extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract class BaseAppSharedPreferences {
  BaseAppSharedPreferences();

  Future<void> setInt(String key, int value);
  Future<void> setDouble(String key, double value);
  Future<void> setBool(String key, bool value);
  Future<void> setString(String key, String value);
  Future<void> setStringList(String key, List<String> value);

  Future<int?> getInt(String key);
  Future<double?> getDouble(String key);
  Future<bool?> getBool(String key);
  Future<String?> getString(String key);
  Future<List<String>?> getStringList(String key);
  Future<bool> remove(String key);
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
