import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public comments: CommentModel[] = [];

  constructor() { }

  getAllComments() {
    return this.comments;
  }

  getComments(fid: number) {
    return this.comments.filter(obj => obj.fid == fid);
  }

  addComments(commentItem: CommentModel) {
    this.comments.push(commentItem);
  }
}
