import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: any ={"nombre":"LUIS","apellido":"ATAUCUSI SULCA","anio":2022 }
  constructor() { }

  ngOnInit(): void {
  }

}
