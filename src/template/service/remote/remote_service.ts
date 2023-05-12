import { BaseTemplate } from '../../base/base';

export class RemoteService extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `class RemoteService {}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
