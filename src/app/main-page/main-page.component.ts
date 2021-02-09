import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  products$
  type = 'stock'

  constructor(private productServ: ProductService,
      private router: Router,
    ) { }

  ngOnInit() {
    if(this.type == 'stock'){
      this.products$ = this.productServ.getAll()
      this.router.navigate(['/'], {
        queryParams: {
          type : this.type
        }
      })
      this.setType(this.type)
    }
  }

  setType (type) {
    this.type = type

    if ( this.type !=='Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type : this.type
        }
      })

      this.productServ.setType(this.type)

    }
  }
}
