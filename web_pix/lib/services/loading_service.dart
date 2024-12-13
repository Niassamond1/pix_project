import 'package:flutter/material.dart';
import 'package:flutter_application_1/main.dart';

Future<void> showAndHideAwaitForFunction(Future<dynamic> function) async {
  showLoader();
  await function;
  hideLoader();
}

void showLoader() {
  final rootContext = navigatorKey.currentContext;
  showDialog<void>(
    barrierColor: Colors.black.withOpacity(0.9),
    context: rootContext!,
    barrierDismissible: false,
    builder: (context) => PopScope(
      canPop: false,
      child: AlertDialog(
        elevation: 0,
        backgroundColor: Colors.transparent,
        shadowColor: Colors.transparent,
        content: Container(
          width: 100,
          height: 100,
          alignment: Alignment.center,
          color: Colors.transparent,
          child: CircularProgressIndicator(
            color: Colors.white,
          ),
        ),
      ),
    ),
  );
}

void hideLoader() {
  final rootContext = navigatorKey.currentContext;
  Navigator.of(rootContext!, rootNavigator: true).pop();
}
