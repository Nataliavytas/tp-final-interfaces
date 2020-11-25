import { Component, OnInit } from '@angular/core';
import { faClock, faHeart, faShare, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Comment } from './Comment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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

  faStar = faStar;
  faClock = faClock;
  faShare = faShareAlt;
  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
