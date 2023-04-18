import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { 
  id : number | undefined;
  title : String | undefined ;
  price : number | undefined ;
  category : String | undefined ;
  description : String | undefined ;
  image : String | undefined

}
