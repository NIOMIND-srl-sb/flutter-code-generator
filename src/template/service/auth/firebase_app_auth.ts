import { BaseTemplate } from '../../base/base';

export class FirebaseAppAuth extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import '../../model/user.dart' as user;
import '../../utility/app_logger.dart';
import '../base/base_app_auth.dart';

class AppAuth extends BaseAppAuth {
  @override
  bool isAuthenticated() {
    return FirebaseAuth.instance.currentUser != null;
  }

  @override
  Stream<bool> isAuthenticatedStateChanges() {
    return FirebaseAuth.instance.authStateChanges().map((currentUser) {
      if (currentUser != null) {
        return true;
      }
      return false;
    });
  }

  @override
  String? getUid() {
    return FirebaseAuth.instance.currentUser?.uid;
  }

  @override
  bool isUsedEmailProvider() {
    try {
      var currentUser = FirebaseAuth.instance.currentUser;
      if (currentUser == null) {
        return false;
      }

      return currentUser.providerData.isNotEmpty &&
          currentUser.providerData.first.providerId == 'password';
    } catch (e) {
      AppLogger.error(e);
      return false;
    }
  }

  @override
  Future<void> loginApple() async {
    try {
      final appleProvider = AppleAuthProvider();
      appleProvider.addScope('email');
      await FirebaseAuth.instance.signInWithProvider(appleProvider);
    } catch (e) {
      AppLogger.error(e);
      return;
    }
  }

  @override
  Future<bool> loginEmail(String email, String password) async {
    try {
      await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      return true;
    } on FirebaseAuthException catch (e) {
      throw (e.code);
    }
  }

  @override
  Future<void> loginGoogle() async {
    try {
      final googleUser = await GoogleSignIn().signIn();
      final googleAuth = await googleUser?.authentication;
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth?.accessToken,
        idToken: googleAuth?.idToken,
      );
      await FirebaseAuth.instance.signInWithCredential(credential);
    } catch (e) {
      AppLogger.error(e);
      return;
    }
  }

  @override
  Future<bool> passwordResetForEmail() async {
    try {
      final currentUser = FirebaseAuth.instance.currentUser;
      if (currentUser == null || currentUser.email == null) {
        return false;
      }
      await FirebaseAuth.instance.sendPasswordResetEmail(
        email: currentUser.email!,
      );
      return true;
    } catch (e) {
      AppLogger.error(e);
      return false;
    }
  }

  @override
  Future<bool> changePasswordForEmail(
    String currentPassword,
    String newPassword,
  ) async {
    try {
      final currentUser = FirebaseAuth.instance.currentUser;
      if (currentUser == null || currentUser.email == null) {
        return false;
      }
      final userCredential = EmailAuthProvider.credential(
        email: currentUser.email!,
        password: currentPassword,
      );

      await currentUser.reauthenticateWithCredential(userCredential);
      await currentUser.updatePassword(newPassword);
      return true;
    } catch (e) {
      AppLogger.error(e);
      return false;
    }
  }

  @override
  Future<bool> signupEmail(String email, String password) async {
    try {
      await FirebaseAuth.instance.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      return true;
    } on FirebaseAuthException catch (e) {
      throw (e.code);
    }
  }

  @override
  Future<void> logout() async {
    try {
      await FirebaseAuth.instance.signOut();
      await GoogleSignIn().signOut();
    } catch (e) {
      AppLogger.error(e);
      return;
    }
  }

  @override
  Future<user.User?> getUser() async {
    if (FirebaseAuth.instance.currentUser == null) {
      return null;
    }
    final currentUser = FirebaseAuth.instance.currentUser!;
    final userInfo = user.User.fromEmpty();
    userInfo.uid = currentUser.uid;
    userInfo.displayName = currentUser.displayName;
    userInfo.email = currentUser.email!;
    userInfo.photoURL = currentUser.photoURL;
    return userInfo;
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}