import { BaseTemplate } from '../../base/base';

export class BaseAppDatabase extends BaseTemplate {
  private _dartString: string;

  constructor(fileName: string, suffix: string) {
    super(fileName, suffix);
    this._dartString = `abstract class BaseAppDatabase {
  Future<int> insertData({
    required String tableName,
    required Map<String, dynamic> item,
  });

  Future<void> insertListData({
    required List<String> listTableName,
    required List<Map<String, dynamic>> listItem,
    bool forceUpdate = false,
  });

  Future<List<Map>> getData({
    required String tableName,
    String? where,
    String? orderBy,
    int? limit,
    List? whereArgs,
    int? offset,
  });

  Future<int> updateData({
    required String tableName,
    required Map<String, dynamic> item,
    required String where,
    required List whereArgs,
  });

  Future<void> updateListData({
    required List<String> listTableName,
    required List<Map<String, dynamic>> listItem,
    required List<String> listWhere,
    required List<List<Object?>?> listWhereArgs,
  });

  Future<int> deleteData({
    required String tableName,
    required String where,
    required List<Object?> whereArgs,
  });

  Future<List<Map>> rawQuery({
    required String query,
    required List<Object?> whereArgs,
  });

  Future<void> deleteDataWithBatch({
    required List<String> listTable,
    required List<String> listWhere,
    required List<List<String>> listWhereArgs,
  });

  Future<int?> getCountData({
    required String tableName,
    String? where,
    List? whereArgs,
  });
}
`;
  }

  get dartString(): string {
    return this._dartString;
  }
}
