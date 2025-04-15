export interface FormField {
    label: string,
    id: string
    type: string,
    value?: any
}

export interface DynamicForm {
    id: string,
    fields: FormField[], 
}