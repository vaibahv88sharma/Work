import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '../app/component/layout/app.component';
import { GlobalHeaderComponent } from './component/layout/global-header/global-header.component';
import { CaseAdminComponent } from './component/tabs/case-admin/case-admin.component';
import { GlobalFooterComponent } from './component/layout/global-footer/global-footer.component';
import { VasqiComponent } from './component/page/vasqi/vasqi.component';
import { PatientComponent } from './component/tabs/patient/patient.component';
import { RespondingCrewsComponent } from './component/tabs/responding-crews/responding-crews.component';
import { GlobalNavComponent } from './component/layout/global-nav/global-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    CaseAdminComponent,
    GlobalFooterComponent,
    VasqiComponent,
    PatientComponent,
    RespondingCrewsComponent,
    GlobalNavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
