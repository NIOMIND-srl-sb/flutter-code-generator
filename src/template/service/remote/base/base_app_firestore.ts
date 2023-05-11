import { BaseTemplate } from '../../../base/base';

export class BaseAppFirestore extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract class BaseAppFirestore {
  Future<void> insertData({
    required String tableName,
    required String docId,
    required Map<String, dynamic> item,
  });

  Future<void> updateData({
    required String tableName,
    required String docId,
    required Map<String, dynamic> item,
  });

  Future<void> deleteData({
    required String tableName,
    required String docId,
  });

  Future<Map?> getData({
    required String tableName,
    required String docId,
  });

  Future<List<Map>> getListData({
    required String tableName,
    required int pageSize,
    required String sortKey,
    required bool sortDescending,
    dynamic offset,
    String? field,
    dynamic value,
  });

  Future<int?> getCountData({
    required String tableName,
    String? field,
    dynamic value,
  });
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
