import { DynamicFieldOption } from './../../models/base-field-config.model';
export enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}

export const USER_ROLE_OPTIONS : DynamicFieldOption<UserRole>[] = [
    { value: UserRole.Admin , label: "Admin"},
    { value: UserRole.User, label: "User"},
    { value: UserRole.Guest, label: "Guest"}
]