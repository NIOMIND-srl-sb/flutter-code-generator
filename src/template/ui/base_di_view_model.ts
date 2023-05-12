import { BaseTemplate } from '../base/base';

export class BaseListDataDiViewModel extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../repository.dart';

abstract class Base${this.className}ViewModelServiceLocator {
  const Base${this.className}ViewModelServiceLocator();

  ${this.className}Repository getRepository();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
