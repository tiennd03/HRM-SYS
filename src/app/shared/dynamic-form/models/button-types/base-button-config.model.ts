export interface ButtonConfig {
    label : string; 
    type : 'submit' | 'reset' | 'button';
    action ?: () => void;
    disabled ?: boolean;
    className?: {
        button?: string;
        container?: string;
    }
}