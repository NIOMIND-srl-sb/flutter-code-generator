import { BaseTemplate } from '../base/base';

export class BaseListDataDiRepository extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../../service/local/local_service.dart';
import '../../../service/remote/remote_service.dart';

abstract class Base${this.className}RepositoryServiceLocator {
  const Base${this.className}RepositoryServiceLocator();

  LocalService getLocalService();
  RemoteService getRemoteService();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
