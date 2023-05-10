import { BaseTemplate } from '../../base/base';

export class LocalServiceServiceLocator extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_di_local_service.dart';
import '../database/app_database.dart';

class LocalServiceServiceLocator implements BaseLocalServiceServiceLocator {
  const LocalServiceServiceLocator();

  @override
  AppDatabase getAppDatabase() {
    return AppDatabase.db;
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
