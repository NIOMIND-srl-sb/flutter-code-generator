import { BaseTemplate } from '../base/base';

export class Elevation extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'base/base_elevation.dart';

class AppElevation extends BaseAppElevation {
  @override
  // TODO: implement elevation1
  double get elevation1 => throw UnimplementedError();

  @override
  // TODO: implement elevation1ForBoxShadow
  List<BoxShadow> get elevation1ForBoxShadow => throw UnimplementedError();

  @override
  // TODO: implement elevation2
  double get elevation2 => throw UnimplementedError();

  @override
  // TODO: implement elevation2ForBoxShadow
  List<BoxShadow> get elevation2ForBoxShadow => throw UnimplementedError();

  @override
  // TODO: implement elevation3
  double get elevation3 => throw UnimplementedError();

  @override
  // TODO: implement elevation3ForBoxShadow
  List<BoxShadow> get elevation3ForBoxShadow => throw UnimplementedError();

  @override
  // TODO: implement elevation4
  double get elevation4 => throw UnimplementedError();

  @override
  // TODO: implement elevation4ForBoxShadow
  List<BoxShadow> get elevation4ForBoxShadow => throw UnimplementedError();

  @override
  // TODO: implement elevation5
  double get elevation5 => throw UnimplementedError();

  @override
  // TODO: implement elevation5ForBoxShadow
  List<BoxShadow> get elevation5ForBoxShadow => throw UnimplementedError();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
