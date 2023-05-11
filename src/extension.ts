import * as vscode from 'vscode';
import { AppLogger } from './utility/logger';
import { ModelFile } from './event/model/model';
import { BaseModelFile } from './event/model/base_model';
import { VsCodeActions } from './utility/vs_cose_actions';
import { FileSystemManager } from './utility/file_system_manager';
import { Utils } from './utility/utils';
import { BaseAppColorFile } from './event/style/base_app_color';
import { BaseDiAppThemeFile } from './event/style/base_di_app_theme';
import { BaseElevationFile } from './event/style/base_elevation';
import { BaseThemeFile } from './event/style/base_theme';
import { BaseTypographyFile } from './event/style/base_typography';
import { DiThemeFile } from './event/style/di_theme';
import { ColorFile } from './event/style/color';
import { ElevationFile } from './event/style/elevation';
import { ThemeFile } from './event/style/theme';
import { TypographyFile } from './event/style/typography';
import { BaseAppSettingsFile } from './event/app/base_app_settings';
import { BaseDiAppSettingsFile } from './event/app/base_di_app_settings';
import { DiAppSettingsFile } from './event/app/di_app_settings';
import { AppSettingsFile } from './event/app/app_settings';
import { AppFile } from './event/app/app';
import { AppDatabaseFile } from './event/service/local/app_database';
import { AppSecureStorageFile } from './event/service/local/app_secure_storage';
import { AppSharedPreferencesFile } from './event/service/local/app_shared_preferences';
import { BaseAppDatabaseFile } from './event/service/local/base_app_database';
import { BaseAppSecureStorageFile } from './event/service/local/base_app_secure_storage';
import { BaseAppSharedPreferencesFile } from './event/service/local/base_app_shared_preferences';
import { BaseDatabaseFile } from './event/service/local/base_database';
import { BaseDiLocalServiceFile } from './event/service/local/base_di_local_service';
import { BaseManageDatabaseFile } from './event/service/local/base_manage_database';
import { LocalServiceServiceLocatorFile } from './event/service/local/di_local_service';
import { ManageDatabaseFile } from './event/service/local/manage_database';
import { BaseAppFirestoreFile } from './event/service/remote/base/base_app_firestore';
import { BaseAppFunctionsFile } from './event/service/remote/base/base_app_functions';
import { BaseAppStorageFile } from './event/service/remote/base/base_app_storage';
import { BaseDiRemoteServiceFile } from './event/service/remote/base/base_di_remote_service';
import { DiRemoteServiceFile } from './event/service/remote/di/di_remote_service';
import { AppFirestoreFile } from './event/service/remote/firestore/app_firestore';
import { AppFunctionsFile } from './event/service/remote/functions/app_functions';
import { AppStorageFile } from './event/service/remote/storage/app_storage';
import { FirebaseAppAuthFile } from './event/service/auth/firebase_app_auth';
import { UserModelFile } from './event/model/user_model';
import { AppLoggerFile } from './event/utility/app_logger';
import { BaseAppAuthFile } from './event/service/base/base_app_auth';

