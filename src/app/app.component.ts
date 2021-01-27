import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUD';
  allusers: Object;
  IsEdit=false;
  userObj={
    FirstName :'',
    LastName:'',
    Phone:'',
    Email:'',
    Password:'',
    id:''
  }
constructor(private commonService : CommonService){}
ngOnInit(){
  this.getallusers();
}
  AddUser(formData){
    console.log(formData);
    this.commonService.insertUser(formData).subscribe((response)=>{
      console.log("user has been inserted.");
      this.getallusers();
    })
  }
  getallusers(){
    this.commonService.showAllUser().subscribe((response)=>{
      this.allusers =response;
    })
  }
  editUser(user){
    this.IsEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getallusers();
    })
  }
  updateuser(){
    this.IsEdit =!this.IsEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getallusers();
    })
  }
}


