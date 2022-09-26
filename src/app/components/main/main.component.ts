import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private activeservice: ActiveService) {}

  ngOnInit(): void {}

  // getStatus():number{
  //   return this.activeservice.getActiveNow();
  // }
}
