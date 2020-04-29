import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { Template } from '../template';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  templates: Template[];

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.getTemplates();
    console.log(this.templates);
  }

  getTemplates(): void {
    this.templateService.getTemplates()
      .subscribe(templates => this.templates = templates);
  }

}
