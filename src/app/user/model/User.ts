export class User{
  id!: number;
  userName!:string;
  passWord!:string;
  phone!:string;
  email!:string;
  address!:string;
  role!:boolean;
  img!:string;


  constructor(id: number, userName: string, passWord: string, phone: string, email: string, address: string, role: boolean, img: string) {
    this.id = id;
    this.userName = userName;
    this.passWord = passWord;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.role = role;
    this.img = img;
  }
}
