import { BaseTemplate } from '../../../base/base';

export class BaseDiRemoteService extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../firestore/app_firestore.dart';
import '../functions/app_functions.dart';
import '../storage/app_storage.dart';

abstract class BaseRemoteServiceServiceLocator {
    AppFirestore getAppFirestore();
    AppStorage getAppStorage();
    AppFunctions getAppFunctions();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
