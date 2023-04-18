import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private MyApp:HttpClient  ) { }
  getData(): Observable < any [] >{
    return this.MyApp.get < any > ("https://fakestoreapi.com/products")
  }
}
