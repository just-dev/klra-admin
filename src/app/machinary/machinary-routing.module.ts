import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { MachinaryComponent } from './machinary.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'machinary', component: MachinaryComponent, data: { title: '장비관리' } }])
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachinaryRoutingModule {}
