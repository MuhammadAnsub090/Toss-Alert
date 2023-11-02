const img = document.querySelector('img')
const p = document.querySelector('p')
alert("Welcome back to your toss game")
 function masjid(){
     const randomnumber = Math.ceil(Math.random()*2);
   console.log(randomnumber)
     if(randomnumber === 1){
       p.innerHTML = 'Yes ! You won the toss';
       img.src = './assets/masjid.jpg'
       
        
     }
     else{
        p.innerHTML = 'oops You loss '
        img.src = './assets/chand.jpg'
     }
     
    }

    function chand(){
        const randomnumber = Math.ceil(Math.random()*2);
      console.log(randomnumber)
        if(randomnumber === 2){
          p.innerHTML = 'You won the toss';
          img.src = './assets/chand.jpg'
        
        }
        else{
            p.innerHTML ='oops You loss'
            img.src = './assets/masjid.jpg'
        }
       }
