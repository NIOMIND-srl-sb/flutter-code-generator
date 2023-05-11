import { BaseTemplate } from '../../../base/base';

export class AppStorage extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'dart:io';
import 'package:firebase_storage/firebase_storage.dart';
import '../base/base_app_storage.dart';

class AppStorage extends BaseAppStorage {
  static final AppStorage _appStorage = AppStorage._internal();

  factory AppStorage() => _appStorage;

  AppStorage._internal();

  @override
  Future<String> saveFile({
    required String fileName,
    required File file,
    Map<String, String>? customMetadata,
  }) async {
    final storageRef = FirebaseStorage.instance.ref();
    final mountainImagesRef = storageRef.child(fileName);
    final metadata = SettableMetadata(customMetadata: customMetadata);

    var uploadTask = await mountainImagesRef.putFile(file, metadata);
    var url = await uploadTask.ref.getDownloadURL();
    return url;
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
