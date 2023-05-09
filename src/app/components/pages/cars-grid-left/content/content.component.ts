import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarHelperService } from 'src/app/components/helper/cars/car-helper.service';
import { Block } from 'src/app/components/models/Block';
import { Room } from 'src/app/components/models/Room';
import { BlockService } from 'src/app/components/shared/services/block.service';
import { RoomService } from 'src/app/components/shared/services/room.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public  rooms : Room[] = [];
  public blocks : Block[]=[];


  constructor(private roomService : RoomService,
    private blockService : BlockService) {}

  ngOnInit(){
     this.getRoom();
     this.blockService.getBlock().subscribe(blocks =>{
      this.blocks = blocks;
     });
  
  }
  public getRoom(): void{
    this.roomService.getRoom().subscribe(
      (response) =>{
        this.rooms = response;
        console.log(this.rooms);
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
      }
    );

  }
  deleteRoom(idR: any) {
    this.roomService.deleteRoom(idR).subscribe(() => {
      this. getRoom();
    });

  }

}