export function activate(context: vscode.ExtensionContext) {
    const modelDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createModel',
        async () => {
            const inputString = await Utils.checkInputString();
            if (inputString === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const folders = Utils.getFolders(inputString);
            const fileName = Utils.getFileName(inputString);
            if (fileName === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }
            const baseModelFile = new BaseModelFile(rootPath, 'base_model');

            const isExistBaseModelFile = FileSystemManager.doesFileExist(
                baseModelFile.pathValue,
                baseModelFile.getFileName
            );
            if (!isExistBaseModelFile) {
                baseModelFile.create();
            }
            const modelFile = new ModelFile(rootPath, fileName, folders);
            modelFile.create();
            AppLogger.info('Model is created successfully');
        }
    );

    const styleDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createStyle',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }
            const baseAppColorFile = new BaseAppColorFile(
                rootPath,
                'base_color'
            );
            const baseDiAppThemeFile = new BaseDiAppThemeFile(
                rootPath,
                'base_di_app_theme'
            );
            const baseElevationFile = new BaseElevationFile(
                rootPath,
                'base_elevation'
            );
            const baseThemeFile = new BaseThemeFile(rootPath, 'base_theme');
            const baseTypographyFile = new BaseTypographyFile(
                rootPath,
                'base_typography'
            );
            const diThemeFile = new DiThemeFile(rootPath, 'di_theme');
            const colorFile = new ColorFile(rootPath, 'color');
            const elevationColorFile = new ElevationFile(rootPath, 'elevation');
            const themeFile = new ThemeFile(rootPath, 'theme');
            const typographyFile = new TypographyFile(rootPath, 'typography');

            baseAppColorFile.create();
            baseDiAppThemeFile.create();
            baseElevationFile.create();
            baseThemeFile.create();
            baseTypographyFile.create();
            diThemeFile.create();
            colorFile.create();
            elevationColorFile.create();
            themeFile.create();
            typographyFile.create();
            AppLogger.info('Style is created successfully');
        }
    );

    const appDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createApp',
        async () => {
            const inputString = await Utils.checkInputString();
            if (inputString === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const folders = Utils.getFolders(inputString);
            const fileName = Utils.getFileName(inputString);
            if (fileName === undefined) {
                AppLogger.error('Invalid name for file');
                return;
            }
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }

            const baseAppSettingsFile = new BaseAppSettingsFile(
                rootPath,
                'base_app_settings'
            );
            const baseDiAppSettingsFile = new BaseDiAppSettingsFile(
                rootPath,
                'base_di_app_settings'
            );
            const diAppSettingsFile = new DiAppSettingsFile(
                rootPath,
                'di_app_settings'
            );
            const appSettingsFile = new AppSettingsFile(
                rootPath,
                'app_settings'
            );
            const appFile = new AppFile(rootPath, fileName, folders);

            baseAppSettingsFile.create();
            baseDiAppSettingsFile.create();
            diAppSettingsFile.create();
            appSettingsFile.create();
            appFile.create();
            AppLogger.info('App is created successfully');
        }
    );

    const serviceDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createServiceLocal',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }

            const appDatabaseFile = new AppDatabaseFile(
                rootPath,
                'app_database'
            );
            const appSecureStorageFile = new AppSecureStorageFile(
                rootPath,
                'app_secure_storage'
            );
            const appSharedPreferencesFile = new AppSharedPreferencesFile(
                rootPath,
                'app_shared_preferences'
            );
            const baseAppDatabaseFile = new BaseAppDatabaseFile(
                rootPath,
                'base_app_database'
            );
            const baseAppSecureStorageFile = new BaseAppSecureStorageFile(
                rootPath,
                'base_app_secure_storage'
            );
            const baseAppSharedPreferencesFile =
                new BaseAppSharedPreferencesFile(
                    rootPath,
                    'base_app_shared_preferences'
                );
            const baseDatabaseFile = new BaseDatabaseFile(
                rootPath,
                'base_database'
            );
            const baseDiLocalServiceFile = new BaseDiLocalServiceFile(
                rootPath,
                'base_di_local_service'
            );
            const baseManageDatabaseFile = new BaseManageDatabaseFile(
                rootPath,
                'base_manage_database'
            );
            const localServiceServiceLocatorFile =
                new LocalServiceServiceLocatorFile(
                    rootPath,
                    'di_local_service'
                );
            const banageDatabaseFile = new ManageDatabaseFile(
                rootPath,
                'manage_database'
            );

            appDatabaseFile.create();
            appSecureStorageFile.create();
            appSharedPreferencesFile.create();
            baseAppDatabaseFile.create();
            baseAppSecureStorageFile.create();
            baseAppSharedPreferencesFile.create();
            baseDatabaseFile.create();
            baseDiLocalServiceFile.create();
            baseManageDatabaseFile.create();
            localServiceServiceLocatorFile.create();
            banageDatabaseFile.create();

            AppLogger.info('Service folder created successfully');
        }
    );

    const serviceRemoteFirebaseDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createServiceRemoteFirebase',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }

            const baseAppFirestore = new BaseAppFirestoreFile(
                rootPath,
                'base_app_firestore'
            );
            const baseAppFunctions = new BaseAppFunctionsFile(
                rootPath,
                'base_app_functions'
            );
            const baseAppStorageFile = new BaseAppStorageFile(
                rootPath,
                'base_app_storage'
            );
            const baseDiRemoteServiceFile = new BaseDiRemoteServiceFile(
                rootPath,
                'base_di_remote_service'
            );
            const diRemoteServiceFile = new DiRemoteServiceFile(
                rootPath,
                'di_remote_service'
            );
            const appFirestoreFile = new AppFirestoreFile(
                rootPath,
                'app_firestore'
            );
            const appFuntcionsFile = new AppFunctionsFile(
                rootPath,
                'app_functions'
            );
            const appStorageFile = new AppStorageFile(rootPath, 'app_storage');

            baseAppFirestore.create();
            baseAppFunctions.create();
            baseAppStorageFile.create();
            baseDiRemoteServiceFile.create();
            diRemoteServiceFile.create();
            appFirestoreFile.create();
            appFuntcionsFile.create();
            appStorageFile.create();

            AppLogger.info(
                'Remote firebase service folder created successfully'
            );
        }
    );

    const firebaseAppAuthDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createServiceFirebaseAuthentication',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }

            const appAuthFile = new FirebaseAppAuthFile(rootPath, 'app_auth');

            const userModelFile = new UserModelFile(rootPath, 'user');

            const baseAppAuthFile = new BaseAppAuthFile(
                rootPath,
                'base_app_auth'
            );

            const baseModelFile = new BaseModelFile(rootPath, 'base_model');
            const isExistBaseModelFile = FileSystemManager.doesFileExist(
                baseModelFile.pathValue,
                baseModelFile.getFileName
            );

            const appLoggerFile = new AppLoggerFile(rootPath, 'app_logger');
            const isExistAppLoggerFile = FileSystemManager.doesFileExist(
                appLoggerFile.pathValue,
                appLoggerFile.getFileName
            );

            if (!isExistBaseModelFile) {
                baseModelFile.create();
            }
            if (!isExistAppLoggerFile) {
                appLoggerFile.create();
            }
            userModelFile.create();
            baseAppAuthFile.create();
            appAuthFile.create();

            AppLogger.info('AppAuth folder created successfully');
        }
    );

    const userModelDisposable = vscode.commands.registerCommand(
        'flutter-code-generator.createUserModel',
        async () => {
            const rootPath = VsCodeActions.rootPath;
            if (rootPath === undefined) {
                return;
            }

            const userModelFile = new UserModelFile(rootPath, 'user');

            const baseModelFile = new BaseModelFile(rootPath, 'base_model');
            const isExistBaseModelFile = FileSystemManager.doesFileExist(
                baseModelFile.pathValue,
                baseModelFile.getFileName
            );

            if (!isExistBaseModelFile) {
                baseModelFile.create();
            }

            userModelFile.create();

            AppLogger.info('UserModel folder created successfully');
        }
    );

    context.subscriptions.push(modelDisposable);
    context.subscriptions.push(styleDisposable);
    context.subscriptions.push(appDisposable);
    context.subscriptions.push(serviceDisposable);
    context.subscriptions.push(serviceRemoteFirebaseDisposable);
    context.subscriptions.push(firebaseAppAuthDisposable);
    context.subscriptions.push(userModelDisposable);
}

export function deactivate() {}
