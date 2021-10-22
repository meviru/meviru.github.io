import { Component, OnInit } from '@angular/core';
import { Feedback } from './../../models/feedback.model';
import { FeedbackService } from './../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  host: { 'class': 'inner-wrapper' }
})
export class FeedbackComponent implements OnInit {
  public feedbacks: Feedback[];
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  getViewLink(id: number) {
    return `feedback/view/${id}`;
  }

  filterFeedbackItem(tag) {
    if (tag === 'All') {
      this.feedbacks = this.feedbackService.getFeedbacks();
    } else {
      this.feedbacks = this.feedbackService.getFilteredFeedback(tag);
    }
  }

}
