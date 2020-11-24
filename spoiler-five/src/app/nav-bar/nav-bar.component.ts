import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  visible = false;

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    this.visible = false;
  }

  clickAddTodo() {
    if (!this.visible) {
      let menu = document.querySelector("#menu");
      menu.style.right = 0;
      this.visible = true;
    }
  }

  cerrarMenu() {
    if (this.visible) {
      let menu = document.querySelector("#menu");
      menu.style.right = '-300px';
      this.visible = false;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    let menu = document.querySelector("#menu");
    if (!this._eref.nativeElement.contains(event.target)) {
      this.cerrarMenu();
    }
  }

}
