import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MostraService } from '../mostra.service';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {

  constructor(private provaService: MostraService){

  }

  mostre2nd = this.provaService.mostre
  
  btn(event:any) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}