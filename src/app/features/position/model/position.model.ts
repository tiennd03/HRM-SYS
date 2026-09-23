import { PositionLevel } from "../../../core/models/enum.model";
export interface Position {
    id: number;
    code: string;
    name: string;
    level?: PositionLevel
}

export interface PositionSearchRequest {
    page?: number;
    size?: number;
    sort?: string;
    keyword?: string;
}