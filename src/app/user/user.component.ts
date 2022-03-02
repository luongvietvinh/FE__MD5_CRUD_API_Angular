import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "./model/User";
import {style} from "@angular/animations";
import {colors} from "@angular/cli/utilities/color";
import {finalize, Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  formCRUD_User!: FormGroup;

  constructor(private http: HttpClient, private userService: UserService, private router: Router, private activateRouter: ActivatedRoute) {

  }

  user: User = new User(0, "", "", "", "", "", true, "")

  ngOnInit(): void {
    this.formCRUD_User = new FormGroup({
      id: new FormControl(0),
      userName: new FormControl(""),
      passWord: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      role: new FormControl(true),
      img: new FormControl("")
    })
  this.findAll();
  }

  findAll(){
this.userService.findAll().subscribe(data => {this.users = data })
  }

  showEdit(user: User) {
    this.userService.findById(user.id).subscribe((data) => {
      this.user = data;
    })
  }
  edit(formEdit: any) {
    this.userService.edit(formEdit).subscribe(() => {
      alert("edit thành công");
      this.findAll();
    })
  }

  delete(id: number) {

      let message = confirm("bạn có chắc muốn xóa không")
      if (message){
        this.userService.delete(id).subscribe(() => {
          this.findAll();
        })
      }else {
      this.findAll();
    }

  }

  create() {
    this.userService.create(this.formCRUD_User.value).subscribe(() => {
      alert("create thành công");
      this.findAll();
    })

  }



}
