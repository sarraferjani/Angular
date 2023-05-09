// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CarHelperService } from 'src/app/components/helper/cars/car-helper.service';
// import { Block } from 'src/app/components/models/Block';
// import { BlockService } from 'src/app/components/shared/services/block.service';

// @Component({
//   selector: 'app-content',
//   templateUrl: './content.component.html',
//   styleUrls: ['./content.component.css']
// })
// export class ContentComponent implements OnInit {
  
//   public  blocks : Block[] = [];
//   block: Block = new Block();
//   idB!:any;


//   constructor(private blockService : BlockService,private route: ActivatedRoute) {}

//   ngOnInit(){
//     /*this.route.paramMap.subscribe(params => {
//       this.idR = +params.get('idR');
//       this.updateRoom(this.room, this.idR);
//     });*/
  
//   }
//   updateBlock(block:Block,idB: any){
//     this.blockService.updateBlock(block,idB);
//     console.log(this.blockService)
//   }
 

// }