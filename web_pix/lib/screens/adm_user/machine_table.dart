import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_1/const.dart';
import 'package:flutter_application_1/services/loading_service.dart';

class MachineTable extends StatefulWidget {
  const MachineTable({super.key});

  @override
  State<MachineTable> createState() => _MachineTableState();
}

class _MachineTableState extends State<MachineTable> {
  final DatabaseReference _databaseMachineRef =
      FirebaseDatabase.instance.ref('machines');
  List<Map<String, dynamic>> _machines = [];
  final DatabaseReference _databaseRef = FirebaseDatabase.instance.ref('users');
  List<Map<String, dynamic>> _users = [];

  @override
  void initState() {
    _fetchData();
    super.initState();
  }

  void _fetchData() async {
    // Fetch Users
    final userData = await _databaseRef.onValue.first;
    final users = (userData.snapshot.value as Map<dynamic, dynamic>?)
            ?.entries
            .map((entry) {
          final key = entry.key as String;
          final value = Map<String, dynamic>.from(entry.value as Map);
          return {'id': key, ...value};
        }).toList() ??
        [];

    // Fetch Machines
    final machineData = await _databaseMachineRef.onValue.first;
    final machines = (machineData.snapshot.value as Map<dynamic, dynamic>?)
            ?.entries
            .map((entry) {
          final key = entry.key as String;
          final value = Map<String, dynamic>.from(entry.value as Map);
          return {'id': key, ...value};
        }).toList() ??
        [];

    if (mounted) {
      setState(() {
        _users = users;
        _machines = machines;
      });
    }
  }

  Widget selectUsers(String machineId) {
    return SingleChildScrollView(
      child: DataTable(
        columns: [
          DataColumn(
            label: Text(
              'Usuários',
              style: TextStyle(color: textcolor),
            ),
          ),
          DataColumn(
            label: Text(
              'Vinculação',
              style: TextStyle(color: textcolor),
            ),
          ),
        ],
        rows: _users.map<DataRow>(
          (users) {
            Map<Object?, Object?> machines = users['machines'] ?? {};
            return DataRow(
              cells: [
                DataCell(
                  Text(
                    users['id'],
                    style: TextStyle(
                      color: machines.containsKey(machineId)
                          ? Colors.green
                          : textcolor,
                      fontSize: 15,
                    ),
                  ),
                ),
                DataCell(ElevatedButton(
                  onPressed: () async {
                    try {
                      // Debugging logs to confirm variable states
                      // print("User ID: ${users['id']}");
                      // print("Machines: ${users['machines']}");
                      // print("Machine ID: $machineId");
                      showLoader();
                      Map<Object?, Object?> machines = users['machines'] ?? {};

                      if (machines.containsKey(machineId)) {
                        print("Removing machine with ID: $machineId");
                        await _databaseRef
                            .child(users['id'])
                            .child('machines')
                            .child(machineId)
                            .remove();
                        print("Machine removed successfully.");
                      } else {
                        print("Adding machine with ID: $machineId");
                        await _databaseRef
                            .child(users['id'])
                            .child('machines')
                            .child(machineId)
                            .update({'machine': machineId});
                        print("Machine added successfully.");
                      }
                      hideLoader();
                      //Navigator.pop(context);
                    } catch (e) {
                      // Log the error and show user-friendly feedback
                      print("Error: $e");
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                            content:
                                Text("An error occurred. Please try again.")),
                      );
                    }
                  },
                  child: Text(
                    users['machines']?.containsKey(machineId) == true
                        ? 'Desvincular'
                        : 'Vincular',
                    style: stylebutton,
                  ),
                )),
              ],
            );
          },
        ).toList(),
      ),
    );
  }

  Widget machineReport(String machineId) {
    final machine = _machines.firstWhere(
      (m) => m['id'] == machineId,
    );

    final payments = machine['payments'];
    final paymentsList = (payments as Map).values.toList();

    return SingleChildScrollView(
      child: DataTable(
        columns: [
          DataColumn(
            label: Text(
              'Data',
              style: TextStyle(color: textcolor),
            ),
          ),
          DataColumn(
            label: Text(
              'Tipo de pagamento',
              style: TextStyle(color: textcolor),
            ),
          ),
          DataColumn(
            label: Text(
              'Valor',
              style: TextStyle(color: textcolor),
            ),
          ),
        ],
        rows: paymentsList.map<DataRow>(
          (payment) {
            return DataRow(
              cells: [
                DataCell(
                  Text(
                    DateTime.fromMillisecondsSinceEpoch(payment['date'])
                        .toString(),
                    style: styleText,
                  ),
                ),
                DataCell(
                  Text(
                    payment['pay_type'],
                    style: styleText,
                  ),
                ),
                DataCell(
                  Text(
                    payment['value'],
                    style: styleText,
                  ),
                ),
              ],
            );
          },
        ).toList(),
      ),
    );
  }

  void _showModal(BuildContext context, String title, Widget childs) {
    _fetchData();

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return StatefulBuilder(
          builder: (BuildContext context, setState) {
            return AlertDialog(
              backgroundColor: lightcolor,
              title: Center(
                child: Text(
                  title,
                  style: TextStyle(color: Color(0xFFE0E0E0)),
                ),
              ),
              content: ConstrainedBox(
                constraints: BoxConstraints(
                  maxWidth: 900,
                ),
                child: SingleChildScrollView(
                  child: Container(
                    child: childs,
                  ),
                ),
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: DataTable(
        columns: [
          DataColumn(
            label: Text(
              'Maquina',
              style: TextStyle(color: textcolor),
            ),
          ),
          DataColumn(
            label: Text(
              'última atualização',
              style: TextStyle(color: textcolor),
            ),
          ),
          DataColumn(
            label: Text(
              'Gerar',
              style: TextStyle(color: textcolor),
            ),
          ),
          DataColumn(
            label: Text(
              'Usuários',
              style: TextStyle(color: textcolor),
            ),
          ),
        ],
        rows: _machines.map(
          (machine) {
            return DataRow(
              cells: [
                DataCell(
                  Text(
                    machine['id'],
                    style: styleText,
                  ),
                ),
                DataCell(
                  Text(
                    DateTime.fromMillisecondsSinceEpoch(machine['lastUpdate'])
                        .toString(),
                    style: styleText,
                  ),
                ),
                DataCell(
                  ElevatedButton(
                    onPressed: () {
                      _showModal(
                        context,
                        'Informação de máquina',
                        machineReport(
                          machine['id'],
                        ),
                      );
                    },
                    child: Text(
                      'Gerar',
                      style: stylebutton,
                    ),
                  ),
                ),
                DataCell(
                  ElevatedButton(
                    onPressed: () {
                      _showModal(
                        context,
                        'Vincular Usuário',
                        selectUsers(
                          machine['id'],
                        ),
                      );
                    },
                    child: Text(
                      'Usuários',
                      style: stylebutton,
                    ),
                  ),
                ),
              ],
            );
          },
        ).toList(),
      ),
    );
  }
}
