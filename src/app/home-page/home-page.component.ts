import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  constructor(private router: Router,private formBuilder: FormBuilder,) { }
  
  ngOnInit(){

  }

  navigatePages(content:any){
    
    switch (content) {
      case 'createrUser':
        this.router.navigate(['/registerPage']);
        break;
      case 'HistoryNav':
        this.router.navigate(['/historyPage']);
        break;
      case 'paymentNav':
        this.router.navigate(['/invoicePage']);
        break;
      case 'logoutNav':
        this.router.navigate(['/loginPage']);
        break;
    
      default:
        this.router.navigate(['/**']);
        break;
    }
  }
}
