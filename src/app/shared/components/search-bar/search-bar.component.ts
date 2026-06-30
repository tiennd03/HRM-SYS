import { SearchIconComponent } from './../../icons/search-icon/search-icon.component';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, SearchIconComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Nhập từ khóa tìm kiếm...';
  @Input() btnText : string = 'Tìm kiếm';
  @Input() value: string = '';

  @Output() search = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(){
    this.valueChange.emit(this.value);
  }

  onSearch() {
    this.search.emit(this.value.trim());
  }
}
