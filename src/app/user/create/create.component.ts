import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup,FormBuilder} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {User} from "../model/User";



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public  checkUploadFile = true;
  formCRUD_User!: FormGroup;

  constructor(private userService: UserService, private router: Router,private storage : AngularFireStorage ) {

  }

  role: any;
  user!:User;
  ngOnInit(): void {
    this.formCRUD_User = new FormGroup({
      userName: new FormControl(""),
      passWord: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      role: new FormControl(true),
      img: new FormControl("")

    })
  }

  save() {

    if (this.formCRUD_User.get('role')?.value == "1") {
      this.formCRUD_User.get('role')?.setValue(true)
    } else {
      this.formCRUD_User.get('role')?.setValue(false)
    }
    this.formCRUD_User.value.img = this.fb;
    this.userService.create(this.formCRUD_User.value).subscribe(() =>{

      this.router.navigate(['/user']);
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
