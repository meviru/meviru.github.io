import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from './../../../services/feedback.service';

@Component({
  selector: 'app-add-edit-feedback',
  templateUrl: './add-edit-feedback.component.html',
  styleUrls: ['./add-edit-feedback.component.scss']
})
export class AddEditFeedbackComponent implements OnInit {
  public id: number;
  public formTitle: string;
  public isEdit: boolean = false;
  public selectedTag = 'Choose a tag';
  public feedback: Feedback = {
    id: 0,
    upcount: 0,
    title: '',
    desc: '',
    tag: this.selectedTag,
    commentCount: 0,
  };
  public isTagError: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private feedbackService: FeedbackService) { }

  checkTagValue() {
    if (this.feedback.tag == this.selectedTag) {
      this.isTagError = true;
    } else {
      this.isTagError = false;
    }
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.formTitle = this.id == 0 ? 'Add Feedback' : 'Edit Feedback';
    if (this.id !== 0) {
      this.isEdit = true;
      this.feedback = this.feedbackService.getFeedbackItem(this.id);
    }
    this.checkTagValue();
  }

  onSubmit(form: NgForm) {
    if (this.feedback.tag !== this.selectedTag) {
      let feedback;
      if (!this.isEdit) {
        feedback = {
          id: Math.floor(Date.now() + Math.random()),
          upcount: 0,
          title: form.value.title,
          desc: form.value.desc,
          tag: form.value.tag,
          commentCount: 0
        }
        this.feedbackService.addFeedback(feedback);
        this.router.navigateByUrl('');
      } else {
        feedback = {
          id: form.value.id,
          title: form.value.title,
          desc: form.value.desc,
          tag: form.value.tag
        }
        this.feedbackService.editFeedback(feedback);
        this.router.navigateByUrl('');
      }
    } else {
      this.isTagError = true;
    }
  }

}
