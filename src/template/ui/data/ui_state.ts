import { BaseTemplate } from '../../base/base';

export class DataUiState extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_ui_state.dart';

class ${this.className}UiState extends BaseUiState {
    late Stream<dynamic> streamData;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
