import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DirectoryComponent } from './directory.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [DirectoryComponent]
})
export class DirectoryModule { }
