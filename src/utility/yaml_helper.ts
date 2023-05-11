import * as yaml from 'js-yaml';
import { VsCodeActions } from './vs_cose_actions';
import { FileSystemManager } from './file_system_manager';
import * as _ from 'lodash';
import { AppLogger } from './logger';

export class YamlHelper {
    public static initializeWithDependencies() {
        const providerVersion = '^6.0.5';
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return undefined;
        }
        const object = JSON.parse(json);
        const provider = this.getProvider(object);
        AppLogger.debug(`provider: ${provider}`);

        let haveToUpdate = false;
        if (provider === undefined || provider !== providerVersion) {
            object['dependencies']['provider'] = providerVersion;
            haveToUpdate = true;
        }

        const flutterLocalizations = this.getFlutterLocalizations(object);
        AppLogger.debug(`flutterLocalizations: ${flutterLocalizations}`);
        if (flutterLocalizations === undefined) {
            object['dependencies']['flutter_localizations'] = {
                sdk: 'flutter',
            };
            haveToUpdate = true;
        }

        const sharedPreferencesVersion = '^2.1.1';
        const sharedPreferences = this.getSharedPreferences(object);
        AppLogger.debug(`sharedPreferences: ${sharedPreferences}`);
        if (sharedPreferences === undefined) {
            object['dependencies']['shared_preferences'] =
                sharedPreferencesVersion;
            haveToUpdate = true;
        }

        const flutterSecureStorageVersion = '^8.0.0';
        const flutterSecureStorage = this.getFlutterSecureStorage(object);
        AppLogger.debug(`flutterSecureStorage: ${flutterSecureStorage}`);
        if (flutterSecureStorage === undefined) {
            object['dependencies']['flutter_secure_storage'] =
                flutterSecureStorageVersion;
            haveToUpdate = true;
        }

        const sqfliteVersion = '^2.2.8+2';
        const sqflite = this.getSqflite(object);
        AppLogger.debug(`sqflite: ${sqflite}`);
        if (sqflite === undefined) {
            object['dependencies']['sqflite'] = sqfliteVersion;
            haveToUpdate = true;
        }

        const pathPackageVersion = '^1.8.2';
        const pathPackage = this.getPathPackage(object);
        AppLogger.debug(`pathPackage: ${pathPackage}`);
        if (pathPackage === undefined) {
            object['dependencies']['path'] = pathPackageVersion;
            haveToUpdate = true;
        }

        const cloudFirestoreVersion = '^4.6.0';
        const cloudFirestore = this.getCloudFirestore(object);
        AppLogger.debug(`cloudFirestore: ${cloudFirestore}`);
        if (cloudFirestore === undefined) {
            object['dependencies']['cloud_firestore'] = cloudFirestoreVersion;
            haveToUpdate = true;
        }

        const cloudFunctionsVersion = '^4.2.0';
        const cloudFunctions = this.getCloudFunctions(object);
        AppLogger.debug(`cloudFunctions: ${cloudFunctions}`);
        if (cloudFunctions === undefined) {
            object['dependencies']['cloud_functions'] = cloudFunctionsVersion;
            haveToUpdate = true;
        }

        const firebaseStorageVersion = '^11.1.2';
        const firebaseStorage = this.getFirebaseStorage(object);
        AppLogger.debug(`firebaseStorage: ${firebaseStorage}`);
        if (firebaseStorage === undefined) {
            object['dependencies']['firebase_storage'] = firebaseStorageVersion;
            haveToUpdate = true;
        }

        const loggerPackageVersion = '^1.3.0';
        const loggerPackage = this.getLoggerPackage(object);
        AppLogger.debug(`loggerPackage: ${loggerPackage}`);
        if (loggerPackage === undefined) {
            object['dependencies']['logger'] = loggerPackageVersion;
            haveToUpdate = true;
        }

        const firebaseCrashlyticsVersion = '^3.2.0';
        const firebaseCrashlytics = this.getFirebaseCrashlytics(object);
        AppLogger.debug(`firebaseCrashlytics: ${firebaseCrashlytics}`);
        if (firebaseCrashlytics === undefined) {
            object['dependencies']['firebase_crashlytics'] =
                firebaseCrashlyticsVersion;
            haveToUpdate = true;
        }

        const firebaseAuthVersion = '^4.5.0';
        const firebaseAuth = this.getFirebaseAuth(object);
        AppLogger.debug(`firebaseCrashlytics: ${firebaseAuth}`);
        if (firebaseAuth === undefined) {
            object['dependencies']['firebase_auth'] = firebaseAuthVersion;
            haveToUpdate = true;
        }

