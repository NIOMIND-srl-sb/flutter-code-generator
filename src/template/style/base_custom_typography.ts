import { BaseTemplate } from '../base/base';

export class BaseCustomTypography extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

abstract mixin class BaseAppCustomTypography {
  TextStyle get decoratedText;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
