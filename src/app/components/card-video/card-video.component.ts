import { Component, Input,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-video',
  imports: [FormsModule],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css'
})
export class CardVideoComponent {

  @Input() titulo:string=''

    constructor(){
      this.titulo
    }
}
