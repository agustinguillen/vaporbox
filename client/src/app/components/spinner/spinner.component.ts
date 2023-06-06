import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [ 
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
   ]
})
export class SpinnerComponent implements OnInit {

  constructor(
    private _router: Router
  ) { 

   }

  ngOnInit(): void {
  }

}
