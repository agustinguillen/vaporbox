import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
   ]
})
export class LoadingComponent implements OnInit {
  public splash: boolean;
  public router: string;

  constructor(
    private _router: Router
  ) { 
    this.router = _router.url;
    if(this.router === '/register' || this.router === '/login' || this.router === '/'){
      this.splash = true;
    }else{
      this.splash = false;
    }
   }

  ngOnInit(): void {
  }

}
