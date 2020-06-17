import { Component, OnInit } from '@angular/core';
import { userList } from '../user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  newuname = '';
  newemail = '';
  newfname = '';
  newlname = '';
  newrole = '';
  isValid = false;

  users = userList;

  
  constructor(
    private _location : Location,
    private router : Router
    ) { }

  ngOnInit(): void {
    
  }
  url ="./assets/images/profile.png";

  Validate(){
    if(this.newuname.trim() == '' || this.newemail.trim() == '' || this.newfname.trim() == '' || this.newlname.trim() == '' || this.newrole.trim() == ''){
      this.isValid = false;
    }
    else {
      this.isValid = true;
    }
  }
  onselectFile(e){
    
    if (e.target.files && e.target.files[0]) {

      if (e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/png' || e.target.files[0].type ==='image/jpg') {
          if (e.target.files[0].size > 1000000) {
            alert("Image is too large");
            
            
          }
          else{
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event:any) => {
              this.url = event.target.result;
            }
          }
      }
      else{
        alert("Image is not valid");
      }
      
    }
    
  }
  

  adduser(){
    this.users.push({uname : this.newuname,email : this.newemail,fname : this.newfname,lname : this.newlname,role : this.newrole});
    alert("User Added Successfully");
    this.router.navigate(['/user-list']);
  }

  cancel(){
    this._location.back();
  }

}
