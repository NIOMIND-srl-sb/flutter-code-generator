import * as yaml from 'js-yaml';
import { VsCodeActions } from './vs_cose_actions';
import { FileSystemManager } from './file_system_manager';
import * as _ from 'lodash';
import { AppLogger } from './logger';

export class YamlHelper {
    public static initializeWithDependencies() {
        const provider = this.getProvider();
        AppLogger.debug(`provider: ${provider}`);
        if (provider === undefined) {
            this.addDependencyToPubspec('provider', '^6.0.5');
            // this.addAssetComment();
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

    public static getProvider(): string | undefined {
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return undefined;
        }
        const object = JSON.parse(json);

        return object['dependencies']['provider'];
    }

    private static addDependencyToPubspec(module: string, version?: string) {
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return;
        }
        const object = JSON.parse(json);
        object['dependencies'][module] = `${version}`;
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

    private static upgradeDartVersion() {
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return;
        }
        const object = JSON.parse(json);
        object['environment']['sdk'] = '>=2.19.6 <3.0.0';
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

    private static addAssetComment() {
        const json = this.getPubspecJsonFile();
        if (json === undefined) {
            return;
        }
        const object = JSON.parse(json);
        const modifiedString = JSON.stringify(object);
        let updatedYaml = this.toYAML(modifiedString);
        if (updatedYaml === undefined) {
            return;
        }
        updatedYaml += `\n\n  # To add assets to your application, add an assets section, like this:
  # assets:
  #  - images/a_dot_burr.jpeg
  #  - images/a_dot_ham.jpeg
      
  # An image asset can refer to one or more resolution-specific "variants", see
  # https://flutter.dev/assets-and-images/#resolution-aware.
      
  # For details regarding adding assets from package dependencies, see
  # https://flutter.dev/assets-and-images/#from-packages
      
  # To add custom fonts to your application, add a fonts section here,
  # in this "flutter" section. Each entry in this list should have a
  # "family" key with the font family name, and a "fonts" key with a
  # list giving the asset and other descriptors for the font. For
  # example:
  # fonts:
  #   - family: Schyler
  #     fonts:
  #       - asset: fonts/Schyler-Regular.ttf
  #       - asset: fonts/Schyler-Italic.ttf
  #         style: italic
  #   - family: Trajan Pro
  #     fonts:
  #       - asset: fonts/TrajanPro.ttf
  #       - asset: fonts/TrajanPro_Bold.ttf
  #         weight: 700
  #
  # For details regarding fonts from package dependencies,
  # see https://flutter.dev/custom-fonts/#from-packages`;

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
