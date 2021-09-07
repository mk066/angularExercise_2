import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

  data=[];
  itemData='';
  descriptionData='';
  priceData='';
  hideTable=true;

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    if(this.itemData=='' && this.descriptionData=='' && this.priceData=='')
    {
      alert("Please enter details");
    }
    else{
    this.data.push({Item:this.itemData, Description: this.descriptionData, Price: this.priceData});
    this.hideTable=!this.hideTable;
    this.hideTable=false;
    }
  }
  
}
