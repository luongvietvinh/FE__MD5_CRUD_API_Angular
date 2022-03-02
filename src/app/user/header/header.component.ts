import { Component, OnInit } from '@angular/core';
import {UserAuthenService} from "../../service/authen/user-authen.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenService:UserAuthenService) { }


  ngOnInit(): void {
  }

}
