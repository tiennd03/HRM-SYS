export interface ButtonConfig {
    label : string; 
    type : 'submit' | 'reset' | 'button';
    className ?: string;
    action ?: () => void;
    disabled ?: boolean;
}