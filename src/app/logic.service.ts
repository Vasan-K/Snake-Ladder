import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor(
    // @Inject('param') private param:number,
    // @Inject('param') private param:number,
  ) { }


  buttonStop = new EventEmitter<boolean>();

  row! :number;
  limit :number=9;
  p1!:number;
  p2!:number;
  pointspa :number=1;

  // pointspab :number=1;
  // points!:number;

// snakes : number[][]=[
//     [33,67],
//     [42,80]
// ];

// ladders : number[][]=[
//      [17,45],
//      [69,95]
// ];

  btStop(data:boolean){
         this.buttonStop.emit(data);

  }
  
  bluntLogic(p1:number,p2:number,row:number,rd:number,points:number){
    // bluntLogic(p1:number,p2:number,row:number){
    this.row=row;
    this.pointspa=points;
    for(let i=0;i<rd;i++){

            if(this.row%2!=0 && p2<=this.limit){
                     p2=p2+1;
                     this.p2=p2;
                     this.p1=p1;
                     this.pointspa=this.pointspa+1;
                    //  this.pointspab=this.pointspab+1;
                    //  this.points=
                    //  console.log("Iteration"+ i); 
                    //  console.log(this.p1,this.p2);
            }

            if(this.row%2!=0 && this.p2>this.limit){
              // if(p2>this.limit){
                    this.row=this.row+1;
                    p1=p1-1;
                    p2=p2-1;
                    this.p1=p1;
                    this.p2=p2;
                    continue;
                    // console.log(this.p1ipos,this.p2jpos);
            }
 
            if(this.row%2==0 && this.p2>=0){
                    p2=p2-1;
                    this.p2=p2;
                    this.p1=p1;
                    this.pointspa=this.pointspa+1;
                    // this.pointspab=this.pointspab+1;
                    // continue;
                    // console.log("Iteration"+ i);
                    // console.log(this.p1,this.p2);
            }

            if(this.row%2==0 && this.p2<0){
                  this.row=this.row+1;
                  p1=p1-1;
                  this.p1=p1;
                  p2=0;
                  this.p2=p2;
                  // this.p2jpos=this.p2jpos+1;
                  continue;
                  // console.log(this.p1ipos,this.p2jpos);
            }

            console.log("after iteration ")
            console.log("i "+this.p1)
            console.log("j "+this.p2)
            console.log("points "+this.pointspa)
            // console.log("points player 2 "+this.pointspab)
            // const ladderstart1 = this.ladders[0][0];
            // const ladderstart2 = this.ladders[1][0];

            if(this.p1==8 && this.p2==3){ 
                   this.p1=5;     
                   this.p2=4;
                  //  this.row=5;
                  // if(this.p1==5&&this.p2==4){
                  //   this.pointspa=45;
                    // this.row=5;
                    continue;
                  }   
                  // this.pointspab=45;
                  // console.log(this.p1,this.p2);
              //    console.log("ladder")
                    
            // }

            if(this.p1==3 && this.p2==8){
                  this.p2=6;
                  this.p1=0;
                  // this.row=0;
                  // this.pointspa=95;
                //  console.log("ladder")
                  continue;
            }

            if(this.p1==3 && this.p2==6){
                 this.p2=7;
                 this.p1=6;
                //  this.row=6;
                //  this.pointspa=33;
                // console.log("snake")
   
                 continue;
            }

            if(this.p1==2 && this.p2==0){
                this.p2=1;
                this.p1=5;
                // this.row=5;
                // this.pointspa=42; 
               // console.log("snake")

                continue;
            }

      

    //   if(this.pointspa>=95){
    //              if(rd==1 &&(this.pointspa>=95 && this.pointspa<=99)){
    //               this.p2=this.p2+1;
    //               this.p1=p1;
    //               continue;
    //              }
                  
    //  if(rd==2 &&(this.pointspa>=95 && this.pointspa<=98)){
    //               this.p2=this.p2+2;
    //               this.p1=p1;
    //               continue;
    //  }
                 
    //  if(rd==3 && (this.pointspa>=95 && this.pointspa<=97)){
    //               this.p2=this.p2+3;
    //               this.p1=p1;
    //               continue;
    //  }
                  
    //  if(rd==4 && (this.pointspa>=95 && this.pointspa<=96)){
    //               this.p2=this.p2+4;
    //               this.p1=p1;
    //               continue;
    //  }
                  
    //  if(rd==5 && this.pointspa==95){
    //               this.p2=this.p2+5;
    //               this.p1=p1;
    //               continue;
    //  }
                  
    //  if(rd==6){
    //               break;
    //  }
                
      }
            
  }

 }


// }

// bluntLogic(p1:number,p2:number,row:number){

//   for (let i = 0; i <= 1; i++) {
//     //console.log ("Block statement execution no." + i);
//     if(this.row%2!=0 && p2<=this.limit){
//       p2=p2+1;
//       //console.log("iteration "+this.pj);
//       this.points=this.points+1;
//       this.p2=p2;
//       this.p1=p1;
//       //this.row=r;
//     }
//     if(this.row%2!=0 && p2>this.limit){
//       this.row=this.row+1;
//       p2=p2-1;
//       p1=p1-1;
//       this.p1=p1;
//       this.p2=p2;
//       //this.row=r;
//       continue;
//     }
//     if(this.row%2==0 && p2>=0){
//       p2=p2-1;
//       this.p1=p1;
//       this.p2=p2;
//       this.points=this.points+1;
//       //this.row=r;
//       //console.log("Even Iteration :"+this.pj);
//     }
//     if(this.row%2==0 && p2<0){
//       this.row=this.row+1;
//       p1=p1-1;
//       p2=0;
//       this.p1=p1;
//       this.p2=p2;
//       //this.row=r;
//       continue;
//     }
//     console.log("Iteration :"+i);
//     console.log(p1);
//     console.log(p2);
//     //console.log(r);
//   }

// }


  
