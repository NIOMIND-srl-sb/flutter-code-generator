import { BaseTemplate } from '../../base/base';

export class ManageDatabase extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_manage_database.dart';
        
  class ManageDatabase extends BaseManageDatabase {
  const ManageDatabase();

  @override
  List<String> getTables() {
    return [
      // TODO: implement tables from the various models, example: User.fromEmpty().tableString
    ];
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
