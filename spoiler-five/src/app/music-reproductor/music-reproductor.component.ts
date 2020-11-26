import { Component, OnInit } from '@angular/core';
import { faChevronUp, faHeart, faList, faPlayCircle, faStar, faStepBackward, faStepForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-reproductor',
  templateUrl: './music-reproductor.component.html',
  styleUrls: ['./music-reproductor.component.css']
})
export class MusicReproductorComponent implements OnInit {

  constructor() { }
  faVolume = faVolumeUp;
  faHeart = faHeart;
  faUp = faChevronUp;
  faPlay = faPlayCircle;
  faNext = faStepForward;
  faPrevious = faStepBackward;
  faStar = faStar;
  faList = faList;

  ngOnInit(): void {
  }

}
