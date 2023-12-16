import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PayPageComponent } from '../app/pay-page/pay-page.component';
import { UserDetailsComponent } from '../app/user-details/user-details.component';
import { ScanPageComponent } from '../app/scan-page/scan-page.component';

export const routes: Routes = [
  { path: '', component: UserDetailsComponent },
  { path: 'paypage', component: PayPageComponent },
  { path: 'scanpage', component: ScanPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
