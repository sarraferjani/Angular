import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightHelperService } from 'src/app/components/helper/flight/flight-helper.service';
import { Room } from 'src/app/components/models/Room';
import { BlockService } from 'src/app/components/shared/services/block.service';
import { RoomService } from 'src/app/components/shared/services/room.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  rooms: Room[] = [];
  room: Room = new Room();
  idB : any ;
  blockNames :any;
  id : any;

  // myForm!: FormGroup;
  // form !: FormGroup;
  // idR !: number;
  constructor(private roomservice: RoomService, private route: ActivatedRoute, private router: Router,
    private block: BlockService) { }

  ngOnInit(): void {
    this.getnames();
    // this.route.paramMap.subscribe(data => {
    //   this.idR = Number(data.get('idR'))}
    // )
  }
    // public AjouterRoometAffecterToBlock(): void {
    //    const idB=1 ;
    //   this.roomservice.AjouterRoometAffecterToBlock(this.room.idB).subscribe(res => {
        
    //   this.room.idB= idB;
    //       if (res) {
  
    //           console.log({severity: 'success', summary: 'Sucess', detail: 'Operation effectued'});
              

              
    //         }
    //         else{
    //           (error: HttpErrorResponse) => {
    //             console.log({severity: 'error', summary: 'Error', detail: 'Operation not effectued'});
    //             console.log(error);
    //           }
    //         }

  
    //     },
        
    //   );
    //   this.router.navigate(['/car-grid-left'])
  
    // }
    public onAddRoom(): void {
      this.block.getBlockbname(this.room.blockname).subscribe((res :any) => {
        this.id=res;
        console.log(this.id);
        console.log(this.room);
       
        
      this.roomservice.AjouterRoometAffecterToBlock(this.room,this.id.idB).subscribe(res => {
        if (res) {

            console.log({severity: 'success', summary: 'Sucess', detail: 'Operation effectued'});
            

            
          }
          else{
            (error: HttpErrorResponse) => {
              console.log({severity: 'error', summary: 'Error', detail: 'Operation not effectued'});
              console.log(error);
            }
          }


      },
      
    );
      });
      
      
  
    }

    public getnames(){
      this.block.getBlockbn().subscribe((response: any) =>
        this.blockNames = response);
    }
}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { RoomService } from 'src/app/components/shared/services/room.service';
// import { error } from 'console';
// import { Room } from 'src/app/components/models/Room';

// @Component({
//  selector: 'app-flight-booking',
//    templateUrl: './flight-booking.component.html',
// styleUrls: ['./flight-booking.component.css']
// })
// export class MyComponent implements OnInit {
//   room: Room = new Room();
//   blockId: any;
//   roomId: any;
 

//   constructor(private route: ActivatedRoute, private myService: RoomService) { }

//   ngOnInit(): void {
//     this.roomId = this.route.snapshot.params.roomId;
//     this.blockId = this.route.snapshot.params.blockId;
//   }

//   assignRoomToBlock(): void {
//     this.myService.AjouterRoometAffecterToBlock(this.roomId).subscribe(
//       () => {
//         console.log('Room assigned to block');
//       },
//       (error: any) => {
//         console.error('Error assigning room to block', error);
//       }
//     );
//   }

// }

