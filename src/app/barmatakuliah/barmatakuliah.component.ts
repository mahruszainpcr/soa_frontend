import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-barmatakuliah',
  templateUrl: './barmatakuliah.component.html',
  styleUrls: ['./barmatakuliah.component.css']
})
export class BarmatakuliahComponent implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit() {
    /* Chart code */
// Themes begin
// am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("barmakul", am4charts.XYChart);

// Add percent sign to all numbers
// chart.numberFormatter.numberFormat = "#.3'%'";
this.http.get('http://localhost:3001/matakuliah')
    .subscribe(data=>{
      //console.log(data);
      chart.data =data['values'];
      //this.displaydata(data);
    })
// Add data


// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "nama";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Jumlah SKS/Jam";

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "jumlah_jam";
series.dataFields.categoryX = "nama";
series.clustered = false;
series.tooltipText = "Jumlah Jam {categoryX} : [bold]{valueY}[/]";

let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "jumlah_sks";
series2.dataFields.categoryX = "nama";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Jumlah SKS {categoryX} : [bold]{valueY}[/]";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;
  }

}
