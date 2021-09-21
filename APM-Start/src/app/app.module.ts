 import { NgModule } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpaces,
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
