import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycFormComponent } from './kyc-form/kyc-form.component';
import { KycFormPreviewComponent } from './kyc-form-preview/kyc-form-preview.component';

const routes: Routes = [{ path: '', component: KycFormComponent }, { path: 'kyc-form-preview', component: KycFormPreviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
