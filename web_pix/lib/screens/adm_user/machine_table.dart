import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:flutter_application_1/components/machine_report.dart';
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

  // Widget machineReport(String machineId) {
  //   final machine = _machines.firstWhere(
  //     (m) => m['id'] == machineId,
  //   );

  //   final payments = machine['payments'];
  //   var paymentsList = [];
  //   if (payments is List) {
  //     paymentsList = payments.whereType<Map>().toList();
  //   } else {
  //     paymentsList = (payments as Map).values.toList();
  //   }
  //   paymentsList.sort((b, a) => a['date'].compareTo(b['date']));

  //   return SingleChildScrollView(
  //     child: DataTable(
  //       columns: [
  //         DataColumn(
  //           label: Text(
  //             'Data',
  //             style: TextStyle(color: textcolor),
  //           ),
  //         ),
  //         DataColumn(
  //           label: Text(
  //             'Tipo de pagamento',
  //             style: TextStyle(color: textcolor),
  //           ),
  //         ),
  //         DataColumn(
  //           label: Text(
  //             'Valor',
  //             style: TextStyle(color: textcolor),
  //           ),
  //         ),
  //       ],
  //       rows: paymentsList.map<DataRow>(
  //         (payment) {
  //           return DataRow(
  //             cells: [
  //               DataCell(
  //                 Text(
  //                   DateTime.fromMillisecondsSinceEpoch(payment['date'])
  //                       .toString(),
  //                   style: styleText,
  //                 ),
  //               ),
  //               DataCell(
  //                 Text(
  //                   payment['pay_type'],
  //                   style: styleText,
  //                 ),
  //               ),
  //               DataCell(
  //                 Text(
  //                   payment['value'],
  //                   style: styleText,
  //                 ),
  //               ),
  //             ],
  //           );
  //         },
  //       ).toList(),
  //     ),
  //   );
  // }

  // Widget machineReport(String machineId) {
  //   final machine = _machines.firstWhere(
  //     (m) => m['id'] == machineId,
  //   );

  //   final payments = machine['payments'];
  //   List<Map<String, dynamic>> paymentsList = [];

  //   if (payments is List) {
  //     paymentsList = payments
  //         .map((payment) {
  //           if (payment is Map) {
  //             return Map<String, dynamic>.from(payment);
  //           }
  //           return null;
  //         })
  //         .whereType<Map<String, dynamic>>()
  //         .toList();
  //   } else if (payments is Map) {
  //     paymentsList = payments.values.cast<Map<String, dynamic>>().toList();
  //   }

  //   paymentsList.sort((b, a) => a['date'].compareTo(b['date']));

  //   DateTime? startDate;
  //   DateTime? endDate;
  //   List<Map<String, dynamic>> filteredPaymentsList =
  //       paymentsList; // Lista filtrada

  //   // Função de filtragem de pagamentos
  //   void filterPayments(DateTime? start, DateTime? end) {
  //     setState(() {
  //       startDate = start;
  //       endDate = end;
  //       filteredPaymentsList = paymentsList.where((payment) {
  //         final paymentDate =
  //             DateTime.fromMillisecondsSinceEpoch(payment['date']);
  //         return paymentDate
  //                 .isAfter(startDate!.subtract(const Duration(days: 1))) &&
  //             paymentDate.isBefore(endDate!.add(const Duration(days: 1)));
  //       }).toList();
  //     });
  //   }

  //   return StatefulBuilder(
  //     builder: (context, setState) {
  //       return Column(
  //         children: [
  //           ElevatedButton(
  //             onPressed: () async {
  //               final dateRange = await showDateRangePicker(
  //                 context: context,
  //                 firstDate: DateTime(2000),
  //                 lastDate: DateTime.now(),
  //                 initialDateRange: startDate != null && endDate != null
  //                     ? DateTimeRange(start: startDate!, end: endDate!)
  //                     : null,
  //               );
  //               if (dateRange != null) {
  //                 filterPayments(
  //                     dateRange.start, dateRange.end); // Atualiza as datas
  //               }
  //             },
  //             child: const Text("Filtrar por Data"),
  //           ),
  //           // Exibindo a DataTable com os pagamentos filtrados
  //           SingleChildScrollView(
  //             child: DataTable(
  //               columns: [
  //                 DataColumn(
  //                   label: Text(
  //                     'Data',
  //                     style: TextStyle(color: textcolor),
  //                   ),
  //                 ),
  //                 DataColumn(
  //                   label: Text(
  //                     'Tipo de pagamento',
  //                     style: TextStyle(color: textcolor),
  //                   ),
  //                 ),
  //                 DataColumn(
  //                   label: Text(
  //                     'Valor',
  //                     style: TextStyle(color: textcolor),
  //                   ),
  //                 ),
  //               ],
  //               rows: filteredPaymentsList.map<DataRow>(
  //                 // Usando a lista filtrada
  //                 (payment) {
  //                   return DataRow(
  //                     cells: [
  //                       DataCell(
  //                         Text(
  //                           DateTime.fromMillisecondsSinceEpoch(payment['date'])
  //                               .toString(),
  //                           style: styleText,
  //                         ),
  //                       ),
  //                       DataCell(
  //                         Text(
  //                           payment['pay_type'],
  //                           style: styleText,
  //                         ),
  //                       ),
  //                       DataCell(
  //                         Text(
  //                           payment['value'].toString(),
  //                           style: styleText,
  //                         ),
  //                       ),
  //                     ],
  //                   );
  //                 },
  //               ).toList(),
  //             ),
  //           ),
  //         ],
  //       );
  //     },
  //   );
  // }

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
                        MachineReport(
                            machineId: machine['id'], machines: _machines),
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
