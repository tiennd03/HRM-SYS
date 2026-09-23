import { Gender , EmployeeStatus , PositionLevel } from "../../../core/models/enum.model";

export interface Employee {
  id: number;
  employeeCode: string;
  fullName: string;
  gender: Gender;
  dateOfBirth: string;
  email: string;
  phone: string;
  departmentId: number;
  positionId: number;
  joinDate: string;
  salary: number;
  status: EmployeeStatus;
}

export interface EmployeeListViewModel {
    employeeCode: string;
    fullName: string;
    email: string;
    departmentName: string;
    positionName: string;
    salary: number;
    status: EmployeeStatus
}

export interface SearchRequest {
    page?: number;
    size?: number;
    sort?: string;
    keyword?: string;
}

export interface EmployeeSearchRequest extends SearchRequest {
    departmentId ?: number;
    positionId?: number;
    status?: EmployeeStatus;
}