import { NgModule } from '@angular/core';

import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './component/graph/graph.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    SharedModule,
    GraphRoutingModule,
    NgxChartsModule
  ]
})
export class GraphModule { }
