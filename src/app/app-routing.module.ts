import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/templates', pathMatch: 'full' },
  { path: 'templates', component: TemplatesComponent },
  { path: 'detail/:id', component: TemplateDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
