import { BaseTemplate } from '../../base/base';

export class ListDataViewModel extends BaseTemplate {
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

  @override
  ${this.className}UiState get uiState => _uiState;

  ${this.className}ViewModel.instance({
    ${this.className}Repository? repository,
  }) {
    const serviceLocator = ${this.className}ViewModelServiceLocator();
    _repository = repository ?? serviceLocator.getRepository();
    _uiState.streamListData = _repository.streamListData;
    initial();
  }

  @override
  Future<void> initial() async {
    await _repository.getListData(
      page: _uiState.page,
      pageSize: _uiState.pageSize,
      offsetDate: null,
    );
  }

  @override
  Future<void> refreshListData({
    bool? nextPage,
  }) async {
    try {
      if (nextPage == true) {
        final count = (_uiState.page + 1) * _uiState.pageSize;
        if (_repository.countTotalData <= count) {
          return;
        }
        _uiState.page++;
      } else {
        _uiState.page = 0;
        _repository.offsetDate = null;
      }
      await _repository.getListData(
        page: _uiState.page,
        pageSize: _uiState.pageSize,
        offsetDate: _repository.offsetDate,
      );
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
