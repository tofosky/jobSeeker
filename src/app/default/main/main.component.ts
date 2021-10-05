import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/job/job.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiService:JobService, private SpinnerService: NgxSpinnerService) { }
    datas:any= [];
    totalJobs: any;
    term:string = ""
  
  ngOnInit() {
   // this.SpinnerService.show(); 
    this.datas = JSON.parse(localStorage.getItem('jobs')!);
    // return this.apiService.getJobs().subscribe(data => {
    //   this.datas = data.result;
     localStorage.setItem('jobs', JSON.stringify(this.datas));
     this.totalJobs = this.datas.length;
    // this.SpinnerService.hide(); 
    //})  
  }
  
    

}
