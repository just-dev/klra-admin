import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { MachinaryComponent } from './machinary.component';
import { StatusComponent } from './status/status.component';
import { ManageComponent } from './manage/manage.component';
import { ComponentStatusComponent } from './component-status/component-status.component';
import { AsManageComponent } from './as-manage/as-manage.component';
import { DiscardedComponent } from './discarded/discarded.component';
import { SoldComponent } from './sold/sold.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'machinary',
      component: MachinaryComponent,
      data: { title: '장비관리' },
      children: [
        { path: '', redirectTo: 'status', pathMatch: 'full' },
        { path: 'status', component: StatusComponent },
        { path: 'manage', component: ManageComponent },
        { path: 'component-status', component: ComponentStatusComponent },
        { path: 'as-manage', component: AsManageComponent },
        { path: 'discarded', component: DiscardedComponent },
        { path: 'sold', component: SoldComponent }
      ]
    }
  ])
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachinaryRoutingModule {}
