import { TableColumn } from "../../../shared/models/table.model";
import { Employee } from "../models/employee.model";
export const EMPLOYEE_COLUMNS: TableColumn<Employee>[] = [
  { key: 'id', label: 'ID' },
  { key: 'employeeCode', label: 'Mã nhân viên' },
  { key: 'fullName', label: 'Họ tên' },
  { key: 'gender', label: 'Giới tính' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Số điện thoại' },
  { key: 'status', label: 'Trạng thái' }
];