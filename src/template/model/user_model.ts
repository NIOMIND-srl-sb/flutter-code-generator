import { BaseTemplate } from '../base/base';

export class UserModel extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'base/base_model.dart';

class User extends BaseModel {
    String uid;
    String? displayName;
    String? email;
    String? photoURL;
    int date;

    User({
      required this.uid,
      required this.displayName,
      required this.email,
      required this.photoURL,
      required this.date,
    });

    factory User.fromJson(Map<dynamic, dynamic> json) => User(
      uid: json['uid'],
      displayName: json['displayName'],
      email: json['email'],
      photoURL: json['photoURL'],
      date: json['date'],
    );

    factory User.fromEmpty() => User(
      uid: '',
      displayName: '',
      email: '',
      photoURL: '',
      date: 0,
    );

    @override
    Map<String, dynamic> toJsonForLocal() => {
      'uid': uid,
      'displayName': displayName,
      'email': displayName,
      'photoURL': photoURL,
      'date': date,
    };

    @override
    Map<String, dynamic> toJsonForRemote() => {
      'uid': uid,
      'displayName': displayName,
      'email': displayName,
      'photoURL': photoURL,
      'date': date,
    };
  
    @override
    String get tableName => 'User';

    @override
    String get whereId => 'uid = ?';

    @override
    String get tableString => '''
      CREATE TABLE IF NOT EXISTS $tableName(
        uid TEXT PRIMARY KEY NOT NULL,
        displayName TEXT NOT NULL,
        email TEXT NOT NULL,
        photoURL TEXT,
        date INTEGER NOT NULL
        );
      ''';
      
    @override
    bool operator ==(Object other) {
      if (other is! User) return false;
      if (uid != other.uid) return false;
      if (displayName != other.displayName) return false;
      if (email != other.email) return false;
      if (photoURL != other.photoURL) return false;
      if (date != other.date) return false;
      return true;
    }
          
    @override
    int get hashCode {
      return Object.hash(
        uid,
        displayName,
        email,
        photoURL,
        date,
      );
    }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}