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
  }

}
