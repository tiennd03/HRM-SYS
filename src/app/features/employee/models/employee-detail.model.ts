export interface AttendanceRow {
  date: string;
  checkIn: string;
  checkOut: string;
  hours: string;
  status: string;
}

export interface LeaveRow {
  type: string;
  from: string;
  to: string;
  days: string;
  status: string;
}

export interface PayrollRow {
  period: string;
  baseSalary: string;
  allowance: string;
  deduction: string;
  netSalary: string;
}
