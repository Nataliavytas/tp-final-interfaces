import { Component, OnInit } from '@angular/core';
import { faClock, faEllipsisH, faHeart, faList, faPlay, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../detail/Comment';

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


  constructor() { }

  ngOnInit(): void {
  }

}
