export const VALIDATION_PATTERN = {
    EMP_ID: /^EMP\d{3}$/,
    FULL_NAME: /^[a-zA-ZÀ-ỹ\s]+$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    TEL: /^(0|\+84)(\d{9,10})$/,
    SALARY: /^\d+(\.\d{1,2})?$/,
}