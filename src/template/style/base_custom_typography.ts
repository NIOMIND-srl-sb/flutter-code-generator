import { BaseTemplate } from '../base/base';

export class BaseCustomTypography extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract mixin class BaseAppCustomTypography {}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
