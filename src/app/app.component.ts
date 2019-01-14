import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){}
  httpDataPenguna;
  httpDataMatakuliah;
  httpDataKelas;
  ngOnInit(){
    // this.http.get('http://localhost:3000/users')
    // .subscribe(data=>{
    //   console.log(data);
    //   this.httpDataPenguna=data['values'];
    //   // this.displaydata(data['values']);
    // })
    // this.http.get('http://localhost:3001/matakuliah')
    // .subscribe(data=>{
    //   console.log(data);
    //   this.httpDataMatakuliah=data['values'];
    //   //this.displaydata(data);
    // })
    // this.http.get('http://localhost:3002/kelas')
    // .subscribe(data=>{
    //   console.log(data);
    //   this.httpDataKelas=data['values'];
    //   //this.displaydata(data);
    // })
    this.http.get('http://13.229.213.154:3000/users')
    .subscribe(data=>{
      console.log(data);
      this.httpDataPenguna=data['values'];
      // this.displaydata(data['values']);
    })
    this.http.get('http://13.250.52.74:5000/matakuliah')
    .subscribe(data=>{
      console.log(data);
      this.httpDataMatakuliah=data['storedata'];
      //this.displaydata(data);
    })
    this.http.get('http://54.169.249.63/kelas')
    .subscribe(data=>{
      console.log(data);
      this.httpDataKelas=data['values'];
      //this.displaydata(data);
    })
  }
  displaydata(data){
    console.log(data);
    this.httpDataPenguna=data;}
  title = 'soaMmz';
}
