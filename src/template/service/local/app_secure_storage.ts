import { BaseTemplate } from '../../base/base';

export class AppSecureStorage extends BaseTemplate {
  private _dartString: string;

  constructor(fileName: string, suffix: string) {
    super(fileName, suffix);
    this._dartString = `import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import '../base/base_app_secure_storage.dart';

class AppSecureStorage extends BaseAppSecureStorage {
  static final AppSecureStorage _appSecureStorage =
      AppSecureStorage._internal();

  factory AppSecureStorage() => _appSecureStorage;

  AppSecureStorage._internal();

  @override
  Future<void> delete(String key) async {
    const secureStorage = FlutterSecureStorage();
    await secureStorage.delete(key: key);
  }

  @override
  Future<void> deleteAll() async {
    const secureStorage = FlutterSecureStorage();
    await secureStorage.deleteAll();
  }

  @override
  Future<String?> read(String key) async {
    const secureStorage = FlutterSecureStorage();
    return await secureStorage.read(key: key);
  }

  @override
  Future<Map<String, String>> readAll() async {
    const secureStorage = FlutterSecureStorage();
    return await secureStorage.readAll();
  }

  @override
  Future<void> write(String key, String value) async {
    const secureStorage = FlutterSecureStorage();
    await secureStorage.write(key: key, value: value);
  }
}`;
  }

  get dartString(): string {
    return this._dartString;
  }
}
