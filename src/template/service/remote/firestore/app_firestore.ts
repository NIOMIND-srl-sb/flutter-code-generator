import { BaseTemplate } from '../../../base/base';

export class AppFirestore extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:cloud_firestore/cloud_firestore.dart';
import '../base/base_app_firestore.dart';

class AppFirestore extends BaseAppFirestore {
  static final AppFirestore _appFirestore = AppFirestore._internal();

  factory AppFirestore() => _appFirestore;

  AppFirestore._internal();

  @override
  Future<void> insertData({
    required String tableName,
    required String docId,
    required Map<String, dynamic> item,
  }) async {
    final db = FirebaseFirestore.instance;
    await db.collection(tableName).doc(docId).set(
          item,
          SetOptions(merge: false),
        );
  }

  @override
  Future<void> updateData({
    required String tableName,
    required String docId,
    required Map<String, dynamic> item,
  }) async {
    final db = FirebaseFirestore.instance;
    await db.collection(tableName).doc(docId).set(
          item,
          SetOptions(merge: true),
        );
  }

  @override
  Future<void> deleteData({
    required String tableName,
    required String docId,
  }) async {
    final db = FirebaseFirestore.instance;
    await db.collection(tableName).doc(docId).delete();
  }

  @override
  Future<Map?> getData({
    required String tableName,
    required String docId,
  }) async {
    final db = FirebaseFirestore.instance;
    final result = await db.collection(tableName).doc(docId).get();
    return result.data();
  }

  @override
  Future<List<Map>> getListData({
    required String tableName,
    required int pageSize,
    required String sortKey,
    required bool sortDescending,
    dynamic offset,
    String? field,
    dynamic value,
  }) async {
    final db = FirebaseFirestore.instance;
    final QuerySnapshot<Map<String, dynamic>> result;
    if (offset != null) {
      if (field == null) {
        result = await db
            .collection(tableName)
            .orderBy(sortKey, descending: sortDescending)
            .startAfter([offset])
            .limit(pageSize)
            .get();
      } else {
        result = await db
            .collection(tableName)
            .where(field, isEqualTo: value)
            .orderBy(sortKey, descending: sortDescending)
            .startAfter([offset])
            .limit(pageSize)
            .get();
      }
    } else {
      if (field == null) {
        result = await db
            .collection(tableName)
            .orderBy(sortKey, descending: sortDescending)
            .limit(pageSize)
            .get();
      } else {
        result = await db
            .collection(tableName)
            .where(field, isEqualTo: value)
            .orderBy(sortKey, descending: sortDescending)
            .limit(pageSize)
            .get();
      }
    }
    return result.docs.map((doc) => doc.data()).toList();
  }

  @override
  Future<int> getCountData({
    required String tableName,
    String? field,
    dynamic value,
  }) async {
    final db = FirebaseFirestore.instance;
    final AggregateQuerySnapshot result;
    if (field == null) {
      result = await db.collection(tableName).count().get();
    } else {
      result = await db
          .collection(tableName)
          .where(field, isEqualTo: value)
          .count()
          .get();
    }

    return result.count;
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
