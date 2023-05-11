import { BaseTemplate } from '../../../base/base';

export class BaseAppFunctions extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract class BaseAppFunctions {
Duration timeout = const Duration(minutes: 3);

Future<dynamic> callFirebaseFunctions(
    String functionName,
        dynamic arg,
    );
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
