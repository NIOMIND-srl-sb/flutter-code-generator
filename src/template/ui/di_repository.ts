import { BaseTemplate } from '../base/base';

export class RepositoryServiceLocator extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../../service/local/local_service.dart';
import '../../../service/remote/remote_service.dart';
import '../base/base_di_repository.dart';

class ${this.className}RepositoryServiceLocator
    implements Base${this.className}RepositoryServiceLocator {
  const ${this.className}RepositoryServiceLocator();

  @override
  LocalService getLocalService() {
    // TODO: implement getLocalService
    throw UnimplementedError();
  }

  @override
  RemoteService getRemoteService() {
    // TODO: implement getRemoteService
    throw UnimplementedError();
  }
}
`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
