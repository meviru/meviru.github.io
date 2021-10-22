import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() filterItem = new EventEmitter<string>();

  public isCardOpen: boolean = false;
  public isTagActive: boolean = false;
  public tagList: Array<{}> = [
    {name: 'All'},
    {name: 'UX'},
    {name: 'UI'},
    {name: 'Enhancement'},
    {name: 'Bug'},
    {name: 'Feature'}
  ];
  constructor() { }

  ngOnInit() {
  }

  openOtherCards() {
    this.isCardOpen = !this.isCardOpen;
  }

  filterFeedback(tag: string) {
    this.filterItem.emit(tag);
  }
}
