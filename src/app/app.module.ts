import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@Angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CityPipe } from './pipes/city.pipe';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    TaskOneComponent,
    StructuralDirectivesComponent,
    PipesDemoComponent,
    CityPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
