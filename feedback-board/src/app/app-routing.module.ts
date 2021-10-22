import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AddEditFeedbackComponent } from './pages/feedback/add-edit-feedback/add-edit-feedback.component';
import { ViewFeedbackComponent } from './pages/feedback/view-feedback/view-feedback.component';

const routes: Routes = [
  { path: "", component: FeedbackComponent },
  { path: "feedback/add/:id", component: AddEditFeedbackComponent },
  { path: "feedback/edit/:id", component: AddEditFeedbackComponent },
  { path: "feedback/view/:id", component: ViewFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
