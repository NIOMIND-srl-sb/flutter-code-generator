import { BaseTemplate } from '../../base/base';

export class BaseViewModel extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'base_ui_state.dart';

abstract class BaseViewModel extends ChangeNotifier {
  BaseViewModel();

  BaseUiState get uiState;

  void clearError() {
    uiState.error = false;
    uiState.errorMessage = '';
    notifyListeners();
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
