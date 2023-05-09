import { BaseTemplate } from '../base/base';

export class BaseElevation extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

abstract class BaseAppElevation {
  List<BoxShadow> get elevation1ForBoxShadow;
  double get elevation1;

  List<BoxShadow> get elevation2ForBoxShadow;
  double get elevation2;

  List<BoxShadow> get elevation3ForBoxShadow;
  double get elevation3;

  List<BoxShadow> get elevation4ForBoxShadow;
  double get elevation4;

  List<BoxShadow> get elevation5ForBoxShadow;
  double get elevation5;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
