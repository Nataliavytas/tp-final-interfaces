import { Component, OnInit } from '@angular/core';
import { faClock, faEllipsisH, faHeart, faList, faPlay, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../detail/Comment';
import { Song } from './Song';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  color: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  
  faStar = faStar;
  faClock = faClock;
  faShare = faShareAlt;
  faHeart = faHeart;
  faPlay = faPlay;
  faList = faList;
  faDots = faEllipsisH;

  comments: Comment[] = [{
    username: "Roberto", 
    stars: 1,
    comment: "Una cagada la verdad"
  },
  {
    username: "Carla", 
    stars: 3,
    comment: "Meh"
  }
]

songs: Song[] = [{
    name: "Algun nombre", 
    artist:"Corpse",
    album: "el mas nuevo", 
    release: "26-01-2020",
    favorite: true,
},{
  name: "Nombre 2",
  artist:"string",
  album: "string", 
  release: "21-02-2016",
  favorite: false,
}
]


  constructor() { }

  ngOnInit(): void {
    this.color = "#585A66";
    this.color2 = "#585A66";
    this.color3 = "#585A66";
    this.color4 = "#585A66";
    this.color5 = "#585A66";
  }

  
  getcolor() {
    return this.color;
  }

  getcolor2() {
    return this.color2;
  }
  getcolor3() {
    return this.color3;
  }
  getcolor4() {
    return this.color4;
  }
  getcolor5() {
    return this.color5;
  }
  
  clickAddTodo(n) {
    this.color = "#585A66";
    this.color2 = "#585A66";
    this.color3 = "#585A66";
    this.color4 = "#585A66";
    this.color5 = "#585A66";
    for (let i = 1; i <= n; i++) {
      if (i == 1) {
        this.color = "gold";
      } else if (i == 2) {
        this.color2 = "gold";
      } else if (i == 3) {
        this.color3 = "gold";
      } else if (i == 4) {
        this.color4 = "gold";
      } else if (i == 5) {
        this.color5 = "gold";
      }
    }
  }



}
