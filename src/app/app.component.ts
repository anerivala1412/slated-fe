import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService) {}
  title = 'slated-fe';
  userInfo:any;
  username = new FormControl('');

  ngOnInit(): void {
    this.username.valueChanges.subscribe(data=>{
      console.log({data})
      });
  }
  getGender(){
      this.appService.getGender(this.username.value).subscribe(userInfo=>{
        this.userInfo  = userInfo
      })
  }
}