        const googleSignInVersion = '^6.1.0';
        const googleSignIn = this.getGoogleSignIn(object);
        AppLogger.debug(`googleSignIn: ${googleSignIn}`);
        if (googleSignIn === undefined) {
            object['dependencies']['google_sign_in'] = googleSignInVersion;
            haveToUpdate = true;
        }

        if (haveToUpdate) {
            this.addDependencyToPubspec(object);
        }
    }

    public static isValidFlutterPubspec(): string | undefined {
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return 'Invalid Pubspec format';
        }
        const object = JSON.parse(json);

        if (object['environment'] === undefined) {
            return 'No environment definition found';
        }
        if (object['dependencies'] === undefined) {
            return 'Definition for dependencies not found';
        }
        if (object['dependencies']['flutter'] === undefined) {
            return 'Definition for FLutter in dependencies not found';
        }
        return undefined;
    }

    public static getProjectName(): string | undefined {
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return undefined;
        }
        const object = JSON.parse(json);

        return object['name'];
    }

    private static getProvider(object: any): string | undefined {
        return object['dependencies']['provider'];
    }

    private static getFlutterLocalizations(object: any): string | undefined {
        return object['dependencies']['flutter_localizations'];
    }

    private static getSharedPreferences(object: any): string | undefined {
        return object['dependencies']['shared_preferences'];
    }

    private static getSqflite(object: any): string | undefined {
        return object['dependencies']['sqflite'];
    }

    private static getFlutterSecureStorage(object: any): string | undefined {
        return object['dependencies']['flutter_secure_storage'];
    }

    private static getPathPackage(object: any): string | undefined {
        return object['dependencies']['path'];
    }

    private static getCloudFirestore(object: any): string | undefined {
        return object['dependencies']['cloud_firestore'];
    }

    private static getCloudFunctions(object: any): string | undefined {
        return object['dependencies']['cloud_functions'];
    }

    private static getFirebaseStorage(object: any): string | undefined {
        return object['dependencies']['firebase_storage'];
    }

    private static getFirebaseCrashlytics(object: any): string | undefined {
        return object['dependencies']['firebase_crashlytics'];
    }

    private static getLoggerPackage(object: any): string | undefined {
        return object['dependencies']['logger'];
    }

    private static getFirebaseAuth(object: any): string | undefined {
        return object['dependencies']['firebase_auth'];
    }

    private static getGoogleSignIn(object: any): string | undefined {
        return object['dependencies']['google_sign_in'];
    }

    private static addDependencyToPubspec(object: any) {
        const modifiedString = JSON.stringify(object);
        AppLogger.debug(
            `addDependencyToPubspec: modifiledString: ${modifiedString}`
        );
        const updatedYaml = this.toYAML(modifiedString);
        if (updatedYaml === undefined) {
            return;
        }
        this.overwritePubspecFile(updatedYaml);
    }

    private static upgradeDartVersion(object: any) {
        object['environment']['sdk'] = '>=3.0.0 <4.0.0';
        const modifiedString = JSON.stringify(object);
        AppLogger.debug(
            `upgradeDartVersion: modifiledString: ${modifiedString}`
        );
        const updatedYaml = this.toYAML(modifiedString);
        if (updatedYaml === undefined) {
            return;
        }
        this.overwritePubspecFile(updatedYaml);
    }

    private static getPubspecJsonFile(): string | undefined {
        const rootPath = VsCodeActions.rootPath;
        const fileData = FileSystemManager.readFileAsString(
            rootPath,
            'pubspec.yaml'
        );
        if (fileData === undefined) {
            AppLogger.error('Pubspec.yaml not found');
            return undefined;
        }
        const data = YamlHelper.toJSON(fileData);
        return data;
    }

    private static overwritePubspecFile(data: string) {
        FileSystemManager.createFile(
            VsCodeActions.rootPath,
            'pubspec.yaml',
            data
        );
    }

    private static toYAML(text: string): string | undefined {
        try {
            console.debug(`toYAML: ${text}`);
            const json = JSON.parse(text);
            return yaml.safeDump(json, { indent: this.getIndent() });
        } catch (e) {
            AppLogger.error('Could not parse the selection as JSON.');
            return undefined;
        }
    }

    private static toJSON(text: string) {
        try {
            console.debug(`toJSON: ${text}`);
            const json = yaml.safeLoad(text, { schema: yaml.JSON_SCHEMA });
            return JSON.stringify(json, null, this.getIndent());
        } catch (e) {
            AppLogger.error('Could not parse the selection as YAML.');
            return;
        }
    }

    private static getIndent(): number {
        const editorCfg = VsCodeActions.getEditorConfiguration();
        if (editorCfg && editorCfg.get('insertSpaces')) {
            const tabSize = editorCfg.get('tabSize');
            if (tabSize && typeof tabSize === 'number') {
                return tabSize;
            }
        }
        return 2;
    }
}
