import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Template } from '../template';
import { TemplateService } from '../template.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateDetailComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() template: Template;

  private editableElem: HTMLElement;


  constructor(
    public templateService: TemplateService,
    private route: ActivatedRoute,
    private location: Location,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getTemplate();
  }

  getTemplate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.templateService.getTemplate(id)
      .subscribe(template => this.template = template);
  }

  goBack(): void {
    this.location.back();
  }

  onUpdate(): void {
    console.log(parseFloat(`${this.templateService.editableElem.fontSize}`));

    this.editableElem.innerText = this.templateService.editableElem.text;
    this.editableElem.style.fontSize = parseFloat(`${this.templateService.editableElem.fontSize}`) + 'px';

    this.templateService.updateTemplate(this.template, this.wrapper.nativeElement)
      .subscribe(() => this.getTemplate());
  }

  @HostListener('click', ['$event.target'])
  onClick(elem: HTMLElement) {
    if (elem.classList.contains('editable')) {
      this.editableElem = elem;
      this.templateService.editableElem = {
        fontSize: parseFloat(elem.style.fontSize) || 'initial',
        text: elem.innerText
      };
      this.templateService.isEdit = true;
    }
 }

}
