import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-piekelas',
  templateUrl: './piekelas.component.html',
  styleUrls: ['./piekelas.component.css']
})
export class PiekelasComponent implements OnInit {

  
  constructor(private http: HttpClient){}

  ngOnInit() {
    

/* Chart code */
// Themes begin
// Themes end

// Create chart instance
let chart = am4core.create("piekelas", am4charts.PieChart);
this.http.get('http://localhost:3002/kelas')
.subscribe(data=>{
  chart.data =data['values'];
  // this.displaydata(data['values']);
});

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "jumlah_mahasiswa";
pieSeries.dataFields.category = "nama";
pieSeries.innerRadius = am4core.percent(80);
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;


chart.legend = new am4charts.Legend();


  }

}
