import * as path from 'path';
import { AppLogger } from '../../utility/logger';
import { FileSystemManager } from '../../utility/file_system_manager';
import { existsSync } from 'fs';

export abstract class BaseFile {
    rootPath: string;
    fileName: string;
    folders?: string[];

    constructor(rootPath: string, fileName: string, folders?: string[]) {
        AppLogger.debug(
            `BaseFile(rootPath: ${rootPath}, fileName: ${fileName}, folders: ${folders})`
        );
        this.rootPath = rootPath;
        this.fileName = fileName;
        this.folders = folders;
    }

    get getFileName(): string {
        return this.fileName + '.dart';
    }

    createFiles(pathValue: string, fileName: string, data: string): void {
        const filePath = path.join(pathValue, fileName);
        if (existsSync(filePath)) {
            AppLogger.error(`${fileName} already exists`);
            return;
        }
        FileSystemManager.createFile(pathValue, fileName, data);
    }

    createFolder(): void {
        FileSystemManager.createFolder(this.pathValue);
    }

    abstract create(): void;

    abstract get pathValue(): string;
}
