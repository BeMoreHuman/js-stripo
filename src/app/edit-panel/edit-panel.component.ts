import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(
    public templateService: TemplateService,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.update.emit();
    this.templateService.isEdit = false;
  }

}
