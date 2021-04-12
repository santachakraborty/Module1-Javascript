

var colors = ["blue", "orange", "red", "yellow"];
      var currentColor = 0;
      function colorChange(){

        var par=document.getElementById("p");
        var divs=p.getElementsByTagName("div");
        for(let i=0; i<divs.length;i++){
           divs[i].style.backgroundColor=colors[currentColor];
        }
           if(currentColor< colors.length-1){
              currentColor+=1;
           }else{
              currentColor=0;
           } 
   } 