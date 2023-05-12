import { BaseTemplate } from '../../../base/base';

export class BaseDataRepository extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'dart:async';

abstract class Base${this.className}Repository {
  Base${this.className}Repository();

  Stream<dynamic> get streamData;
  Future<void> getData({
    required String id,
  });
  void close();
}
`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
