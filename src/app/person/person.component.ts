import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  persons: Object;
  constructor(private _http: HttpService) { }

  /*ngOnInit() {
    this._http.getPersons().subscribe(data => {
      this.persons = data;
      console.log(this.persons);
    });
  }*/

  ngOnInit() {
      console.log(this._http.getPersons());
    }
}
