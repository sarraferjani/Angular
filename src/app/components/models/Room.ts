import { Block } from "./Block";

export class Room{
    idR !: number;
    number !:number;
    floor !: string;
    nbrPlace !: number ;
    placesOcc !: number;
    cleaningRoom !:any;
    block !:Block ;
    blockname:any;
}