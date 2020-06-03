class peice{
  
 constructor(){
  this.time = 0;
  this.delay=500;
  this.x = 150;
  this.size = 30;
  this.y = 30;
  this.rightmost=0;
  this.leftmost=0;
  this.bottom = 0;
  this.low = false;
  this.peiceArray = new Array
	(1, 0, 0,
	 1, 1, 0,
	 0, 1, 0, 
	 
	 0, 1, 0, 
	 1, 1, 0, 
	 1, 0, 0, 
	 
	 1, 1, 0, 
	 1, 1, 0,
	 0, 0, 0, 
	 
	 0, 1, 0,
	 1, 1, 1, 
	 0, 0, 0,
	 
	 1, 0, 0, 
	 1, 1, 1, 
	 0, 0, 0, 
	 
	 0, 0, 1, 
	 1, 1, 1, 
	 0, 0, 0	);  
  this.values = [] ;
  let longPeice = new Array(1, 1, 1, 1);
  this.peice_id = floor(random(0, 6))*9;
  console.log(this.peice_id);
   for(var i = 0;i<9;i++){
     this.values[i]  = this.peiceArray[this.peice_id+i]
 } 
 }	
	
	create(){
		
		if(this.peice_id/9 <6){
      if(this.values[2]==1 || this.values[5] ==1 ||this.values[8] ==1){
    	this.rightmost = true; 
   		}
      else{this.rightmost = false;}
			if(this.values[0]==1 || this.values[3] ==1 ||this.values[6] ==1){
    	this.leftmost = true; 
   		}
      else{this.leftmost = false;}
      if(this.values[6]==1 || this.values[7] ==1 ||this.values[7] ==1){
    	this.bottom = true; 
   		}
      else{this.bottom = false;}
			for(var i = 0;i<9;i++){
				if(this.values[i]==1){
					if((this.peice_id/9)==0){
           fill(0, 255, 0);
          }
          if((this.peice_id/9)==1){
           fill(255, 0, 0);
          }
          if((this.peice_id/9)==2){
           fill(0, 0, 255);
          }
          if((this.peice_id/9)==3){
           fill(0, 255, 255);
          }
          if((this.peice_id/9)==4){
           fill(255, 255, 0);
          }
          if((this.peice_id/9)==5){
           fill(255, 0, 255);
          }
					rect(this.x+(i%3)*this.size, this.y+(floor(i/3))*this.size, this.size, this.size);	
				}	
			}
		}
	}
  rotate(dir){
    if((this.peice_id/9) !=2){
    let newArr = [];
    if(dir==1){
      newArr[0] = this.values[6];
      newArr[1] = this.values[3];
      newArr[2] = this.values[0];
      newArr[3] = this.values[7];
      newArr[4] = this.values[4];
      newArr[5] = this.values[1];
      newArr[6] = this.values[8];
      newArr[7] = this.values[5];
      newArr[8] = this.values[2];
    }
    else{
     	newArr[0] = this.values[2];
      newArr[1] = this.values[5];
      newArr[2] = this.values[8];
      newArr[3] = this.values[1];
      newArr[4] = this.values[4];
      newArr[5] = this.values[7];
      newArr[6] = this.values[0];
      newArr[7] = this.values[3];
      newArr[8] = this.values[6];
    }
    for(var i = 0;i<9;i++){
     	this.values[i] = newArr[i]; 
      
    }
  }
  }
  move(dir){
    let difference = 0;
    let difference1 = 0;
    if(!this.rightmost){
     difference = 30; 
    }
    if(!this.leftmost){
     difference1 = 30; 
    }

     	 
    
    
    if(dir==1  && this.x!=210+difference){
     this.x+=30;
    }
    if(dir==-1&& this.x!=0-difference1){
     	this.x-=30; 
    }
  }
	drop(){
    let difference = 0;
    if(this.bottom){
     difference = 30; 
    }
    if(this.y<450-difference){
      this.y+=30; 
     }
    
    console.log(this.y);
  }
  update(){
    let difference = 0;
    if(this.bottom){
     difference = 30; 
    }
   	 if((millis()-this.time>this.delay)&& this.y<450-difference){
      	this.y+=30;
       this.time = millis();
     }
    if(this.y==450-difference){
      this.low = true;
    }
  }
  
	add_to_array(){
    
    
    return this.values;
    
  }



  
  
}