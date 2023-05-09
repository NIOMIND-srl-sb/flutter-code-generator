import { BaseTemplate } from '../base/base';

export class Theme extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'base/base_theme.dart';
import 'color.dart';
import 'di/di_theme.dart';
import 'typography.dart';

class AppTheme extends BaseAppTheme {
  late final AppColor _appColor;
  late final AppTypography _appTypography;

  AppTheme({
    AppColor? appColor,
    AppTypography? appTypography,
  }) {
    var serviceLocator = AppThemeServiceLocator();
    _appColor = appColor ?? serviceLocator.getAppColor();
    _appTypography = appTypography ?? serviceLocator.getAppTypography();
  }

  @override
  ThemeData get darkTheme => ThemeData(
        useMaterial3: true,
        textTheme: TextTheme(
          displayLarge: _appTypography.displayLarge,
          displayMedium: _appTypography.displayMedium,
          displaySmall: _appTypography.displaySmall,
          headlineLarge: _appTypography.headlineLarge,
          headlineMedium: _appTypography.headlineMedium,
          headlineSmall: _appTypography.headlineSmall,
          titleLarge: _appTypography.titleLarge,
          titleMedium: _appTypography.titleMedium,
          titleSmall: _appTypography.titleSmall,
          bodyLarge: _appTypography.bodyLarge,
          bodyMedium: _appTypography.bodyMedium,
          bodySmall: _appTypography.bodySmall,
          labelLarge: _appTypography.labelLarge,
          labelMedium: _appTypography.labelMedium,
          labelSmall: _appTypography.labelSmall,
        ),
        colorScheme: ColorScheme(
          brightness: Brightness.dark,
          primary: _appColor.darkPrimary,
          onPrimary: _appColor.darkOnPrimary,
          primaryContainer: _appColor.darkPrimaryContainer,
          onPrimaryContainer: _appColor.darkOnPrimaryContainer,
          secondary: _appColor.darkSecondary,
          onSecondary: _appColor.darkOnSecondary,
          secondaryContainer: _appColor.darkSecondaryContainer,
          onSecondaryContainer: _appColor.darkOnSecondaryContainer,
          tertiary: _appColor.darkOnTertiary,
          onTertiary: _appColor.darkOnTertiary,
          tertiaryContainer: _appColor.darkTertiaryContainer,
          onTertiaryContainer: _appColor.darkOnTertiaryContainer,
          error: _appColor.darkError,
          onError: _appColor.darkOnError,
          errorContainer: _appColor.darkErrorContainer,
          onErrorContainer: _appColor.darkOnErrorContainer,
          background: _appColor.darkBackground,
          onBackground: _appColor.darkOnBackground,
          surface: _appColor.darkSurface,
          onSurface: _appColor.darkOnSurface,
          surfaceVariant: _appColor.darkSurfaceVariant,
          onSurfaceVariant: _appColor.darkOnSurfaceVariant,
          outline: _appColor.darkOutline,
          shadow: _appColor.darkShadow,
          inverseSurface: _appColor.darkInverseSurface,
          onInverseSurface: _appColor.darkInverseOnSurface,
          inversePrimary: _appColor.darkInversePrimary,
          surfaceTint: _appColor.darkSurfaceTint,
        ),
      );

  @override
  ThemeData get lightTheme => ThemeData(
        useMaterial3: true,
        textTheme: TextTheme(
          displayLarge: _appTypography.displayLarge,
          displayMedium: _appTypography.displayMedium,
          displaySmall: _appTypography.displaySmall,
          headlineLarge: _appTypography.headlineLarge,
          headlineMedium: _appTypography.headlineMedium,
          headlineSmall: _appTypography.headlineSmall,
          titleLarge: _appTypography.titleLarge,
          titleMedium: _appTypography.titleMedium,
          titleSmall: _appTypography.titleSmall,
          bodyLarge: _appTypography.bodyLarge,
          bodyMedium: _appTypography.bodyMedium,
          bodySmall: _appTypography.bodySmall,
          labelLarge: _appTypography.labelLarge,
          labelMedium: _appTypography.labelMedium,
          labelSmall: _appTypography.labelSmall,
        ),
        colorScheme: ColorScheme(
          brightness: Brightness.light,
          primary: _appColor.lightPrimary,
          onPrimary: _appColor.lightOnPrimary,
          primaryContainer: _appColor.lightPrimaryContainer,
          onPrimaryContainer: _appColor.lightOnPrimaryContainer,
          secondary: _appColor.lightSecondary,
          onSecondary: _appColor.lightOnSecondary,
          secondaryContainer: _appColor.lightSecondaryContainer,
          onSecondaryContainer: _appColor.lightOnSecondaryContainer,
          tertiary: _appColor.lightOnTertiary,
          onTertiary: _appColor.lightOnTertiary,
          tertiaryContainer: _appColor.lightTertiaryContainer,
          onTertiaryContainer: _appColor.lightOnTertiaryContainer,
          error: _appColor.lightError,
          onError: _appColor.lightOnError,
          errorContainer: _appColor.lightErrorContainer,
          onErrorContainer: _appColor.lightOnErrorContainer,
          background: _appColor.lightBackground,
          onBackground: _appColor.lightOnBackground,
          surface: _appColor.lightSurface,
          onSurface: _appColor.lightOnSurface,
          surfaceVariant: _appColor.lightSurfaceVariant,
          onSurfaceVariant: _appColor.lightOnSurfaceVariant,
          outline: _appColor.lightOutline,
          shadow: _appColor.lightShadow,
          inverseSurface: _appColor.lightInverseSurface,
          onInverseSurface: _appColor.lightInverseOnSurface,
          inversePrimary: _appColor.lightInversePrimary,
          surfaceTint: _appColor.lightSurfaceTint,
        ),
      );
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
