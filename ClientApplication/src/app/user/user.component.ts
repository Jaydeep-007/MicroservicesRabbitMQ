import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOfferDetail } from '../Model/ProductOfferDetail';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ProductList?: Observable<ProductOfferDetail[]>;
  ProductList1?: Observable<ProductOfferDetail[]>;

  constructor(
     private userService: UserService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getUserList();
      }, 1000);
  }
  getUserList() {
    this.ProductList1 = this.userService.getUserList();
    this.ProductList = this.ProductList1;
  }
  }

