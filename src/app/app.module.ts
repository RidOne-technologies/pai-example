import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolkadotIdentIconModule } from 'polkadot-angular-identicon';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PolkadotIdentIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
