import { BaseTemplate } from '../../base/base';

export class BaseAppAuth extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../model/user.dart';

abstract class BaseAppAuth {
  Stream<bool> isAuthenticatedStateChanges();
  bool isAuthenticated();
  bool isUsedEmailProvider();
  String? getUid();
  Future<void> loginGoogle();
  Future<void> loginApple();
  Future<bool> loginEmail(String email, String password);
  Future<bool> signupEmail(String email, String password);
  Future<bool> changePasswordForEmail(
    String currentPassword,
    String newPassword,
  );
  Future<bool> passwordResetForEmail();
  Future<User?> getUser();
  Future logout();
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
