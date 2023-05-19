import { BaseTemplate } from '../base/base';

export class BaseCustomColor extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

abstract mixin class BaseAppCustomColor {
  Color get lightTextBody;
  Color get lightTextLink;
  Color get lightTextLabel;
  Color get lightTextTitle;

  Color get darkTextBody;
  Color get darkTextLink;
  Color get darkTextLabel;
  Color get darkTextTitle;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
