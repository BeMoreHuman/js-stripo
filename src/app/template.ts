export interface Template {
  id: number;
  name: string;
  template: string;
  modified: number;
}

export interface EditableElem {
  fontSize: string | number;
  text: string;
}
