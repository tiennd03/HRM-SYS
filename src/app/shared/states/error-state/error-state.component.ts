import { Component, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-state',
  standalone: true,
  imports: [],
  templateUrl: './error-state.component.html',
  styleUrl: './error-state.component.scss'
})
export class ErrorStateComponent {
  @Input() message = 'Có lỗi xảy ra';
  @Output() retry = new EventEmitter<void>();
}
