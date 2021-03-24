import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BlockButtonsComponent } from './block-buttons/block-buttons.component';
import { FormSimpleArrayComponent } from './form-simple-array/form-simple-array.component';
import { FormSimpleControlComponent } from './form-simple-control/form-simple-control.component';
import { FormSimpleGroupComponent } from './form-simple-group/form-simple-group.component';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    FormSimpleControlComponent,
    FormSimpleGroupComponent,
    BlockButtonsComponent,
    FormSimpleArrayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
