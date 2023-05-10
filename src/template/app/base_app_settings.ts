import { BaseTemplate } from '../base/base';

export class BaseAppSettings extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

abstract class BaseAppSettings extends ChangeNotifier {
  ThemeMode get themeMode;
  ThemeData get lightThemeData;
  ThemeData get darkThemeData;

  Future<void> init();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
