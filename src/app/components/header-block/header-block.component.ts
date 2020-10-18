import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
})
export class HeaderBlockComponent implements OnInit {
  displaySegment: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute(): void {
    if (this.router.url === '/main') {
      this.displaySegment = true;
    } else {
      this.displaySegment = false;
    }
  }
}
