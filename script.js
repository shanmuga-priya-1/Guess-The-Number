// selecting Element
var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess=3


  var randomnumber=Math.floor(Math.random()*10)+1   
  if(randomnumber>5)
  {
    randomnumber=randomnumber-5
  }
  function checkthenumber()
  {
    if(inputBox.value==randomnumber)
    {
      alert("yeah!!its right,congratulations.")
      result.textContent="You are right!"

    }
    else{
      noofguess=noofguess-1
      if(noofguess==0)
      {
        alert("oh No,you Lost..Generate Random Number is:"+randomnumber)
      }
      guesscount.textContent="Available Guesses:"+noofguess
      result.textContent="You are wrong"
    }
  }