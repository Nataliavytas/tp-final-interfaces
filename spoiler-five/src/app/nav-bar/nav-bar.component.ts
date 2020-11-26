import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  visible = false;
  pixeles;
  visibleMenu: string;
  visiblePerfil: string;

  genero: string[] = ["Rock", "Pop", "Indie", "Clasico"];
  decadas: string[] = ["70´s", "80´s", "90´s", "00´s"];
  seleccionadoGenero: string[] = [];
  seleccionadoDecada: string[] = [];

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    this.visible = false;
    this.pixeles = '-300px';
    this.visibleMenu = 'hidden';
    this.visiblePerfil = 'hidden';
  }

  clickAddTodo() {
    if (!this.visible) {
      let menu = document.querySelector("#menu");
      this.pixeles = '0px';
      this.visible = true;
    }
  }

  getPixeles() {
    return this.pixeles;
  }

  visibleFilter() {
    return this.visibleMenu;
  }

  visibleMenuPerfil() {
    return this.visiblePerfil;
  }

  clickFiltro() {
    if (this.visibleMenu == 'hidden') {
      this.visibleMenu = 'visible'
    } else {
      this.visibleMenu = 'hidden'
    }
  }

  clickPerfil() {
    if (this.visiblePerfil == 'hidden') {
      this.visiblePerfil = 'visible'
    } else {
      this.visiblePerfil = 'hidden'
    }
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      if (this.visible) {
        let menu = document.querySelector("#menu");
        this.pixeles = '-300px';
        this.visible = false;
      }
    }
  }

}
