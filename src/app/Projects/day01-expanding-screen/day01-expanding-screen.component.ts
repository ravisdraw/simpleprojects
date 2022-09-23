import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day01-expanding-screen',
  templateUrl: './day01-expanding-screen.component.html',
  styleUrls: ['./day01-expanding-screen.component.css'],
})
export class Day01ExpandingScreenComponent implements OnInit {
  constructor() {}
  panels: any;

  ngOnInit(): void {
    this.panels = document.querySelectorAll('.panel');
    this.panels.forEach((panel: any) => {
      panel.addEventListener('click', () => {
        this.removeActiveClass();
        panel.classList.add('active');
      });
    });
  }

  showTheCards() {
    console.log(this.panels);
    this.panels.forEach((panel: any) => {
      this.removeActiveClass();
      panel.classList.add('active');
    });
  }

  removeActiveClass() {
    this.panels.forEach((panel: any) => {
      panel.classList.remove('active');
    });
  }
}
