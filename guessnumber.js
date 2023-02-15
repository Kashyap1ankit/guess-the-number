let score = 20;

       let highscore = 0;

       let sceretNumber = Math.trunc(Math.random()*20)+1;

       

       document.querySelector('.check').addEventListener('click' , function(){
   
         const guess = Number(document.querySelector('.enter').value);

         if(!guess){

         	document.querySelector('.message').textContent='UFF! Invalid Number'
         }

         else if(guess===sceretNumber){
              
              document.querySelector('.message').textContent ='🔥CONGRATS! You Guessed Right Number';

              document.querySelector('.answer').textContent= sceretNumber;

              document.querySelector('body').style.backgroundColor ='Green';

              if(score>highscore) {
                highscore = score;
              	document.querySelector('.highscore').textContent = highscore;

              }

           

         }



         	else if(guess>sceretNumber){

         		if(score>1){

                document.querySelector('.message').textContent = '😳TOO HIGH MAN..';
         	    score-- ;
         	    document.querySelector('.score').textContent = score;


         		}

         		else{
             
         	    document.querySelector('.message').textContent = '😔You Lost All The Chances......';
         	    document.querySelector('.score').textContent = 0;
                }

         	
         }

         else if(guess<sceretNumber){

         	if(score>1){

                document.querySelector('.message').textContent = '😑TOO LOW MAN..';
         	    score-- ;
         	    document.querySelector('.score').textContent = score;

         		}

        
         else{
             
         	document.querySelector('.message').textContent = '😔You Lost All The Chances......';
         	document.querySelector('.score').textContent = 0;
         }

       }

        })


       document.querySelector('.Again').addEventListener('click' , function(){

       	score = 20;
        sceretNumber = Math.trunc(Math.random()*20)+1;

        document.querySelector('body').style.backgroundColor = 'Grey';
        document.querySelector('.answer').textContent = '?';
        document.querySelector('.message').textContent ='';
        document.querySelector('.score').textContent = score;
        document.querySelector('.enter').value='';

       })
