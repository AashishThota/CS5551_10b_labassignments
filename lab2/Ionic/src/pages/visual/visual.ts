import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideosearchPage } from '../videosearch/videosearch'
import 'rxjs/add/operator/map';
/**
 * Generated class for the VisualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visual',
  templateUrl: 'visual.html',
})

export class VisualPage {
searchTerm: string;
positive:string;
negative:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualPage');
  }
 run(){

 let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token PC3ekFMSn8pD'
    });
     const data = {"texts":[this.searchTerm]};
 this.http.post("https://api.uclassify.com/v1/uClassify/Sentiment/en/classify",data,{ headers: headers }).subscribe((data)=>{
 console.log(JSON.stringify(data));
 this.positive=data[0].classification[0].className+" "+data[0].classification[0].p;
 this.negative=data[0].classification[1].className+" "+data[0].classification[1].p;
 },error => {
       console.log(JSON.stringify(error));
      });

 }
move(){
this.navCtrl.setRoot(VideosearchPage);
}
}
