import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../model/User";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  formEdit!: FormGroup;
  id: any;
  user!:User;

  constructor(private userServive: UserService, private router: Router, private activerouter: ActivatedRoute,private storage: AngularFireStorage) {
  }
  ngOnInit(): void {

    this.formEdit = new FormGroup({
      id: new FormControl(),
      userName: new FormControl(),
      passWord: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      role: new FormControl(),
      img: new FormControl(),
    })
    this.activerouter.params.subscribe((data) => {
      this.id = data['id'];
      this.showEdit();
    });

  }

  showEdit() {
    this.userServive.findById(this.id).subscribe((user)=>{
      this.user = user;
      this.formEdit.get('id')?.setValue(this.user.id);
      this.formEdit.get('username')?.setValue(this.user.userName);
      this.formEdit.get('passWord')?.setValue(this.user.passWord);
      this.formEdit.get('phone')?.setValue(this.user.phone);
      this.formEdit.get('email')?.setValue(this.user.email);
      this.formEdit.get('address')?.setValue(this.user.address);
      this.formEdit.get('role')?.setValue(this.user.role);
      this.formEdit.get('img')?.setValue(this.user.img);
    });

  }

}
