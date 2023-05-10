import { BaseTemplate } from '../../base/base';

export class BaseDiLocalService extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../database/app_database.dart';

abstract class BaseLocalServiceServiceLocator {
  AppDatabase getAppDatabase();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
