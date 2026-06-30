import { SortDirection } from './../../models/table.model';
import { Component , EventEmitter, Input, Output } from '@angular/core';
import { BtnPaginationComponent } from '../btn-pagination/btn-pagination.component';
import { CommonModule } from '@angular/common';
import { ChevronupIconComponent } from '../../icons/chevronup-icon/chevronup-icon.component';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule ,BtnPaginationComponent, ChevronupIconComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() pageIndex = 0;
  @Input() pageSize = 0;
  @Input() totalPage = 0;
  @Input() totalElements = 0;
  @Input() sortField = '';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';

  @Output() pageChange = new EventEmitter<number>();

  get pages(): (number | string)[] {
    if(this.totalPage <= 5) {
      return Array.from({length : this.totalPage} , (_, i ) => i);
    }
    if (this.pageIndex <= 2) {
      return [0,1,2,3, '...' , this.totalPage -1];
    } 

    if (this.pageIndex >= this.totalPage - 3){
      return [0 , '...' ,this.totalPage - 4, this.totalPage - 3 , this.totalPage -2 , this.totalPage -1];
    }

    return [ 0 , '...' , this.pageIndex - 1 , this.pageIndex , this.pageIndex + 1 , '...' , this.totalPage - 1];
  };

  get elementsIndex() {
  const start = this.pageIndex * this.pageSize + 1;
  const end = Math.min((this.pageIndex + 1) * this.pageSize, this.totalElements);

  return {
    start,
    end
  };
}

  changePage(page: number) {
    this.pageChange.emit(page);
  }


  
}
