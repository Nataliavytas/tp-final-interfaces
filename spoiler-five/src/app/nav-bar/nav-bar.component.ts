import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  visible = false;
  pixeles;

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    this.visible = false;
    this.pixeles = '-300px';
  }

  clickAddTodo() {

    if (!this.visible) {
      let menu = document.querySelector("#menu");
      this.pixeles = '0px';
      this.visible = true;
    }
  }

  cerrarMenu() {
    if (this.visible) {
      let menu = document.querySelector("#menu");
      this.pixeles = '-300px';
      this.visible = false;
    }
  }

  getPixeles() {
    return this.pixeles;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.cerrarMenu();
    }
  }

}
