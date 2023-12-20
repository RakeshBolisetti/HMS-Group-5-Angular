import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physician-nav',
  templateUrl: './physician-nav.component.html',
  styleUrls: ['./physician-nav.component.css']
})
export class PhysicianNavComponent {

  constructor(private router:Router){}

  logout():void{
    sessionStorage.clear();
    this.router.navigate([''])

  }

}
