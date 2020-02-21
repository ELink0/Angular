import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IfprComponent } from './ifpr/ifpr.component';
import { TadsComponent } from './tads/tads.component';
import { TurmaComponent } from './turma/turma.component';


@NgModule({
  declarations: [
    AppComponent,
    IfprComponent,
    TadsComponent,
    TurmaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
