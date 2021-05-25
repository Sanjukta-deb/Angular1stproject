import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: StoreService, private route : Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.store.deleteToken();
    this.route.navigate['/login'];
  }

}
