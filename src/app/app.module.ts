import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularThreeNGTModule } from './angular-three-ngt/angular-three-ngt.module';
import { BouncerComponent } from './bouncer/bouncer.component';
import { ScrolltriggerdemoComponent } from '../older_backup_material/scrolltriggerdemo/scrolltriggerdemo.component';




@NgModule({
  declarations: [
    AppComponent,
    BouncerComponent,
    ScrolltriggerdemoComponent,
    
    
  ],
  imports: [
    AngularThreeNGTModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
