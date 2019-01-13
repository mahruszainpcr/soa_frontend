import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-piemahasiswa',
  templateUrl: './piemahasiswa.component.html',
  styleUrls: ['./piemahasiswa.component.css']
})
export class PiemahasiswaComponent implements OnInit {
  dataVis;
  constructor(private http: HttpClient){}
  ngOnInit() {
   

/* Chart code */
// Themes begin
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.PieChart);
// console.log("Iniii");
// console.log(this.dataVis);
// // Add data
// chart.data = [{
//   country: "Teknik Informatika",
//   litres: 501.9
// }, {
//   country: "Sistem Informasi",
//   litres: 301.9
// }];
this.http.get('http://localhost:3000/vis')
.subscribe(data=>{
  console.log("iniiiiii.......");
  console.log(data);
  this.dataVis=data['values'];
  chart.data =data['values'];
  // this.displaydata(data['values']);
})
// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "jumlah_mahasiswa";
pieSeries.dataFields.category = "program_studi";
pieSeries.innerRadius = am4core.percent(80);
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;


chart.legend = new am4charts.Legend();


  }

}
