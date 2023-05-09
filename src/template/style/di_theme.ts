import { BaseTemplate } from '../base/base';

export class DiTheme extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_di_app_theme.dart';
import '../color.dart';
import '../typography.dart';

class AppThemeServiceLocator implements BaseAppThemeServiceLocator {
  @override
  AppColor getAppColor() {
    return AppColor();
  }

  @override
  AppTypography getAppTypography() {
    return AppTypography();
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
