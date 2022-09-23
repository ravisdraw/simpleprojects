import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isClick = false;
  isProject = true;
  day = '';
  project = ['Expanding Cards', 'project 2', 'project 3', 'project 4'];

  isClicked(index: any) {
    this.isClick = !this.isClick;
    this.isProject = !this.isProject;
    this.day = index + 1;
  }

  isMainpage() {
    this.isProject = true;
    this.isClick = false;
  }

}
