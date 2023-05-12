import { BaseTemplate } from '../../../base/base';

export class BaseDataViewModel extends BaseTemplate {
  private _dartString: string;

  constructor(fileName: string, suffix: string) {
      super(fileName, suffix);
      this._dartString = `import '../../base/base_view_model.dart';

abstract class Base${this.className}ViewModel extends BaseViewModel {
  Base${this.className}ViewModel();

  Future<void> initial();
  
  Future<void> refreshData();
}`;
  }

  get dartString(): string {
      return this._dartString;
  }
}
