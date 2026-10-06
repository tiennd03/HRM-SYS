import { TableColumn } from "../../../shared/models/table.model";
import { AttendanceRow, LeaveRow, PayrollRow } from "../models/employee-detail.model";
import { Employee } from "../models/employee.model";

export const EMPLOYEE_COLUMNS: TableColumn<Employee>[] = [
  { key: 'id', label: 'API.EMPLOYEE.ID' },
  { key: 'employeeCode', label: 'API.EMPLOYEE.EMPLOYEE_CODE' },
  { key: 'fullName', label: 'API.EMPLOYEE.FULL_NAME' },
  { key: 'gender', label: 'API.EMPLOYEE.GENDER' },
  { key: 'email', label: 'API.EMPLOYEE.EMAIL' },
  { key: 'phone', label: 'API.EMPLOYEE.PHONE' },
  { key: 'status', label: 'API.EMPLOYEE.STATUS' }
];

export const EMPLOYEE_DETAIL_COLUMNS: TableColumn<AttendanceRow>[] = [
  { key: 'date', label: 'Ngày' },
  { key: 'checkIn', label: 'Check-in' },
  { key: 'checkOut', label: 'Check-out' },
  { key: 'hours', label: 'Giờ công' },
  { key: 'status', label: 'Trạng thái' }
];
export const EMPLOYEE_LEAVE_COLUMNS: TableColumn<LeaveRow>[] = [
   { key: 'type', label: 'Loại nghỉ' },
    { key: 'from', label: 'Từ ngày' },
    { key: 'to', label: 'Đến ngày' },
    { key: 'days', label: 'Số ngày' },
    { key: 'status', label: 'Trạng thái' }
]
export const EMPLOYEE_PAYROLL_COLUMNS: TableColumn<PayrollRow>[] = [
  { key: 'period', label: 'Kỳ lương' },
    { key: 'baseSalary', label: 'Lương cơ bản' },
    { key: 'allowance', label: 'Phụ cấp' },
    { key: 'deduction', label: 'Khấu trừ' },
    { key: 'netSalary', label: 'Thực nhận' }
];
export type DetailRow = Record<string, string | number>;