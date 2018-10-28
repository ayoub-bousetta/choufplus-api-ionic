import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class SinglePage {


  results;
  item;
 
  data:Observable<any>
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    var url='https://api.choufplus.com/home/top_videos?lang=ar&limit=2'


    this.data=this.http.get(url)
    this.data.subscribe(data=>{
      this.results=data.top_videos.filter(result=>{
  
        return result.vkey == this.navParams.get('vkey')
       
      
      })
      
      this.item={

        titre:  this.results[0]['ch_title'],
        views:  this.results[0]['views'],
        publish_time:  this.results[0]['publish_time'],
        desc:this.results[0]['vtitle']

      }
        
    
      console.log( this.item)
    })
    



 

   



  }


  

}
