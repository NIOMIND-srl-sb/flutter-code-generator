import { BaseTemplate } from '../base/base';

export class BaseDiAppSettings extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../style/theme.dart';

abstract class BaseAppSettingServiceLocator {
  AppTheme getAppTheme();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
