import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SinglePage } from '../single/single';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results:any=[];
  items:any=[];
  data:Observable<any>

  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.initializeItems();

  }


  ngOnInit(){
 
    
    var url='https://api.choufplus.com/home/top_videos?lang=ar&limit=20'

    this.data=this.http.get(url)
    this.data.subscribe(data=>{
      this.results=data.top_videos
      this.items=this.results

      console.log(this.results)
    })

   

    
  }
  
  



  initializeItems(){
    this.results=this.items;
  }

  getItems(ev: any) {
   
    const val = ev.target.value;
  
    this.initializeItems()

   if (val && val.trim() != '') {
   

    this.results= this.results.filter(result => {
      
      return (result.ch_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }

    
  }


  onItemClick(val){


    let data={
      vkey:val
    }
    this.navCtrl.push(SinglePage,data)
  }



}
