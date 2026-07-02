import { Component , input} from '@angular/core';
import { FormControl , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchField } from '../../../models/field-types/search-field.model';
@Component({
  selector: 'app-search-field',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  config = input.required<SearchField>();
  control = input.required<FormControl>();
  ngOnInit() {
    this.control().valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe(value => {
      console.log('Search field value changed:', value);
    })
  }
  clear() {
    this.control().setValue('');
  }
}
