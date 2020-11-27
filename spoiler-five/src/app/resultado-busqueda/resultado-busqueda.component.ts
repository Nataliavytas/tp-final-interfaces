import { Component, OnInit } from '@angular/core';
import { faClock, faEllipsisH, faHeart, faList, faPlay, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Song } from './Song';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faStar = faStar;
  faClock = faClock;
  faShare = faShareAlt;
  faHeart = faHeart;
  faPlay = faPlay;
  faList = faList;
  faDots = faEllipsisH;

  songs: Song[] = [{
    name: "Phisical",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    release: "26-01-2020",
    favorite: true,
  }, {
    name: "Don't Star Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    release: "26-01-2020",
    favorite: false,
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    release: "26-01-2020",
    favorite: false,
  },
  {
    name: "Hallucinate",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    release: "26-01-2020",
    favorite: true,
  }
  ]

}
