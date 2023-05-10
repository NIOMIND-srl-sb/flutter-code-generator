import { BaseTemplate } from '../base/base';

export class AppSettings extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import '../style/theme.dart';
import 'base/base_app_settings.dart';
import 'di/di_app_settings.dart';

class AppSettings extends BaseAppSettings {
  late final AppTheme _appTheme;
  ThemeMode _themeMode = ThemeMode.system;

  AppSettings.instance({
    AppTheme? appTheme,
  }) {
    var serviceLocator = AppSettingServiceLocator();
    _appTheme = appTheme ?? serviceLocator.getAppTheme();
    init();
  }

  @override
  Future<void> init() async {
    _themeMode = ThemeMode.dark;
    notifyListeners();
  }

  @override
  ThemeMode get themeMode => _themeMode;

  @override
  ThemeData get darkThemeData => _appTheme.darkTheme;

  @override
  ThemeData get lightThemeData => _appTheme.lightTheme;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
