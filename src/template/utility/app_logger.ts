import { BaseTemplate } from '../base/base';

export class AppLogger extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:logger/logger.dart';
import 'package:flutter/foundation.dart' show kIsWeb;

class AppLogger {
  static final logger = Logger(
    printer: PrettyPrinter(),
  );

  static void error(e) {
    logger.e(e.toString());
    if (!kIsWeb) {
      FirebaseCrashlytics.instance.recordError(e, null, fatal: true);
    }
  }

  static void warningAbnormalValue(String key, dynamic value) {
    logger.w({key: value});
    if (!kIsWeb) {
      FirebaseCrashlytics.instance.setCustomKey(key, value);
    }
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
