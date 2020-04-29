import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Template, EditableElem } from './template';
import { TEMPLATES } from './mock-templates';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  public isEdit = false;
  public editableElem: EditableElem;
  public availableTemplates: Template[];

  constructor() {
    let temps = localStorage.getItem('templates');
    if (!temps) {
      localStorage.setItem('templates', JSON.stringify(TEMPLATES));
      temps = localStorage.getItem('templates');
    }
    this.availableTemplates = JSON.parse(temps);
  }

  /** GET templates from the server */
  getTemplates(): Observable<Template[]> {
    return of(this.availableTemplates);
  }

  /** GET template by id */
  getTemplate(id: number): Observable<Template> {
    const template = this.availableTemplates.find(temp => temp.id === id);
    return of(template);
  }

  /** PUT: update the template on the server */
  updateTemplate(template: Template, templateHTML: HTMLElement): Observable<any> {
    const elem = this.availableTemplates.find(temp => temp.id === template.id);
    elem.template = templateHTML.innerHTML;
    elem.modified = Date.now();
    localStorage.setItem('templates', JSON.stringify(this.availableTemplates));
    return of({success: true});
  }
}
