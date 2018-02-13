import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uyeler: any[];
  kisi: any;
  gorev: any[];


  constructor(private personservice: PersonService) { }

  ngOnInit() {
    this.uyeleriGetir();
  }

  uyeleriGetir() {
    this.personservice.hepsiniBul().subscribe(result => {
      console.log(result);
      this.uyeler = result.data;
      this.uyeDetayGetir(this.uyeler[0].persnr);

    });
  }

  uyeDetayGetir(persnr) {
    this.personservice.biriniBul(persnr).subscribe(result => {
      console.log(result.data);
      this.kisi = result.data.personal[0];
      this.gorev = result.data.job;
    })
  }
}
