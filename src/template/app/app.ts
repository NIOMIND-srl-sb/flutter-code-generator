import { BaseTemplate } from '../base/base';

export class App extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'app_settings.dart';

class ${this.className}App extends StatelessWidget {
  const ${this.className}App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      restorationScopeId: '${this.className.toLowerCase()}_app',
      debugShowCheckedModeBanner: false,
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('en'),
      ],
      title: '${this.className}',
      theme: context.watch<AppSettings>().lightThemeData,
      darkTheme: context.watch<AppSettings>().darkThemeData,
      themeMode: context.watch<AppSettings>().themeMode,
      // TODO: add home page or routes
    );
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
