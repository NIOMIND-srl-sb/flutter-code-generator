import { BaseTemplate } from '../base/base';

export class BaseTheme extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

abstract class BaseAppTheme {
  ThemeData get lightTheme;

  ThemeData get darkTheme;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
