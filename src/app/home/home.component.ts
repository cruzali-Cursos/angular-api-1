import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarDataCharacter();
    this.llenarDataAllCharacter();
  }


  llenarDataCharacter() {
    this.apiService.getCharacters().subscribe( data => {
      this.characters = data;
      console.log('this.getCharacters', this.characters);
    })
  }

  allCharacters: any[] = [];

  llenarDataAllCharacter() {
    this.apiService.getAllCharacters().subscribe(data => {
      this.allCharacters = data;
      console.log('this.getAllCharacters', this.allCharacters);
    })
  }


}
