import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  panels: any;

  ngOnInit(): void {
    this.panels = document.querySelectorAll('.panel');
  }
  title = 'simpleProjects';

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
