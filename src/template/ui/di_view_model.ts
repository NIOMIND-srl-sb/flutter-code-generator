import { BaseTemplate } from '../base/base';

export class ListDataViewModelServiceLocator extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_di_view_model.dart';
import '../repository.dart';

class ${this.className}ViewModelServiceLocator
    implements Base${this.className}ViewModelServiceLocator {
  const ${this.className}ViewModelServiceLocator();

  @override
  ${this.className}Repository getRepository() {
    return ${this.className}Repository();
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
