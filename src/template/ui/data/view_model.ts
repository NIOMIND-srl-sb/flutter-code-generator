import { BaseTemplate } from '../../base/base';

export class DataViewModel extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import '../../utility/app_logger.dart';
import 'base/base_view_model.dart';
import 'di/di_view_model.dart';
import 'repository.dart';
import 'ui_state.dart';

class ${this.className}ViewModel extends Base${this.className}ViewModel {
  late final ${this.className}Repository _repository;

  final _uiState = ${this.className}UiState();

  //TODO: handle id
  final id = '';

  @override
  ${this.className}UiState get uiState => _uiState;

  ${this.className}ViewModel.instance({
    ${this.className}Repository? repository,
  }) {
    const serviceLocator = ${this.className}ViewModelServiceLocator();
    _repository = repository ?? serviceLocator.getRepository();
    _uiState.streamData = _repository.streamData;
    initial();
  }

  @override
  Future<void> initial() async {
    await _repository.getData(id: id);
  }

  @override
  Future<void> refreshData() async {
    try {
      await _repository.getData(id: id);
    } catch (e) {
      _uiState.loading = false;
      _uiState.errorMessage = e.toString();
      _uiState.error = true;
      AppLogger.error(e);
      notifyListeners();
    }
  }

  @override
  void dispose() {
    _repository.close();
    super.dispose();
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
