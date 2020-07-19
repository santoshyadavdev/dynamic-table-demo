import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { ContentTableComponent } from './content-table/content-table.component';

@NgModule({
  declarations: [ContentComponent, ContentTableComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ContentModule { }
