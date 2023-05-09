import { BaseTemplate } from '../base/base';

export class BaseModel extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `abstract class BaseModel {
    Map<String, dynamic> toJsonForLocal();
        
    Map<String, dynamic> toJsonForRemote();
        
    String get tableName;
        
    String get whereId;
        
    String get tableString;
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
