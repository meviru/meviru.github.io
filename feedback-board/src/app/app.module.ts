import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AddEditFeedbackComponent } from './pages/feedback/add-edit-feedback/add-edit-feedback.component';
import { ViewFeedbackComponent } from './pages/feedback/view-feedback/view-feedback.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SidebarComponent,
    AddEditFeedbackComponent,
    ViewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
