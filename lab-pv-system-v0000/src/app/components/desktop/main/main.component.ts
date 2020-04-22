import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serrvices/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public href: string = "";

  constructor(public dataService: DataService, private router: Router) {

   }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log("My URL IS " + this.router.url);
  }

}
