import 'dart:async';

import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_1/const.dart';
import 'package:flutter_application_1/screens/adm_user/machine.dart';
import 'package:flutter_application_1/screens/adm_user/user.dart';
import 'package:flutter_application_1/screens/login_screen.dart';
import 'package:flutter_application_1/services/loading_service.dart';

class AdmUserScreen extends StatefulWidget {
  const AdmUserScreen({super.key});
  static const String id = '/adm_user_screen';

  @override
  State<AdmUserScreen> createState() => _AdmUserScreenState();
}

class _AdmUserScreenState extends State<AdmUserScreen> {
  String inputText = '';
  bool auth = false;
  final DatabaseReference databaseRef = FirebaseDatabase.instance.ref('users');
  late ScrollController _scrollController1;
  late ScrollController _scrollController2;
  late StreamSubscription _userStream;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    auth = ModalRoute.of(context)?.settings.arguments as bool? ?? false;
  }

  void Auth() {
    if (auth == false) {
      Navigator.pushNamed(context, LoginScreen.id);
    }
  }

  @override
  void initState() {
    super.initState();
    _scrollController1 =
        ScrollController(); // Inicializando o primeiro ScrollController
    _scrollController2 =
        ScrollController(); // Inicializando o segundo ScrollController

    WidgetsBinding.instance.addPostFrameCallback((_) {
      Auth();
      showLoader();
      _userStream = databaseRef.onValue.listen((event) {
        print("Stream iniciado");
        Future.delayed(Duration(milliseconds: 100), () {
          hideLoader();
        });
      });
    });
  }

  @override
  void dispose() {
    // Cancelando o stream no dispose para evitar chamadas após o widget ser removido
    _scrollController1.dispose(); // Dispose do primeiro controller
    _scrollController2.dispose(); // Dispose do segundo controller
    _userStream.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: darkcolor,
      body: Padding(
        padding: EdgeInsets.all(40),
        child: SingleChildScrollView(
          child: Column(
            children: [
              Box(User(), _scrollController1), // Passando o primeiro controller
              SizedBox(
                height: 30,
              ),
              Box(Machine(),
                  _scrollController2), // Passando o segundo controller
            ],
          ),
        ),
      ),
    );
  }

  Widget Box(Widget children, ScrollController scrollController) {
    return Center(
      child: Container(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: 1000),
          child: Container(
            padding: EdgeInsets.all(30),
            decoration: BoxDecoration(
              color: lightcolor,
              borderRadius: BorderRadius.circular(20),
            ),
            child: Scrollbar(
              controller: scrollController, // Usando o controller passado
              thumbVisibility:
                  true, // Certifique-se de que a scrollbar está sempre visível
              child: SingleChildScrollView(
                controller: scrollController, // Usando o controller passado
                scrollDirection: Axis.horizontal,
                child: ConstrainedBox(
                  constraints: BoxConstraints(
                    maxWidth:
                        800, // A largura total do conteúdo (excedendo a largura da tela)
                  ),
                  child: children,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
