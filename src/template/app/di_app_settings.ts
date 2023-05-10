import { BaseTemplate } from '../base/base';

export class DiAppSettings extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../style/theme.dart';
import '../base/base_di_app_settings.dart';

class AppSettingServiceLocator implements BaseAppSettingServiceLocator {
  @override
  AppTheme getAppTheme() {
    return AppTheme();
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
