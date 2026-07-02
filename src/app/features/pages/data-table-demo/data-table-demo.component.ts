import { Component, OnInit } from '@angular/core';

import { TableColumn } from '../../../shared/models/table.model';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';

import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { RadioField } from '../../../shared/models/field-types/radio-field.model';
import { SearchField } from '../../../shared/models/field-types/search-field.model';
import { DateField } from '../../../shared/models/field-types/date-field.model';
import { SelectField } from '../../../shared/models/field-types/select-field.model';
interface User {
  id: number;
  username: string;
  email: string;
  status: string;
}

export type tableDataForm = RadioField | SearchField | DateField | SelectField;
@Component({
  selector: 'app-data-table-demo',
  imports: [
    DataTableComponent , 
    SearchBarComponent,
    DynamicFormComponent
  ],
  templateUrl: './data-table-demo.component.html',
  styleUrl: './data-table-demo.component.scss'
})
export class DataTableDemoComponent implements OnInit {
  columns: TableColumn<User>[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'username', label: 'Username', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'status', label: 'Status', sortable: true }
  ];

  allUsers: User[] = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  username: `user${index + 1}`,
  email: `user${index + 1}@example.com`,
  status: index % 2 === 0 ? 'Active' : 'Inactive'
}));

  data: User[] = [];


  totalElements = 0;
  pageIndex = 0;
  pageSize = 11;

  sortField = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  fields : tableDataForm[] = [
    {
      type: 'radio',
      name: 'status',
      label: '',
      options: [
        { value: 'ACTIVE', label: 'Active' },
        { value: 'INACTIVE', label: 'Inactive' }
      ],
      className: {
        container: 'col-span-12'
      }
      
    },
    {
      type: 'search',
      name: 'search',
      label: 'Search',
      placeholder: 'Search by username or email',
      className: {
        container: 'col-span-4'
      }
    },
    {
      type: 'date',
      name: 'birthday',
      label: '',
      minDate: '2000-01-01',
      maxDate: '2030-12-31',
      className: {
        container: 'col-span-4'
      }
    },
    {
      type: 'select',
      name: 'role',
      label: 'Role',
      options: [
        { value: 'ADMIN', label: 'Admin' },
        { value: 'USER', label: 'User' },
        { value: 'GUEST', label: 'Guest' }
      ],
      className: {
        container: 'col-span-4'
      }
     
    }
  ];




  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    let result = [...this.allUsers];

    // sort giả lập server-side
    if (this.sortField) {
      result.sort((a: any, b: any) => {
        const aValue = a[this.sortField];
        const bValue = b[this.sortField];

        if (aValue < bValue) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }

        if (aValue > bValue) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }

        return 0;
      });
    }
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;

    this.totalElements = result.length;
    this.data = result.slice(start, end);
  }

  onPageChange(event: { page: number; size: number }): void {
    this.pageIndex = event.page;
    this.pageSize = event.size;
    this.loadData();
  }

  onSortChange(event: { field: string; direction: 'asc' | 'desc' }): void {
    this.sortField = event.field;
    this.sortDirection = event.direction;
    this.pageIndex = 0;
    this.loadData();
  }
}