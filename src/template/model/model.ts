import { BaseTemplate } from '../base/base';

export class Model extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'base/base_model.dart';

class ${this.className} extends BaseModel {
    final String ${this.getStringId};
    final int date;

    ${this.className}({
      required this.${this.getStringId},
      required this.date,
    });

    factory ${this.className}.fromJson(Map<dynamic, dynamic> json) => ${this.className}(
      ${this.getStringId}: json['${this.getStringId}'],
      date: json['date'],
    );

    factory ${this.className}.fromEmpty() => ${this.className}(
      ${this.getStringId}: '',
      date: 0,
    );

    @override
    Map<String, dynamic> toJsonForLocal() => {
      '${this.getStringId}': ${this.getStringId},
      'date': date,
    };

    @override
    Map<String, dynamic> toJsonForRemote() => {
      '${this.getStringId}': ${this.getStringId},
      'date': date,
    };
  
    @override
    String get tableName => '${this.className}';

    @override
    String get whereId => '${this.getStringId} = ?';

    @override
    String get tableString => '''
      CREATE TABLE IF NOT EXISTS $tableName(
        ${this.getStringId} TEXT PRIMARY KEY NOT NULL,
        date INTEGER NOT NULL
        );
      ''';
      
    @override
    bool operator ==(Object other) {
      if (other is! ${this.className}) return false;
      if (${this.getStringId} != other.${this.getStringId}) return false;
      if (date != other.date) return false;
      return true;
    }
          
    @override
    int get hashCode {
      return Object.hash(
        ${this.getStringId},
        date,
      );
    }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }

    get getStringId(): string {
        return (
            this.className.charAt(0).toLowerCase() +
            this.className.slice(1) +
            'Id'
        );
    }
}
