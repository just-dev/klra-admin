import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachinaryRoutingModule } from './machinary-routing.module';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardTestComponent } from './card-test/card-test.component';
import { CardTest2Component } from './card-test2/card-test2.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MachinaryComponent } from './machinary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { SharedModule } from '@app/shared';
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { StatusComponent } from './status/status.component';
import { ManageComponent } from './manage/manage.component';
import { ComponentStatusComponent } from './component-status/component-status.component';
import { AsManageComponent } from './as-manage/as-manage.component';
import { DiscardedComponent } from './discarded/discarded.component';
import { SoldComponent } from './sold/sold.component';

library.add(fas, far);

@NgModule({
  imports: [CommonModule, FontAwesomeModule, TranslateModule, CoreModule, SharedModule, MachinaryRoutingModule],
  declarations: [
    CardContainerComponent,
    CardFormComponent,
    CardTestComponent,
    CardTest2Component,
    SideNavComponent,
    MachinaryComponent,
    StatusComponent,
    ManageComponent,
    ComponentStatusComponent,
    AsManageComponent,
    DiscardedComponent,
    SoldComponent
  ]
})
export class MachinaryModule {}
