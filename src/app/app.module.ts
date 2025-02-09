import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { NewPostListComponent } from './new-post-list/new-post-list.component';
import { PostService } from './services/post.service';
import { TeplateDrivenFormComponent } from './teplate-driven-form/teplate-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

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
    SummaryPipe,
    NewPostListComponent,
    TeplateDrivenFormComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  //  PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
