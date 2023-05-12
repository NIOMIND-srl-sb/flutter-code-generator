import { BaseTemplate } from '../base/base';

export class ErrorBanner extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';

class AppErrorBanner {
  final Function() clearError;
  final String errorMessage;
  final BuildContext context;

  const AppErrorBanner({
    required this.clearError,
    required this.errorMessage,
    required this.context,
  });

  void show() {
    final textTheme = Theme.of(context).textTheme;
    final colorScheme = Theme.of(context).colorScheme;
    WidgetsBinding.instance.addPostFrameCallback(
      (_) {
        ScaffoldMessenger.of(context)
            .showSnackBar(
              SnackBar(
                backgroundColor: colorScheme.error,
                content: Row(
                  children: [
                    Icon(
                      Icons.error,
                      color: colorScheme.onError,
                    ),
                    const SizedBox(
                      width: 5,
                    ),
                    Expanded(
                      child: Text(
                        errorMessage.toUpperCase(),
                        style: textTheme.labelSmall!.apply(
                          color: colorScheme.onError,
                        ),
                        overflow: TextOverflow.ellipsis,
                        maxLines: 15,
                        softWrap: true,
                      ),
                    ),
                  ],
                ),
              ),
            )
            .closed
            .then(
              (value) => clearError(),
            );
      },
    );
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
