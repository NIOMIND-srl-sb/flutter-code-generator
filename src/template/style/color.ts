import { BaseTemplate } from '../base/base';

export class Color extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'base/base_color.dart';
import 'base/base_custom_color.dart';

class AppColor extends BaseAppColor with BaseAppCustomColor {
  @override
  // TODO: implement darkError
  MaterialColor get darkError => throw UnimplementedError();

  @override
  // TODO: implement darkPrimary
  MaterialColor get darkPrimary => throw UnimplementedError();

  @override
  // TODO: implement darkSecondary
  MaterialColor get darkSecondary => throw UnimplementedError();

  @override
  // TODO: implement darkTertiary
  MaterialColor get darkTertiary => throw UnimplementedError();

  @override
  // TODO: implement darkBackground
  Color get darkBackground => throw UnimplementedError();

  @override
  // TODO: implement darkErrorContainer
  Color get darkErrorContainer => throw UnimplementedError();

  @override
  // TODO: implement darkInverseOnSurface
  Color get darkInverseOnSurface => throw UnimplementedError();

  @override
  // TODO: implement darkInversePrimary
  Color get darkInversePrimary => throw UnimplementedError();

  @override
  // TODO: implement darkInverseSurface
  Color get darkInverseSurface => throw UnimplementedError();

  @override
  // TODO: implement darkOnBackground
  Color get darkOnBackground => throw UnimplementedError();

  @override
  // TODO: implement darkOnError
  Color get darkOnError => throw UnimplementedError();

  @override
  // TODO: implement darkOnErrorContainer
  Color get darkOnErrorContainer => throw UnimplementedError();

  @override
  // TODO: implement darkOnPrimary
  Color get darkOnPrimary => throw UnimplementedError();

  @override
  // TODO: implement darkOnPrimaryContainer
  Color get darkOnPrimaryContainer => throw UnimplementedError();

  @override
  // TODO: implement darkOnSecondary
  Color get darkOnSecondary => throw UnimplementedError();

  @override
  // TODO: implement darkOnSecondaryContainer
  Color get darkOnSecondaryContainer => throw UnimplementedError();

  @override
  // TODO: implement darkOnSurface
  Color get darkOnSurface => throw UnimplementedError();

  @override
  // TODO: implement darkOnSurfaceVariant
  Color get darkOnSurfaceVariant => throw UnimplementedError();

  @override
  // TODO: implement darkOnTertiary
  Color get darkOnTertiary => throw UnimplementedError();

  @override
  // TODO: implement darkOnTertiaryContainer
  Color get darkOnTertiaryContainer => throw UnimplementedError();

  @override
  // TODO: implement darkOutline
  Color get darkOutline => throw UnimplementedError();

  @override
  // TODO: implement darkOutlineVariant
  Color get darkOutlineVariant => throw UnimplementedError();

  @override
  // TODO: implement darkPrimaryContainer
  Color get darkPrimaryContainer => throw UnimplementedError();

  @override
  // TODO: implement darkSecondaryContainer
  Color get darkSecondaryContainer => throw UnimplementedError();

  @override
  // TODO: implement darkShadow
  Color get darkShadow => throw UnimplementedError();

  @override
  // TODO: implement darkSurface
  Color get darkSurface => throw UnimplementedError();

  @override
  // TODO: implement darkSurfaceTint
  Color get darkSurfaceTint => throw UnimplementedError();

  @override
  // TODO: implement darkSurfaceTintColor
  Color get darkSurfaceTintColor => throw UnimplementedError();

  @override
  // TODO: implement darkSurfaceVariant
  Color get darkSurfaceVariant => throw UnimplementedError();

  @override
  // TODO: implement darkTertiaryContainer
  Color get darkTertiaryContainer => throw UnimplementedError();

  @override
  // TODO: implement darkNeutral
  MaterialColor get darkNeutral => throw UnimplementedError();

  @override
  // TODO: implement darkNeutralVariant
  MaterialColor get darkNeutralVariant => throw UnimplementedError();


  @override
  // TODO: implement lightBackground
  Color get lightBackground => throw UnimplementedError();

  @override
  // TODO: implement lightErrorContainer
  Color get lightErrorContainer => throw UnimplementedError();

  @override
  // TODO: implement lightInverseOnSurface
  Color get lightInverseOnSurface => throw UnimplementedError();

  @override
  // TODO: implement lightInversePrimary
  Color get lightInversePrimary => throw UnimplementedError();

  @override
  // TODO: implement lightInverseSurface
  Color get lightInverseSurface => throw UnimplementedError();

  @override
  // TODO: implement lightOnBackground
  Color get lightOnBackground => throw UnimplementedError();

  @override
  // TODO: implement lightOnError
  Color get lightOnError => throw UnimplementedError();

  @override
  // TODO: implement lightOnErrorContainer
  Color get lightOnErrorContainer => throw UnimplementedError();

  @override
  // TODO: implement lightOnPrimary
  Color get lightOnPrimary => throw UnimplementedError();

  @override
  // TODO: implement lightOnPrimaryContainer
  Color get lightOnPrimaryContainer => throw UnimplementedError();

  @override
  // TODO: implement lightOnSecondary
  Color get lightOnSecondary => throw UnimplementedError();

  @override
  // TODO: implement lightOnSecondaryContainer
  Color get lightOnSecondaryContainer => throw UnimplementedError();

  @override
  // TODO: implement lightOnSurface
  Color get lightOnSurface => throw UnimplementedError();

  @override
  // TODO: implement lightOnSurfaceVariant
  Color get lightOnSurfaceVariant => throw UnimplementedError();

  @override
  // TODO: implement lightOnTertiary
  Color get lightOnTertiary => throw UnimplementedError();

  @override
  // TODO: implement lightOnTertiaryContainer
  Color get lightOnTertiaryContainer => throw UnimplementedError();

  @override
  // TODO: implement lightOutline
  Color get lightOutline => throw UnimplementedError();

  @override
  // TODO: implement lightOutlineVariant
  Color get lightOutlineVariant => throw UnimplementedError();

  @override
  // TODO: implement lightPrimaryContainer
  Color get lightPrimaryContainer => throw UnimplementedError();

  @override
  // TODO: implement lightSecondaryContainer
  Color get lightSecondaryContainer => throw UnimplementedError();

  @override
  // TODO: implement lightShadow
  Color get lightShadow => throw UnimplementedError();

  @override
  // TODO: implement lightSurface
  Color get lightSurface => throw UnimplementedError();

  @override
  // TODO: implement lightSurfaceTint
  Color get lightSurfaceTint => throw UnimplementedError();

  @override
  // TODO: implement lightSurfaceTintColor
  Color get lightSurfaceTintColor => throw UnimplementedError();

  @override
  // TODO: implement lightSurfaceVariant
  Color get lightSurfaceVariant => throw UnimplementedError();

  @override
  // TODO: implement lightTertiaryContainer
  Color get lightTertiaryContainer => throw UnimplementedError();
  
  @override
  // TODO: implement lightError
  MaterialColor get lightError => throw UnimplementedError();
  
  @override
  // TODO: implement lightPrimary
  MaterialColor get lightPrimary => throw UnimplementedError();
  
  @override
  // TODO: implement lightSecondary
  MaterialColor get lightSecondary => throw UnimplementedError();
  
  @override
  // TODO: implement lightTertiary
  MaterialColor get lightTertiary => throw UnimplementedError();

  @override
  // TODO: implement lightNeutral
  MaterialColor get lightNeutral => throw UnimplementedError();

  @override
  // TODO: implement lightNeutralVariant
  MaterialColor get lightNeutralVariant => throw UnimplementedError();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
