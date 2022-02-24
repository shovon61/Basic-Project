import { Component, OnInit } from '@angular/core';
import { vm } from 'src/app/service/interface.vm';
import { SerService } from 'src/app/service/ser.service';


@Component({
  selector: 'app-a-c',
  templateUrl: './a-c.component.html',
  styleUrls: ['./a-c.component.css']
})
export class ACComponent implements OnInit {

  exam!:vm[];
  constructor( private ser1:SerService) { }

  ngOnInit(): void { 
    this.ser1.todos().subscribe((res: any)=> {
      this.exam= res.map((d: vm)=> {
       const data =new vm();
       data.init(d);
       return data;
      
    });
    console.log("examples", this.exam);
   })
  }
}
