import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TemplateComponent } from './components/template/template.component';
import { ModalComponent } from './components/modal/modal.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TemplateComponent,
    ModalComponent,
    CanvasComponent,
    TableComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
