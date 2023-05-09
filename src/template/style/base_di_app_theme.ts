import { BaseTemplate } from '../base/base';

export class BaseDiAppTheme extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../color.dart';
import '../typography.dart';

abstract class BaseAppThemeServiceLocator {
  AppColor getAppColor();
  AppTypography getAppTypography();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
