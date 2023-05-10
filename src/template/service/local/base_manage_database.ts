import { BaseTemplate } from '../../base/base';

export class BaseManageDatabase extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract class BaseManageDatabase {
  const BaseManageDatabase();

  List<String> getTables();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
