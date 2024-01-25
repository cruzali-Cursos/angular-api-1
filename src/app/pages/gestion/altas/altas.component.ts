import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.scss']
})

export class AltasComponent implements OnInit {

  dataCharacters: any[] =[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.llenarOneCharacter();
  }


    test: any[] = [1,2,3,4];
    
  llenarOneCharacter() {
    this.apiService.getCharacters().subscribe(data => {
      this.dataCharacters = data;
      console.log('ALTAS: this.dataCharacters', this.dataCharacters);
    })
  }

}
