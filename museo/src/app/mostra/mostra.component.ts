import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MostraService } from '../mostra.service';

@Component({
  selector: 'app-mostra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostra.component.html',
  styleUrl: './mostra.component.css'
})
export class MostraComponent {

  identificatore: any;

 constructor(private route: ActivatedRoute, private provaService: MostraService){

 }

 ngOnInit(){

  this.identificatore = this.route.snapshot.paramMap.get('id');
  console.log(this.identificatore)

 }

 mostra1 = this.provaService.mostra1
 mostra2 = this.provaService.mostra2
 mostra3 = this.provaService.mostra3
 mostra4 = this.provaService.mostra4
 mostra5 = this.provaService.mostra5
 mostra6 = this.provaService.mostra6
 mostra7 = this.provaService.mostra7

}
