import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products$
  type = 'all'

  constructor(private productServ: ProductService,
      private router: Router,
    ) { }

  ngOnInit() {
    if(this.type == 'all'){
      this.products$ = this.productServ.getAll()
      this.router.navigate(['/catalog'], {
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
      this.router.navigate(['/catalog'], {
        queryParams: {
          type : this.type
        }
      })

      this.productServ.setType(this.type)

    }
  }
}
