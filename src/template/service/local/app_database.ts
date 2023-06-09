import { BaseTemplate } from '../../base/base';

export class AppDatabase extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'dart:async';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';
import '../base/base_app_database.dart';
import '../base/base_database.dart';
import 'manage_database.dart';

class AppDatabase extends BaseDatabase with BaseAppDatabase {
  static final AppDatabase db = AppDatabase._internal();
  static Database? _db;
  bool _isOpen = false;

  factory AppDatabase() => db;

  AppDatabase._internal();

  @override
  String get foreignKeysON => 'PRAGMA foreign_keys = ON';

  @override
  String get databaseName => 'database.db';

  @override
  bool get isOpen => _isOpen;

  @override
  Future<Database> get database async {
    if (_db != null) return _db!;
    _db = await initialize();
    return _db!;
  }

  @override
  Future<void> onConfigure(dynamic db) async {
    await db.execute(foreignKeysON);
  }

  @override
  Future<void> onCreate(dynamic db, int version) async {
    final batch = db.batch();
    const tableDatabase = ManageDatabase();
    for (String q in tableDatabase.getTables()) {
      batch.execute(q);
    }
    await batch.commit();
  }

  @override
  Future<void> onUpgrade(
    dynamic db,
    int oldVersion,
    int newVersion,
  ) async {}

  @override
  Future<void> onOpen(dynamic db) async {
    _isOpen = true;
  }

  @override
  Future<Database> initialize() async {
    var databasesPath = await getDatabasesPath();
    var path = join(databasesPath, databaseName);
    return await openDatabase(
      path,
      version: 1,
      onConfigure: onConfigure,
      onCreate: onCreate,
      onUpgrade: onUpgrade,
      onOpen: onOpen,
    );
  }

  @override
  Future<void> close() async {
    _db?.close();
    _isOpen = false;
  }

  @override
  Future<int> insertData({
    required String tableName,
    required Map<String, dynamic> item,
  }) async {
    final db = await database;
    return await db.insert(
      tableName,
      item,
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  @override
  Future<void> insertListData({
    required List<String> listTableName,
    required List<Map<String, dynamic>> listItem,
    bool forceUpdate = false,
  }) async {
    final db = await database;
    final batch = db.batch();
    for (var i = 0; i < listTableName.length; i++) {
      final tableName = listTableName[i];
      final item = listItem[i];
      batch.insert(
        tableName,
        item,
        conflictAlgorithm:
            forceUpdate ? ConflictAlgorithm.replace : ConflictAlgorithm.abort,
      );
    }
    await batch.commit();
  }

  @override
  Future<List<Map>> getData({
    required String tableName,
    String? where,
    String? orderBy,
    int? limit,
    List? whereArgs,
    int? offset,
  }) async {
    final db = await database;
    return await db.query(
      tableName,
      where: where,
      whereArgs: whereArgs,
      orderBy: orderBy,
      limit: limit,
      offset: offset,
    );
  }

  @override
  Future<int> updateData({
    required String tableName,
    required Map<String, dynamic> item,
    required String where,
    required List whereArgs,
  }) async {
    final db = await database;
    return await db.update(
      tableName,
      item,
      where: where,
      whereArgs: whereArgs,
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  @override
  Future<void> updateListData({
    required List<String> listTableName,
    required List<Map<String, dynamic>> listItem,
    required List<String> listWhere,
    required List<List<Object?>?> listWhereArgs,
  }) async {
    final db = await database;

    final batch = db.batch();
    for (var i = 0; i < listTableName.length; i++) {
      final tableName = listTableName[i];
      final item = listItem[i];
      final where = listWhere[i];
      final whereArgs = listWhereArgs[i];
      batch.update(
        tableName,
        item,
        where: where,
        whereArgs: whereArgs,
        conflictAlgorithm: ConflictAlgorithm.replace,
      );
    }

    await batch.commit();
  }

  @override
  Future<int> deleteData({
    required String tableName,
    required String where,
    required List<Object?> whereArgs,
  }) async {
    final db = await database;
    return await db.delete(
      tableName,
      where: where,
      whereArgs: whereArgs,
    );
  }

  @override
  Future<List<Map<String, Object?>>> rawQuery({
    required String query,
    required List<Object?> whereArgs,
  }) async {
    final db = await database;
    return await db.rawQuery(query, whereArgs);
  }

  @override
  Future<void> deleteDataWithBatch({
    required List<String> listTable,
    required List<String> listWhere,
    required List<List<String>> listWhereArgs,
  }) async {
    final db = await database;
    var batch = db.batch();
    for (var i = 0; i < listTable.length; i++) {
      var table = listTable[i];
      var where = listWhere[i];
      var whereArgs = listWhereArgs[i];
      batch.delete(table, where: where, whereArgs: whereArgs);
    }
    await batch.commit(noResult: true);
  }

  @override
  Future<int?> getCountData({
    required String tableName,
    String? where,
    List? whereArgs,
  }) async {
    final db = await database;
    String query =
        'SELECT COUNT(*) FROM $tableName\${where != null ? ' WHERE $where' : ''}';

    final result = await db.rawQuery(query, whereArgs);
    return Sqflite.firstIntValue(result);
  }
}
`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
