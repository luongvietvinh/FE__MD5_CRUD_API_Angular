import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../model/User";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEdit!: FormGroup;
  id: any;
  user!:User;
  public  checkUploadFile = true;


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

  saveUser() {
    if (this.formEdit.get('role')?.value == "1") {
      this.formEdit.get('role')?.setValue(true)
    } else {
      this.formEdit.get('role')?.setValue(false)
    }
    this.formEdit.value.img = this.fb;
    this.userServive.edit(this.formEdit.value).subscribe(() =>
    {
      this.router.navigate(['/user'])}
    );
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
     this.fb= this.user.img;
    });

  }

  public  fb: string | any;
  downloadURL: Observable<string> | any;
  onFileSelected(event: any) {
    this.checkUploadFile= false;
    var n = Date.now();
    const file = event.target.files[0];

    const filePath = `RoomsImages/${n}`;

    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
              console.log("url")
              console.log(url)
              this.checkUploadFile = true;
            }
          });
        })
      )
      .subscribe((url: any) => {
        console.log(url)
      });
  }
}
