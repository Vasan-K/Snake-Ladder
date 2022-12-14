import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit{

  @Output() pointi = new EventEmitter();
  @Output() pointj = new EventEmitter(); 

  stop:boolean=false;
  isStop(){
     return this.stop;
  }


  constructor(private l : LogicService){
       
  } 
  
   yourturn1 : number =0;

   p2ipos : number =9;
   p2jpos : number =0;
   r : number =1;
   playerjpoints : number =1;

   baseFun(){   
        let randNum = Math.floor(Math.random()*6)+1;
        this.yourturn1 = randNum;  
        this.l.btStop(false);
        this.stop=true;
        // this.l.bluntLogic(this.p2ipos,this.p2jpos,this.r);
        this.l.bluntLogic(this.p2ipos,this.p2jpos,this.r,this.yourturn1,this.playerjpoints);
        this.p2ipos=this.l.p1;
        this.p2jpos=this.l.p2;
        this.r=this.l.row;
        this.playerjpoints=this.l.pointspa;
        this.pointi.emit(this.p2ipos);
        this.pointj.emit(this.p2jpos);

        if(this.p2ipos==8 && this.p2jpos==3){ 
          this.p2ipos=5;     
          this.p2jpos=4;
         //  this.row=5;
         // if(this.p1==5&&this.p2==4){
          this.playerjpoints=45;
           this.r=5;
          //  continue;
         }   
         // this.pointspab=45;
         // console.log(this.p1,this.p2);
     //    console.log("ladder")
           
   // }

   if(this.p2ipos==3 && this.p2jpos==8){
         this.p2jpos=6;
         this.p2ipos=0;
         this.r=10;
         this.playerjpoints=95;
       //  console.log("ladder")
        //  continue;
   }

   if(this.p2ipos==3 && this.p2jpos==6){
        this.p2jpos=7;
        this.p2ipos=6;
        this.r=4;
        this.playerjpoints=33;
       // console.log("snake")

        // continue;
   }

    if(this.p2ipos==2 && this.p2jpos==0){
        this.p2jpos=1;
       this.p2ipos=5;
        this.r=5;
       this.playerjpoints=42; 
      // console.log("snake")

      //  continue;
       } 
        
   }

   ngOnInit():void{
    this.l.buttonStop.subscribe((val)=>{
      this.stop=val;
    })

    this.pointi.emit(this.p2ipos);
    this.pointj.emit(this.p2jpos);
   }

}
