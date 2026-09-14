import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { TableColumn } from '../../../shared/models/table.model'; 
import { DepartmentService } from '../service/department.service'; 
import { Department } from '../model/department.model';
import { DynamicFormComponent } from '../../../shared/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../../shared/dynamic-form/models/field-types/field-config.model';
import { FormConfig } from '../../../shared/dynamic-form/models/formConfig.model';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [DataTableComponent,DynamicFormComponent, TranslatePipe],
  templateUrl: './department-list.component.html',
})
export class DepartmentListComponent implements OnInit {
  private departmentService = inject(DepartmentService);
  private translate = inject(TranslateService);

  departments = this.departmentService.departments;
  totalElements = this.departmentService.totalElements;
  loading = this.departmentService.loading;

  keyword = signal('');
  pageIndex = signal(0);
  pageSize = signal(10);
  sortField = signal('');
  sortDirection = signal<'asc' | 'desc'>('asc');

  columns: TableColumn<Department>[] = [];

  searchFields: FieldConfig[] = [
    {
      type: 'search',
      name: 'keyword',
      label: 'Từ khóa',
      placeholder: '',
      clearable: true,
    },
  ];

  searchFormConfig: FormConfig = {
    fields: this.searchFields,
    buttons: [
      {
        label: 'DEPARTMENT.SEARCH_BUTTON',
        type: 'submit',
        className: 'bg-blue-600 text-white px-4 py-2 rounded h-fit',
      },
    ],
  };

  ngOnInit(): void {
    this.loadTranslations();
    this.loadData();
  }

  private loadTranslations(): void {
    this.translate.get([
      'DEPARTMENT.COLUMNS.CODE',
      'DEPARTMENT.COLUMNS.NAME',
      'DEPARTMENT.COLUMNS.DESCRIPTION',
      'DEPARTMENT.SEARCH_PLACEHOLDER',
    ]).subscribe(t => {
      this.columns = [
        { key: 'code', label: t['DEPARTMENT.COLUMNS.CODE'], sortable: true },
        { key: 'name', label: t['DEPARTMENT.COLUMNS.NAME'], sortable: true },
        { key: 'description', label: t['DEPARTMENT.COLUMNS.DESCRIPTION'] },
      ];

      this.searchFields = [
        { ...this.searchFields[0], placeholder: t['DEPARTMENT.SEARCH_PLACEHOLDER'] },
      ];
      this.searchFormConfig = {
        ...this.searchFormConfig,
        fields: this.searchFields,
      };
    });
  }

  onSearchSubmit(value: Record<string, any>): void {
    this.keyword.set((value['keyword'] ?? '').trim());
    this.pageIndex.set(0);
    this.loadData();
  }

  onPageChange(event: { page: number; size: number }): void {
    this.pageIndex.set(event.page);
    this.pageSize.set(event.size);
    this.loadData();
  }

  onSortChange(event: { field: string; direction: 'asc' | 'desc' }): void {
    this.sortField.set(event.field);
    this.sortDirection.set(event.direction);
    this.loadData();
  }

  private loadData(): void {
    this.departmentService.search({
      page: this.pageIndex(),
      size: this.pageSize(),
      keyword: this.keyword() || undefined,
      sort: this.sortField()
        ? `${this.sortField()},${this.sortDirection()}`
        : undefined,
    });
  }
}