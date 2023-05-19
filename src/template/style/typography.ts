import { BaseTemplate } from '../base/base';

export class Typography extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'base/base_typography.dart';
import 'base/base_custom_typography.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTypography extends BaseAppTypography with BaseAppCustomTypography {
  @override
  // TODO: implement bodyLarge
  TextStyle get bodyLarge => throw UnimplementedError();

  @override
  // TODO: implement bodyMedium
  TextStyle get bodyMedium => throw UnimplementedError();

  @override
  // TODO: implement bodySmall
  TextStyle get bodySmall => throw UnimplementedError();

  @override
  // TODO: implement displayLarge
  TextStyle get displayLarge => throw UnimplementedError();

  @override
  // TODO: implement displayMedium
  TextStyle get displayMedium => throw UnimplementedError();

  @override
  // TODO: implement displaySmall
  TextStyle get displaySmall => throw UnimplementedError();

  @override
  // TODO: implement headlineLarge
  TextStyle get headlineLarge => throw UnimplementedError();

  @override
  // TODO: implement headlineMedium
  TextStyle get headlineMedium => throw UnimplementedError();

  @override
  // TODO: implement headlineSmall
  TextStyle get headlineSmall => throw UnimplementedError();

  @override
  // TODO: implement labelLarge
  TextStyle get labelLarge => throw UnimplementedError();

  @override
  // TODO: implement labelMedium
  TextStyle get labelMedium => throw UnimplementedError();

  @override
  // TODO: implement labelSmall
  TextStyle get labelSmall => throw UnimplementedError();

  @override
  // TODO: implement titleLarge
  TextStyle get titleLarge => throw UnimplementedError();

  @override
  // TODO: implement titleMedium
  TextStyle get titleMedium => throw UnimplementedError();

  @override
  // TODO: implement titleSmall
  TextStyle get titleSmall => throw UnimplementedError();
  
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
