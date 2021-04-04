alert("welcom to my bage");
var name = prompt("please enter your name", "your name");
console.log(name);
alert("thank you for visiting our page " + name);
var dsg = prompt("are you a student " + name + "??", "yes or no");
console.log(dsg);
if (dsg === "yes") {
    alert("welcome abored to this usful page !");
}
else {
    alert("you are missing alot of study");
}
var password = prompt('please enter you password');
while (password !== 'pass'){
    password = prompt('your password is wrong please try agin');
}
   

var numOfSub = prompt("plese enter number of subject");
for (var i = 0; i < numOfSub; i = i + 1) {
    console.log(i);
    document.write('<img src="https://th.bing.com/th/id/R1575d0585e0a441f785fda4ecb2405d7?rik=Be2pVrx0pW3YRQ&riu=http%3a%2f%2fwww.mapsashokvihar.net%2fimages%2fsubject.jpg&ehk=q3duUHFeogbIdrNIvkPNID1WhMEdcR%2fvoI87vts2GVI%3d&risl=&pid=ImgRaw"/>');
}
var nameOfSub = prompt('please enter the name of the subject');

if (nameOfSub === 'math') {
    document.write('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flb.linkedin.com%2Fcompany%2Fmath-and-science-academy-msa&psig=AOvVaw0YZCpIX06IfIRLBqJrRzfd&ust=1617622669273000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiF7JjA5O8CFQAAAAAdAAAAABAD"/>');
}
else {
    document.write('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmakemyassignment419318342.wordpress.com%2F2021%2F01%2F07%2Fhow-to-get-better-at-physics%2F&psig=AOvVaw26BbnbAyewrRuj_sww2hI8&ust=1617623174092000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD06onC5O8CFQAAAAAdAAAAABAD"/>');

}
while (nameOfSub !== 'math' && nameOfSub !== 'physics') {
    nameOfSub = prompt('please enter the name of the subject!');
}
var numOfSub=prompt('please enter number of the subject');
for(var i=0; i<userInput;i++){
    if(userInput=='math'){
        document.write('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flb.linkedin.com%2Fcompany%2Fmath-and-science-academy-msa&psig=AOvVaw0YZCpIX06IfIRLBqJrRzfd&ust=1617622669273000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiF7JjA5O8CFQAAAAAdAAAAABAD"/>');

    }
    else{
        document.write('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmakemyassignment419318342.wordpress.com%2F2021%2F01%2F07%2Fhow-to-get-better-at-physics%2F&psig=AOvVaw26BbnbAyewrRuj_sww2hI8&ust=1617623174092000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD06onC5O8CFQAAAAAdAAAAABAD"/>');

    }
}
function printname(){ 
    console.log('class2');
}
  var parm1=0;
  var pram2=10;


for(var i=parm1;i<parm2;i++){
    console.log(i);
}
printname();




