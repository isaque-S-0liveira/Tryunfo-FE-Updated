// Tipo de evento genérico que aceita qualquer tipo de input
export type GenericInputEvent = React.ChangeEvent<
HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
export type CheckboxInputEvent = React.ChangeEvent<HTMLInputElement>;
