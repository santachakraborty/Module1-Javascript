//  const $tiles = $('.tile').on('click', (event)=>{
//       $(event.currentTarget).toggleClass('active')  
//     })

const tiles = document.getElementsByClassName("tile")
// const tiles = document.getElementsByClassName("question")

for (let i = 0; i < tiles.length; i++) {

  tiles[i].addEventListener('click', (event) => {

    let classes = event.target.classList
  
    if (classes.contains('active'))
      event.target.classList.remove('active')
    else 
      event.target.classList.add('active')

  })
}








const toggleActive = () => {
  console.log('toggleactive')
}

//let val=document.getElementById("btn").value;
//alert(val);





class Team {
  constructor(name, element){
      this.name = name;
      this.score = 0;
      //lets assign the element to each Team instance
      this.element = element;
  }
  //what does the score board do?
  //it increases the score based on pointvalue
  increaseScore(pointValue){
   // this.score = this.score + pointValue;

   this.score += pointValue;
   //now it will allow us to grab the first element and input the score as the text
   this.element.children[0].innerText = this.score
   console.log(pointValue)
  }

  decreaseScore(pointValue){
      this.score -= pointValue;
      this.element.children[0].innerText = this.score
  }

  setup(){
      //select your 2nd child because thats your btn
      console.log(this.element.children[1])
      this.element.children[1].addEventListener('click', () => {
          this.increaseScore(100)
      })
      
      this.element.children[2].addEventListener('click', () => {
          this.decreaseScore(100)
      })
      //remember to call these methods when you instantiate the class
      return this;
  }

}


  const team1 = new Team('team1', document.getElementById('team1'))
  const team2 = new Team('team2', document.getElementById('team2'))
  const team3 = new Team('team3', document.getElementById('team3'))
  
  team1.setup()
  team2.setup()
  team3.setup()
  
  console.log(team1.element)


//..............
var button1=document.getElementById("btn1");
button1.addEventListener("click",() =>{
  document.getElementById("answer1").innerHTML="Javascript is a front-end scripting language";
})

var button2=document.getElementById("btn2");
button2.addEventListener("click",() =>{
  document.getElementById("answer2").innerHTML="The span tag is used for adding color on text, background on text or to highlight any color text";
})

var button3=document.getElementById("btn3");
button3.addEventListener("click",() =>{
  document.getElementById("answer3").innerHTML="Cascading Style sheet."
})

var button4=document.getElementById("btn4");
button4.addEventListener("click",() =>{
  document.getElementById("answer4").innerHTML="Events are things that happen to HTML elements.";
})

var button5=document.getElementById("btn5");
button5.addEventListener("click",() =>{
  document.getElementById("answer5").innerHTML="constructor is useful when you want to create multiple similar objects with the same properties and methods."
})

var button6=document.getElementById("btn6");
button6.addEventListener("click",() =>{
  document.getElementById("answer6").innerHTML="alert('Hello World')";
})

var button7=document.getElementById("btn7");
button7.addEventListener("click",() =>{
  document.getElementById("answer7").innerHTML="alt"
})

var button8=document.getElementById("btn8");
button8.addEventListener("click",() =>{
  document.getElementById("answer8").innerHTML="background-color";
})

var button9=document.getElementById("btn9");
button9.addEventListener("click",() =>{
  document.getElementById("answer9").innerHTML="element.addEventListener()";
})

var button10=document.getElementById("btn10");
button10.addEventListener("click",() =>{
  document.getElementById("answer10").innerHTML="a class is a blueprint for creating objects";
})
