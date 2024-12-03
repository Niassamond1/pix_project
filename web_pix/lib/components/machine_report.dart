import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class MachineReport extends StatefulWidget {
  final String machineId;
  final List<Map<String, dynamic>> machines;

  MachineReport({required this.machineId, required this.machines});

  @override
  _MachineReportState createState() => _MachineReportState();
}

class _MachineReportState extends State<MachineReport> {
  TextEditingController _startDateController = TextEditingController();
  TextEditingController _endDateController = TextEditingController();
  DateTime? startDate;
  DateTime? endDate;
  late List<Map<String, dynamic>> paymentsList;
  late List<Map<String, dynamic>> filteredPaymentsList;

  @override
  void initState() {
    super.initState();
    final machine = widget.machines.firstWhere(
      (m) => m['id'] == widget.machineId,
    );

    final payments = machine['payments'];
    paymentsList = [];

    if (payments is List) {
      paymentsList = payments
          .map((payment) {
            if (payment is Map) {
              return Map<String, dynamic>.from(payment);
            }
            return null;
          })
          .whereType<Map<String, dynamic>>()
          .toList();
    } else if (payments is Map) {
      paymentsList = payments.values.cast<Map<String, dynamic>>().toList();
    }

    paymentsList.sort((b, a) => a['date'].compareTo(b['date']));
    filteredPaymentsList = paymentsList; // Inicializa com todos os pagamentos
  }

  @override
  void dispose() {
    _startDateController.dispose();
    _endDateController.dispose();
    super.dispose();
  }

  void filterPayments() {
    setState(() {
      filteredPaymentsList = paymentsList.where((payment) {
        final paymentDate =
            DateTime.fromMillisecondsSinceEpoch(payment['date']);
        final isAfterStart = startDate == null ||
            paymentDate.isAfter(startDate!.subtract(const Duration(days: 1)));
        final isBeforeEnd = endDate == null ||
            paymentDate.isBefore(endDate!.add(const Duration(days: 1)));
        return isAfterStart && isBeforeEnd;
      }).toList();
    });
  }

  void clearFilters() {
    setState(() {
      startDate = null;
      endDate = null;
      _startDateController.clear();
      _endDateController.clear();
      filteredPaymentsList = paymentsList;
    });
  }

  Future<void> _selectDate(BuildContext context,
      TextEditingController controller, bool isStart) async {
    final initialDate =
        isStart ? startDate ?? DateTime.now() : endDate ?? DateTime.now();
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: initialDate,
      firstDate: DateTime(2000),
      lastDate: DateTime.now(),
      locale: const Locale('pt', 'BR'),
      builder: (BuildContext context, Widget? child) {
        return Theme(
          data: Theme.of(context).copyWith(
            dialogBackgroundColor: Colors.black, // Fundo do calendário
            textTheme: TextTheme(
              bodyLarge:
                  TextStyle(color: Colors.white), // Cor do texto do calendário
            ),
          ),
          child: child!,
        );
      },
    );
    if (picked != null) {
      setState(() {
        if (isStart) {
          startDate = picked;
        } else {
          endDate = picked;
        }
        controller.text = DateFormat('dd/MM/yyyy', 'pt_BR').format(picked);
        filterPayments();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min, // Ajusta o tamanho da coluna ao conteúdo
      children: [
        Row(
          children: [
            Expanded(
              child: TextField(
                controller: _startDateController,
                style: TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  labelText: 'De',
                  labelStyle: TextStyle(color: Colors.white),
                  suffixIcon: IconButton(
                    icon: Icon(Icons.calendar_today, color: Colors.white),
                    onPressed: () =>
                        _selectDate(context, _startDateController, true),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.blue),
                  ),
                ),
                readOnly: true,
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: TextField(
                controller: _endDateController,
                style: TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  labelText: 'Até',
                  labelStyle: TextStyle(color: Colors.white),
                  suffixIcon: IconButton(
                    icon: Icon(Icons.calendar_today, color: Colors.white),
                    onPressed: () =>
                        _selectDate(context, _endDateController, false),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.blue),
                  ),
                ),
                readOnly: true,
              ),
            ),
            IconButton(
              icon: Icon(Icons.clear, color: Colors.white),
              onPressed: clearFilters,
              tooltip: 'Limpar Filtros',
            ),
          ],
        ),
        Flexible(
          fit: FlexFit.loose,
          child: SingleChildScrollView(
            child: DataTable(
              columns: [
                DataColumn(
                  label: Text('Data', style: TextStyle(color: Colors.white)),
                ),
                DataColumn(
                  label: Text('Tipo de pagamento',
                      style: TextStyle(color: Colors.white)),
                ),
                DataColumn(
                  label: Text('Valor', style: TextStyle(color: Colors.white)),
                ),
              ],
              rows: filteredPaymentsList.map<DataRow>(
                (payment) {
                  return DataRow(
                    cells: [
                      DataCell(
                        Text(
                          DateTime.fromMillisecondsSinceEpoch(payment['date'])
                              .toString(),
                          style: TextStyle(fontSize: 14, color: Colors.white),
                        ),
                      ),
                      DataCell(
                        Text(
                          payment['pay_type'],
                          style: TextStyle(fontSize: 14, color: Colors.white),
                        ),
                      ),
                      DataCell(
                        Text(
                          payment['value'].toString(),
                          style: TextStyle(fontSize: 14, color: Colors.white),
                        ),
                      ),
                    ],
                  );
                },
              ).toList(),
            ),
          ),
        ),
      ],
    );
  }
}
