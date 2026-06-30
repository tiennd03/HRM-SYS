import { Component , Input , Output , EventEmitter } from '@angular/core';
import { TrashIconComponent } from '../../icons/trash-icon/trash-icon.component';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [TrashIconComponent  , TranslatePipe],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  @Input() username = 'admin';

  @Output() confirm = new EventEmitter<void>();

  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
