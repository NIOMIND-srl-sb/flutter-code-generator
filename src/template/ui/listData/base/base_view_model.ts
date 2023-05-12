import { BaseTemplate } from '../../../base/base';

export class BaseListDataViewModel extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../base/base_view_model.dart';

abstract class Base${this.className}ViewModel extends BaseViewModel {
  Base${this.className}ViewModel();

  Future<void> initial();

  Future<void> refreshListData({
    bool? nextPage,
  });
}
`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
