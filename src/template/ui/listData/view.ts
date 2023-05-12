import { BaseTemplate } from '../../base/base';

export class ListDataView extends BaseTemplate {
    private _dartString: string;

    constructor(fileName: string, suffix: string) {
        super(fileName, suffix);
        this._dartString = `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../widget/error_banner.dart';
import '../../widget/loading_indicator.dart';
import 'view_model.dart';

class ${this.className}View extends StatefulWidget {
  const ${this.className}View({super.key});

  @override
  State<${this.className}View> createState() => _${this.className}ViewState();
}

class _${this.className}ViewState extends State<${this.className}View> {
  final scrollController = ScrollController();
  ${this.className}ViewModel? ${this.camelCaseClassName}ViewModel;

  @override
  void initState() {
    super.initState();
    scrollController.addListener(loadMore);
  }

  @override
  void dispose() {
    scrollController.removeListener(loadMore);
    super.dispose();
  }

  loadMore() {
    if (scrollController.position.maxScrollExtent ==
        scrollController.position.pixels) {
      ${this.camelCaseClassName}ViewModel?.refreshListData(
        nextPage: true,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => ${this.className}ViewModel.instance(),
      child: Consumer<${this.className}ViewModel>(
        builder: (context, viewModel, child) {
          ${this.camelCaseClassName}ViewModel = viewModel;
          if (viewModel.uiState.loading) {
            return const AppLoadingIndicator();
          }

          if (viewModel.uiState.error) {
            AppErrorBanner(
              clearError: viewModel.clearError,
              errorMessage: viewModel.uiState.errorMessage,
              context: context,
            ).show();
          }

          return Scaffold(
            body: RefreshIndicator(
              onRefresh: () => viewModel.refreshListData(),
              child: StreamBuilder<dynamic>(
                stream: viewModel.uiState.streamListData,
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    if (snapshot.data!.isEmpty) {
                      return ListView(
                        physics: const AlwaysScrollableScrollPhysics(),
                        children: const [
                          Padding(
                            padding: EdgeInsets.only(top: 20.0),
                            child: Center(
                              child: Text(
                                'No data',
                              ),
                            ),
                          ),
                        ],
                      );
                    }

                    final listData = snapshot.data!;

                    return ListView.builder(
                      physics: const AlwaysScrollableScrollPhysics(),
                      controller: scrollController,
                      itemCount: snapshot.data!.length,
                      itemBuilder: (BuildContext context, int index) {
                        final data = listData[index];

                        //TODO: implement widget
                        return Container();
                      },
                    );
                  }

                  return const Center(
                    child: CircularProgressIndicator(),
                  );
                },
              ),
            ),
          );
        },
      ),
    );
  }
}`;
    }

    get dartString(): string {
        return this._dartString;
    }
}
