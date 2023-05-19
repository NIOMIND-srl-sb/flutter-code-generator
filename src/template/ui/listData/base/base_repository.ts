import { BaseTemplate } from '../../../base/base';

export class BaseListDataRepository extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'dart:async';

abstract class Base${this.className}Repository {
  Base${this.className}Repository();

  List<dynamic>? listData;
  List<dynamic> listAllData = [];
  int? offsetDate;
  int countTotalData = 0;

  Stream<List<dynamic>> get streamListData;
  Future<void> getListData({
    int page = 0,
    int pageSize = 100,
    int? offsetDate,
  });
  void close();
}
`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
