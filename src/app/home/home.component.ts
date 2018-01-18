import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  records: Array<any>;
  down: boolean = false;
  col: string = 'CategoryName';
  orderDir: number;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getProducts().subscribe((resp) => {
      var arr = resp["data"];
      this.records = [];
      for (var x in arr) {
        this.records.push(arr[x]);
      }
    });
  }

}
