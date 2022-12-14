import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit{

  // @Output() public diceValue = new EventEmitter<MouseEvent>();
  
  stop:boolean=false;
  isStop(){
     return this.stop;
  }

  


  constructor(private l : LogicService){
       
  } 
  
  @Output() pointa = new EventEmitter();
  @Output() pointb = new EventEmitter(); 


   yourturn : number =0;
   
   p1ipos : number =9;
   p1jpos : number =0;
   r : number =1;
   playeripoints :number =1;

  //  playerpoints : number ='';

   baseFun(){     
        let randNum = Math.floor(Math.random()*6)+1;
        this.yourturn = randNum;
        this.l.btStop(false);
        this.stop=true;
        // this.l.bluntLogic(this.p1ipos,this.p1jpos,this.r);
        this.l.bluntLogic(this.p1ipos,this.p1jpos,this.r,this.yourturn,this.playeripoints);
        this.p1ipos=this.l.p1;
        this.p1jpos=this.l.p2;
        this.r=this.l.row;
        this.playeripoints=this.l.pointspa;
        this.pointa.emit(this.p1ipos);
        this.pointb.emit(this.p1jpos);

        if(this.p1ipos==8 && this.p1jpos==3){ 
          this.p1ipos=5;     
          this.p1jpos=4;
         //  this.row=5;
         // if(this.p1==5&&this.p2==4){
           this.playeripoints=45;
           this.r=5;
          //  continue;
         }   
         // this.pointspab=45;
         // console.log(this.p1,this.p2);
     //    console.log("ladder")
           
   // }

   if(this.p1ipos==3 && this.p1jpos==8){
         this.p1jpos=6;
         this.p1ipos=0;
         this.r=10;
         this.playeripoints=95;
       //  console.log("ladder")
        //  continue;
   }

   if(this.p1ipos==3 && this.p1jpos==6){
        this.p1jpos=7;
        this.p1ipos=6;
        this.r=4;
        this.playeripoints=33;
       // console.log("snake")

        // continue;
   }

    if(this.p1ipos==2 && this.p1jpos==0){
        this.p1jpos=1;
       this.p1ipos=5;
        this.r=5;
       this.playeripoints=42; 
      // console.log("snake")

      //  continue;
       }  
        // this.playerpoints=this.l.points;
   }


    ngOnInit():void{
      this.l.buttonStop.subscribe((val)=>{
        this.stop=val;
      })
      this.pointa.emit(this.p1ipos);
      this.pointb.emit(this.p1jpos); 
    }





}
