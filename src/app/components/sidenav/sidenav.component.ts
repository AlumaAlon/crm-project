import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // changeStatusCustomers(): void {
  //   this.activeservice.changeToCustomers();
  // }

  // changeStatusContacts(): void {
  //   this.activeservice.changeToContacts();
  // }
}
