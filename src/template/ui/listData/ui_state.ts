import { BaseTemplate } from '../../base/base';

export class ListDataUiState extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_ui_state.dart';

class ${this.className}UiState extends BaseUiState {
  int page = 0;
  final pageSize = 10;
  late Stream<List<dynamic>> streamListData;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
