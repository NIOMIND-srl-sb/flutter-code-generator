import { BaseTemplate } from '../../base/base';

export class BaseUiState extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `class BaseUiState {
  bool loading = false;
  bool error = false;
  String errorMessage = '';
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
