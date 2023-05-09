import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { CruiseHelperService } from 'src/app/components/helper/cruise/cruise-helper.service';
import { Block } from 'src/app/components/models/Block';
import { BlockService } from 'src/app/components/shared/services/block.service';

@Component({
  selector: 'app-cruise-booking',
  templateUrl: './cruise-booking.component.html',
  styleUrls: ['./cruise-booking.component.css']
})
export class CruiseBookingComponent implements OnInit {
  
  public  blocks : Block[] = [];
  
  block !: Block;


  constructor(private blockService : BlockService,private route: ActivatedRoute,
    private _routerUp: Router) {}

  ngOnInit(){
    /*this.route.paramMap.subscribe(params => {
      this.idR = +params.get('idR');
      this.updateRoom(this.room, this.idR);
    });*/
  
  }
  updateBlock(){
    const idB = this.route.snapshot.params.id;
    this.blockService.updateBlock(this.block,idB).subscribe(data =>{
      console.log(data);
      
      
    },
    error => console.log(error)

    );
    
    
  }
  

}

