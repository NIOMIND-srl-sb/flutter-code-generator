import { BaseTemplate } from '../../base/base';

export class DataRepository extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'dart:async';

import '../../service/local/local_service.dart';
import '../../service/remote/remote_service.dart';
import 'base/base_repository.dart';
import 'di/di_repository.dart';

class ${this.className}Repository extends Base${this.className}Repository {
  late final LocalService _localService;
  late final RemoteService _remoteService;
  final _streamControllerData = StreamController<dynamic>.broadcast();

  ${this.className}Repository({
    LocalService? localService,
    RemoteService? remoteService,
  }) {
    const serviceLocator = ${this.className}RepositoryServiceLocator();
    _localService = localService ?? serviceLocator.getLocalService();
    _remoteService = remoteService ?? serviceLocator.getRemoteService();
  }

  @override
  Stream<dynamic> get streamData => _streamControllerData.stream;

  @override
  Future<void> getData({required String id}) async {
    // TODO: implement getData
    throw UnimplementedError();
  }

  @override
  void close() {
    _streamControllerData.close();
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
