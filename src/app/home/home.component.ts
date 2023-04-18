import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { ModulesModule } from '../modules/modules.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor ( private serviceApp: ServicesService){}

  products! : ModulesModule[]

  ngOnInit(): void{
    this.getProducts()
  }

  getProducts(){
    this.serviceApp.getData().subscribe(pro=>{
      this.products = pro
      console.log(pro)
    })
  }

}
