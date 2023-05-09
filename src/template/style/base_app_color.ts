import { BaseTemplate } from '../base/base';

export class BaseAppColor extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

abstract class BaseAppColor {
  Color get darkPrimary;
  Color get darkOnPrimary;
  Color get darkPrimaryContainer;
  Color get darkOnPrimaryContainer;
  Color get darkSecondary;
  Color get darkOnSecondary;
  Color get darkSecondaryContainer;
  Color get darkOnSecondaryContainer;
  Color get darkTertiary;
  Color get darkOnTertiary;
  Color get darkTertiaryContainer;
  Color get darkOnTertiaryContainer;
  Color get darkError;
  Color get darkOnError;
  Color get darkErrorContainer;
  Color get darkOnErrorContainer;
  Color get darkBackground;
  Color get darkOnBackground;
  Color get darkSurface;
  Color get darkOnSurface;
  Color get darkSurfaceVariant;
  Color get darkOnSurfaceVariant;
  Color get darkInverseSurface;
  Color get darkInverseOnSurface;
  Color get darkSurfaceTint;
  Color get darkSurfaceTintColor;
  Color get darkOutline;
  Color get darkOutlineVariant;
  Color get darkShadow;
  Color get darkInversePrimary;

  Color get lightPrimary;
  Color get lightOnPrimary;
  Color get lightPrimaryContainer;
  Color get lightOnPrimaryContainer;
  Color get lightSecondary;
  Color get lightOnSecondary;
  Color get lightSecondaryContainer;
  Color get lightOnSecondaryContainer;
  Color get lightTertiary;
  Color get lightOnTertiary;
  Color get lightTertiaryContainer;
  Color get lightOnTertiaryContainer;
  Color get lightError;
  Color get lightOnError;
  Color get lightErrorContainer;
  Color get lightOnErrorContainer;
  Color get lightBackground;
  Color get lightOnBackground;
  Color get lightSurface;
  Color get lightOnSurface;
  Color get lightSurfaceVariant;
  Color get lightOnSurfaceVariant;
  Color get lightInverseSurface;
  Color get lightInverseOnSurface;
  Color get lightSurfaceTint;
  Color get lightSurfaceTintColor;
  Color get lightOutline;
  Color get lightOutlineVariant;
  Color get lightShadow;
  Color get lightInversePrimary;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
