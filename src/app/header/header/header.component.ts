import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/job/job.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() job!: any
  searchedKeyword: any;
  jobs: []= [];
  term:string = "";
  constructor(private jobService:JobService) { }
  ngOnInit() {
    this.jobs = JSON.parse(localStorage.getItem('jobs')!);
  }

}
