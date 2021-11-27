import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setEmailId } from 'src/store/actions/login-action';
import { AppState } from 'src/store/AppState';
import { Login } from 'src/store/reducer/login-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-sample';
    emailData : Observable<any>;
    constructor(private store:Store<AppState>){
     this.emailData=   this.store.select('login')
    }
    ngOnInit(): void{
        console.log('ng on init')
        this.store.dispatch(setEmailId({emailId:"shubham.a.shubham@accenture.com"}))
        this.store.select('login').subscribe(resp=>{
          console.log(resp)
        })
      }



  buttonClick(){
    alert("hi")
  }
}
