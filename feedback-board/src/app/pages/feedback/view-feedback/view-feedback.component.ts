import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { CommentModel } from './../../../models/comment.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {
  public id: number;
  public maxTextLength: number = 250;
  public feedback: Feedback = {
    id: 0,
    upcount: 0,
    title: '',
    desc: '',
    tag: '',
    commentCount: 0
  };

  public comments: CommentModel[];

  public comment: string = '';

  constructor(private route: ActivatedRoute, private feedbackService: FeedbackService, private commentService: CommentService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    if (this.id != 0) {
      this.feedback = this.feedbackService.getFeedbackItem(this.id);
      this.getRelatedComments();
    }
  }

  onSubmit(form: NgForm) {
    let comment = {
      cid: Math.floor(Date.now() + Math.random()),
      fid: form.value.id,
      commentDetail: form.value.comment
    }
    this.commentService.addComments(comment);
    this.getRelatedComments();
  }

  getRelatedComments() {
    this.comments = this.commentService.getComments(this.id);
    this.feedbackService.updateCommentCount(this.id, this.comments.length);
  }
}
