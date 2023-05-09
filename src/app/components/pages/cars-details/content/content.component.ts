import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from 'src/app/components/models/Block';
import { Room } from 'src/app/components/models/Room';
import { RoomService } from 'src/app/components/shared/services/room.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  public  rooms : Room[] = [];
  room: Room = new Room();
  


  constructor(private roomService : RoomService,private route: ActivatedRoute) {}

  ngOnInit(){
    /*this.route.paramMap.subscribe(params => {
      this.idR = +params.get('idR');
      this.updateRoom(this.room, this.idR);
    });*/
  
  }
  updateRoom(room:Room,idR: any){
    this.roomService.updateRoom(room,idR);
    console.log(this.roomService)
  }

}

