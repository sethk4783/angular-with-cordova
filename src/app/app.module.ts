import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KycFormComponent } from './kyc-form/kyc-form.component';
import { KycFormPreviewComponent } from './kyc-form-preview/kyc-form-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    KycFormComponent,
    KycFormPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
