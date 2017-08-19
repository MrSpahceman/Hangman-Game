<script type="text/javascript" src="game.js">
// //This part interacts with the user
var readyToplay = confirm("are you ready to play")
{
    console.log(readyToplay);
      if(readyToplay) 
   {     alert("good luck");
   }
  else {
   // This displays when canceled    
       alert("bye");
       }
        }
// Creating my Hangman object
 var Hangman=
 {
//properties of my Hangman  
"correct word": "DOG",
//attempting to identify the correct word DOG
 LetterD:3,
 LetterO:14,
LetterG:6,
letters:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]


}
// Trying to capture keyboard input.
// doucment.onkeyup =function(event)
{
  //Attempting to alert when a correctGuess was selected
// correctGuess: function() {
  // alert("Correct letter");
}
  // var letters =String.fromCharCode(event.keyCode).toLowerCase();
  // if (letters="D"){Hangman.correctGuess();

  // }


var userText = document.getElementById("userText");

     // Key up function to track letters guesed
      document.onkeyup = function(event) {
       userText.textContent = event.key;
     };



  

</script>