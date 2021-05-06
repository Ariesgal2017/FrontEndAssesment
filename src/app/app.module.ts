import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { TestScoreAccordianComponent } from './test-score-accordian/test-score-accordian.component';
import { TagComponentComponent } from './tag-component/tag-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TagPipePipe } from './pipe/tag-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SearchPipe,
    TestScoreAccordianComponent,
    TagComponentComponent,
    TagPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
