import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public getPointa!:number;
  public getPointb!:number;
  public getPointi!:number;
  public getPointj!:number;

  arr =new Array();
  board(){
    let num=100;
        // creating two dimensional array
        for (let i = 0; i< 10; i++) {
            for(let j = 0; j< 10; j++) {
                this.arr[i] = [];
            }
        }
        for (let i = 0; i< 10; i++) {
          if(i%2!=0){
            for(let j =9; j>=0; j--) {
              this.arr[i][j] = num;
              num--;
          }
          }
          else{
            for(let j = 0; j< 10; j++) {
              this.arr[i][j] = num;
              num--;
          }
          }
      }
      console.log(this.arr);
      }
      ngOnInit(){
        this.board();
      }
  
     snakes : number[][]=[
         [33,67],
         [42,80]
     ];
  
     ladders : number[][]=[
          [17,45],
          [69,95]
     ];
  
     ladderMarker(l:number):boolean{
          for(let i=0;i<this.ladders.length;i++){
              for(let j=0;j<this.ladders[i].length;j++){
                        if(l==this.ladders[i][j]){
                          return true;
                        }
  
              }
          }
        return false;
     }
  
     snakesMarker(s:number):boolean{
      for(let i=0;i<this.snakes.length;i++){
          for(let j=0;j<this.snakes[i].length;j++){
                    if(s==this.snakes[i][j]){
                      return true;
                    }
  
          }
      }
    return false;
  }
 
  positionp1(po:number):boolean{
      if(po==this.arr[this.getPointa][this.getPointb]){
         return true;
      }
      return false;
  }

  positionp2(pt:number):boolean{
    if(pt==this.arr[this.getPointi][this.getPointj]){
       return true;
    }
    return false;
}
  

}
