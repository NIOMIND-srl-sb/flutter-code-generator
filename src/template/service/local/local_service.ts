import { BaseTemplate } from '../../base/base';

export class LocalService extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `class LocalService {}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
