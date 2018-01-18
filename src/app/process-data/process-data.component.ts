import { Component } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-process-data',
  templateUrl: './process-data.component.html',
  providers: [DataService],
  styleUrls: ['./process-data.component.css']
})
export class ProcessDataComponent  {

  records: Array<any>;
  processedRecords: Array<any>;

  constructor(private dataservice: DataService) {
    this.dataservice.getProducts().subscribe((resp) => {
      // this.items = resp["data"];
      var arr = resp["data"];
      this.records = [];
      for (var x in arr) {
        this.records.push(arr[x]);
      }
      this.processData(this.records);
    });

  }

  processData(records: Array<any>){
    let names = []
    for(var i in records) {
      var name = records[i].name;
      //console.log(name);
      if (names.indexOf(name) < 0) {
        names.push(records[i].name);
      }
    }

    names.sort();

    this.processedRecords = [];

    for(var i in names){
      var obj = {};
      obj["name"] = names[i];
      obj["C1"] = "--";
      obj["C2"] = "--";
      obj["C3"] = "--";
      for(var j in records) {
        if (records[j].name == names[i]) {
          obj[records[j].category] = records[j].amount;
        }
      }
      this.processedRecords.push(obj);
    }

    console.log(names);
  }

}
