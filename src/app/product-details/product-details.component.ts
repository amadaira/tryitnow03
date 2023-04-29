import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

//Define the product property
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  /* Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument within the constructor's parentheses. */
  constructor(private route: ActivatedRoute) { }

/*ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.
By injecting ActivatedRoute, you are configuring the component to use a service. The Managing Data step covers services in more detail.*/

/*In the ngOnInit() method, extract the productId from the route parameters and find the corresponding product in the products array*/

ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  /* Find the product that correspond with the id provided in route */
  this.product = products.find(product => product.id === productIdFromRoute);
}
}