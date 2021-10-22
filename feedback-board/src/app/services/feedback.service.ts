import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public feedbacks: Feedback[] = [];

  constructor() { }

  getFeedbacks() {
    return this.feedbacks;
  }

  getFeedbackItem(id: number) {
    return this.feedbacks.find(obj => obj.id == id);
  }

  getFilteredFeedback(tag: string) {
    return this.feedbacks.filter(obj => obj.tag == tag);
  }

  addFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback);
  }

  editFeedback(feedback: Feedback) {
    let oldFeedback = this.feedbacks.find(obj => obj.id == feedback.id);
    oldFeedback.title = feedback.title;
    oldFeedback.desc = feedback.desc;
    oldFeedback.tag = feedback.tag;
  }

  updateCommentCount(fid: number, count: number) {
    let oldFeedback = this.feedbacks.find(obj => obj.id == fid);
    oldFeedback.commentCount = count;
  }
}
