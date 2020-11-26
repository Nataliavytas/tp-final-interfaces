import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faClock, faEllipsisH, faHeart, faList, faPlay, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../detail/Comment';
import { Episode } from './Episode';

@Component({
  selector: 'app-detail-podcast',
  templateUrl: './detail-podcast.component.html',
  styleUrls: ['./detail-podcast.component.css']
})
export class DetailPodcastComponent implements OnInit {

  faStar = faStar;
  faClock = faClock;
  faShare = faShareAlt;
  faHeart = faHeart;
  faPlay = faPlay;
  faList = faList;
  faDots = faEllipsisH;
  faChecked = faCheckCircle;

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

  episodes: Episode[] = [{
    name: "Magia nos sobra",
    seen: true
  },{
    name: "El canon te da y te quita",
    seen: false
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
