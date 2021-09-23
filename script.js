var characterLength = 8;
var choiceArr = [];

var lowerCaseArr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upperCaseArr = "A,B,C,D,E,F,G,H,I,J,K,L,M,NO,P,Q,R,S,T,U,V,W,X,Y,Z";
var specialArr = "!,@,#,$,%,^,&,*,_,";
var numbersArr = "0,1,2,3,4,5,6,7,8";







//Code
var generateBtn = document.querySelector("#generate");

//Adding event listener to the button
generateBtn.addEventListener("click" , writePassword);

//Password input
function writePassword() {
  var correctPrompts = getPrompts ();// This can be true or false
  var passwordText = document.querySelector("#password");


  if (correctPrompts){
      var newPassword = generatePassword();
      passwordText.value = newPassword;

  } else {
    passwordTest.value = "";
  }
}

//Generating Password
function generatePassword (){
  var password = "";
  for (var i = 0; i < characterLength; i++ ){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}

// Prompts
function getPrompts(){
  choiceArr = [];
  characterLength =parseInt (prompt("How many characters? (8-126 characters)"))
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 126){
    alert("Password length should be 8-126 characters!!");
    return false;
  }
  if (confirm("Would you like lower case letters in your password?")){
  choiceArr = choiceArr.concat(lowerCaseArr);
  }

if (confirm("Would you like upper case letters in your password?")){
choiceArr = choiceArr.concat(upperCaseArr);
}

if (confirm("Would you like numbers in your password?")){
choiceArr = choiceArr.concat(numbersArr);
}
if (confirm("Would you like special characters in your password?")){
  choiceArr = choiceArr.concat(specialArr);
  }
  return true;
}

