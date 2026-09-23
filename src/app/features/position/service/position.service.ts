import { Injectable, signal } from "@angular/core";
import { CrudService } from "../../../core/services/crud.service";
import { Position, PositionSearchRequest } from "../model/position.model";

@Injectable({providedIn: 'root'})
export class PositionService extends CrudService<Position, PositionSearchRequest> {
    constructor(){
        super('positions');
    }
    private _positions = signal<Position[]>([])
    positions = this._positions.asReadonly();

    searchListPosition(
        request: PositionSearchRequest = {}
    ): void {
        this.search(request).subscribe({
            next: page => {
                this._positions.set(page.content);
            }
        });
    }
}