import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataTableComponent } from '../../../../shared/components/data-table/data-table.component';
import { TableColumn } from '../../../../shared/models/table.model';

import { EMPLOYEE_DETAIL_COLUMNS, EMPLOYEE_LEAVE_COLUMNS, EMPLOYEE_PAYROLL_COLUMNS } from '../../constants/employee.constant';
import { AttendanceRow, LeaveRow, PayrollRow } from '../../models/employee-detail.model';
import { DetailRow } from '../../constants/employee.constant';
type EmployeeTab = 'attendance' | 'leave' | 'payroll';


@Component({
  selector: 'app-employee-detail',
  imports: [DataTableComponent, RouterLink],
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  activeTab = signal<EmployeeTab>('attendance');

  readonly attendanceColumns = EMPLOYEE_DETAIL_COLUMNS;
  readonly leaveColumns = EMPLOYEE_LEAVE_COLUMNS;
  readonly payrollColumns = EMPLOYEE_PAYROLL_COLUMNS;

  readonly attendanceRows: AttendanceRow[] = [
    { date: '16/08/2026', checkIn: '08:05', checkOut: '17:32', hours: '8.5', status: 'PRESENT' },
    { date: '15/08/2026', checkIn: '09:12', checkOut: '18:01', hours: '7.8', status: 'LATE' },
    { date: '14/08/2026', checkIn: '08:00', checkOut: '16:10', hours: '7.2', status: 'EARLY_LEAVE' },
    { date: '13/08/2026', checkIn: '—', checkOut: '—', hours: '0', status: 'ABSENT' },
    { date: '12/08/2026', checkIn: '—', checkOut: '—', hours: '0', status: 'ON_LEAVE' }
  ];

  readonly leaveRows: LeaveRow[] = [
    { type: 'Nghỉ phép năm', from: '12/08/2026', to: '12/08/2026', days: '1', status: 'APPROVED' },
    { type: 'Nghỉ việc riêng', from: '02/07/2026', to: '02/07/2026', days: '1', status: 'APPROVED' }
  ];

  readonly payrollRows: PayrollRow[] = [
    { period: '08/2026', baseSalary: '18.000.000', allowance: '1.500.000', deduction: '500.000', netSalary: '19.000.000' },
    { period: '07/2026', baseSalary: '18.000.000', allowance: '1.500.000', deduction: '500.000', netSalary: '19.000.000' }
  ];

  get activeColumns(): TableColumn<any>[] {
    switch (this.activeTab()) {
      case 'leave': return this.leaveColumns;
      case 'payroll': return this.payrollColumns;
      default: return this.attendanceColumns;
    }
  }

  get activeRows(): any[] {
    switch (this.activeTab()) {
      case 'leave': return this.leaveRows;
      case 'payroll': return this.payrollRows;
      default: return this.attendanceRows;
    }
  }

  setActiveTab(tab: EmployeeTab): void {
    this.activeTab.set(tab);
  }
}