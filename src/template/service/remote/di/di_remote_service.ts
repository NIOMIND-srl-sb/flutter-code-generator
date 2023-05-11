import { BaseTemplate } from '../../../base/base';

export class DiRemoteService extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../base/base_di_remote_service.dart';
import '../firestore/app_firestore.dart';
import '../functions/app_functions.dart';
import '../storage/app_storage.dart';

class RemoteServiceServiceLocator implements BaseRemoteServiceServiceLocator {
    const RemoteServiceServiceLocator();

    @override
    AppFirestore getAppFirestore() {
        return AppFirestore();
    }

    @override
    AppStorage getAppStorage() {
        return AppStorage();
    }

    @override
    AppFunctions getAppFunctions() {
        return AppFunctions();
    }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
