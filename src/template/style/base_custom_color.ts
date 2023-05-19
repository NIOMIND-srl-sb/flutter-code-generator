import { BaseTemplate } from '../base/base';

export class BaseCustomColor extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract mixin class BaseAppCustomColor {}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
