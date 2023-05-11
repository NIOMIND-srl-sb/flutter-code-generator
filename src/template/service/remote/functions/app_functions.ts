import { BaseTemplate } from '../../../base/base';

export class AppFunctions extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:cloud_functions/cloud_functions.dart';
import '../base/base_app_functions.dart';

class AppFunctions extends BaseAppFunctions {
  static final AppFunctions _appStorage = AppFunctions._internal();

  factory AppFunctions() => _appStorage;

  AppFunctions._internal();

  @override
  Future<dynamic> callFirebaseFunctions(
    String functionName,
    dynamic arg,
  ) async {
    HttpsCallable callable = FirebaseFunctions.instanceFor().httpsCallable(
      functionName,
      options: HttpsCallableOptions(
        timeout: timeout,
      ),
    );

    final results = await callable.call(arg);
    return results.data;
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
