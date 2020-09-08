var colours=new Array("#000000","#111111","#222222","#333333","#444444",
"#555555","#666666","#777777","#888888","#999999","#aaaaaa",
"#bbbbbb","#cccccc","#dddddd","#eeeeee","#ffffff");
var colours1=new Array("#ff0000","#bfff00","#00ff80","#0040ff","#ff00ff","#ff4000","#80ff00","#00ffbf","#0000ff",
"#ff0080","#ff8000","#40ff00","#00ffff","#4000ff","#ff0040","#ffbf00","#00ff00","#00bfff",
"#8000ff","","#ffff00","#00ff40","#0080ff","#bf00ff","#ff0000",);
var colcount=0;
var colcount1=1;
var col=0;
var col1=0;
function changebgcolor(){
colcount1=colcount1+1;
var x=parseInt(colcount1/(colours.length));
if(x%2==0){
colcount=colcount+1;
document.getElementById('body').style.backgroundColor=colours[colcount];
}
else{
colcount=colcount-1;
document.getElementById('body').style.backgroundColor=colours[colcount];
}
}


function changebgcolor1(){
col1=col1+1;
var x=parseInt(col1/(colours1.length));
if(x%2==0){
col=col+1;
document.getElementById('body').style.backgroundColor=colours1[col];
}
else{
col=col-1;
document.getElementById('body').style.backgroundColor=colours1[col];
}
}
var cx;
var cx1;


function stopit(){
document.getElementById('image1').style.opacity=0;
document.getElementById('image2').style.opacity=0;
cx=setInterval(changebgcolor1,(800*Math.random()));
clearInterval(cx1);

}
function stopit1(){
document.getElementById('image1').style.opacity=0;
document.getElementById('image2').style.opacity=0;
cx1=setInterval(changebgcolor,50);
clearInterval(cx);

}
function stop(){
clearInterval(cx1);
clearInterval(cx);
}

function reset(){
clearInterval(cx1);
clearInterval(cx);
document.getElementById('body').setAttribute("style","background-color:#ffcc99;");
document.getElementById('image1').style.opacity=1;
document.getElementById('image2').style.opacity=1;


}


var count=0;
function upload(){
var x=document.getElementById('file');
var len=x.value.length;
var str1=x.value;
//alert(x.path);
var str2=new Array();
if(str1[0]=='C'){
for(i=0;i<len-12;i++){
str2[i]=str1[i+12];
}
var str3=str2.join("");
document.getElementById('video').src=str3;}
document.getElementById('option2').value=arr[count];


}

var arr=new Array("Yeh Raaten Yeh Mausam Sanam ft. Simran Sehgal.mp4","O Mere Dil Ke Chain - Indipop Band SANAM (2015) - Kishore Kumar.mp4",
"Aap Ki Nazron Ne Samjha _ Sanam_HD.mp4","Mere Sapno Ki Rani _ Sanam_HD.mp4","Ek Ladki Ko Dekha (Acoustic) _ Sanam_HD-1.mp4","Pal Pal Dil Ke Paas _ Sanam_HD.mp4");
arr.push("Leave Out All The Rest (Official Video) - Linkin Park.mp4");
arr.push("What I've Done (Official Video) - Linkin Park.mp4");
arr.push("What I've Done (Official Video) - Linkin Park (2).mp4");
arr.push("Numb (Official Video) - Linkin Park.mp4");
arr.push("Breaking The Habit (Official Video) - Linkin Park.mp4");
arr.push("Papercut (Official Video) - Linkin Park.mp4");
arr.push("Faint (Official Video) - Linkin Park.mp4");
arr.push("New Divide (Official Video) - Linkin Park.mp4");
arr.push("Somewhere I Belong (Official Video) - Linkin Park.mp4");
arr.push("Crawling (Official Video) - Linkin Park.mp4");
arr.push("Lost In The Echo (Official Video) - Linkin Park.mp4");
arr.push("Poets of the Fall - Carnival of Rust (Official Video).mp4");
arr.push("Heavy (Official Video) - Linkin Park (feat. Kiiara).mp4");
arr.push("Battle Symphony (Official Lyric Video) - Linkin Park.mp4");
arr.push("Good Goodbye (Official Video) - Linkin Park (feat. Pusha T and Stormzy).mp4");
arr.push("Green Day   Boulevard Of Broken Dreams    [Officia.mp4");
arr.push("Burn It Down (Official Video)   Linkin Park.mp4");
arr.push("Castle of Glass (Official Video) - Linkin Park.mp4");
function next(){
count=count+1;
if(count==arr.length)
count=0;
document.getElementById('video').src=arr[count];
document.getElementById('option2').value=document.getElementById('video').currentSrc;
}
function prev(){
count=count-1;
if(count==-1)
count=arr.length-1;
document.getElementById('video').src=arr[count];
document.getElementById('option2').value=arr[count];
}
function changeall()
{ var layout=document.getElementById('option').value;
if (layout=="L1")
{document.getElementById('option').setAttribute("style","border-radius:0%;");
document.getElementById('option1').setAttribute("style","border-radius:0%;");
document.getElementById('option2').setAttribute("style","border-radius:0%;");
document.getElementById('custom').setAttribute("style","border-radius:0%;");
document.getElementById('custom1').setAttribute("style","border-radius:0%;");
document.getElementById('but').setAttribute("style","border-radius:0%;");}

if(layout=="L2"){document.getElementById('option').setAttribute("style","border-radius:30%;");
document.getElementById('option1').setAttribute("style","border-radius:30%;");
document.getElementById('option2').setAttribute("style","border-radius:30%;");
document.getElementById('custom').setAttribute("style","border-radius:30%;");
document.getElementById('custom1').setAttribute("style","border-radius:30%;");
document.getElementById('but').setAttribute("style","border-radius:30%;");}
if(layout=="L3"){document.getElementById('option').setAttribute("style","border-radius:50%;");
document.getElementById('option1').setAttribute("style","border-radius:50%;");
document.getElementById('option2').setAttribute("style","border-radius:50%;");
document.getElementById('custom').setAttribute("style","border-radius:50%;");
document.getElementById('custom1').setAttribute("style","border-radius:50%;");
document.getElementById('but').setAttribute("style","border-radius:50%;");}
if(layout=="L4"){document.getElementById('option').setAttribute("style","border-radius:50% 50% 0% 0%;");
document.getElementById('option1').setAttribute("style","border-radius:50% 50% 0% 0%;");
document.getElementById('option2').setAttribute("style","border-radius:50% 50% 0% 0%;");
document.getElementById('custom').setAttribute("style","border-radius:50% 50% 0% 0%;");
document.getElementById('custom1').setAttribute("style","border-radius:50% 50% 0% 0%;");
document.getElementById('but').setAttribute("style","border-radius:50% 50% 0% 0%;");}
}
function change(){
var layout=document.getElementById('option').value;
if (layout=="L1")
{document.getElementById('video').setAttribute("style","border-radius:0%;");}
if (layout=="L2")
{document.getElementById('video').setAttribute("style","border-radius:30%;");}
if (layout=="L3")
{document.getElementById('video').setAttribute("style","border-radius:50%;");}
if (layout=="L4")
{document.getElementById('video').setAttribute("style","border-radius:50% 50% 0% 0%;");}

}
function custom()
{
var a=prompt("Enter values:","");
document.getElementById('video').style.borderRadius=a;
changeall();
}
function change1(){
var position=document.getElementById('option1').value;
if (position=="Left")
{document.getElementById('video').setAttribute("style","position:relative;left:10px;");
document.getElementById('image1').setAttribute("style","left:100px;");
document.getElementById('image2').setAttribute("style","left:820px;");
document.getElementById('lay').setAttribute("style","left:1095px;top:-300px;");
document.getElementById('posi').setAttribute("style","left:1095px;top:-460px;");}
if (position=="Center")
{document.getElementById('video').setAttribute("style","position:relative;left:14.5%;");
document.getElementById('image1').setAttribute("style","left:240px;");
document.getElementById('image2').setAttribute("style","left:990px;");
document.getElementById('lay').setAttribute("style","left:50px;top:-400px;");
document.getElementById('posi').setAttribute("style","top:-460px;left:1122px;");}

if (position=="Right")
{document.getElementById('video').setAttribute("style","position:relative;left:28%;");
document.getElementById('image1').setAttribute("style","left:400px;");
document.getElementById('image2').setAttribute("style","left:1160px;");
document.getElementById('posi').setAttribute("style","left:50px;top:-400px;");
document.getElementById('lay').setAttribute("style","left:50px;top:-400px;");}


}
function custom1()
{
var h=prompt("Enter height:","");
var w=prompt("Enter width:","");
document.getElementById('video').style.height=h;
document.getElementById('video').style.width=w;

}
function change2(){
var song=document.getElementById('option2').value;
if (song=="1")
{document.getElementById('video').src=arr[0];}
if (song=="2")
{document.getElementById('video').src=arr[1];}
if (song=="3")
{document.getElementById('video').src=arr[2];}
if (song=="4")
{document.getElementById('video').src=arr[3];}
if (song=="5")
{document.getElementById('video').src=arr[4];}
if (song=="6")
{document.getElementById('video').src=arr[5];}
if (song=="7")
{document.getElementById('video').src=arr[6];}
if (song=="8")
{document.getElementById('video').src=arr[7];}
if (song=="9")
{document.getElementById('video').src=arr[8];}
if (song=="10")
{document.getElementById('video').src=arr[9];}
if (song=="11")
{document.getElementById('video').src=arr[10];}
if (song=="12")
{document.getElementById('video').src=arr[11];}
if (song=="13")
{document.getElementById('video').src=arr[12];}
if (song=="14")
{document.getElementById('video').src=arr[13];}
if (song=="15")
{document.getElementById('video').src=arr[14];}
if (song=="16")
{document.getElementById('video').src=arr[15];}
if (song=="17")
{document.getElementById('video').src=arr[16];}
if (song=="18")
{document.getElementById('video').src=arr[17];}
if (song=="19")
{document.getElementById('video').src=arr[18];}
if (song=="20")
{document.getElementById('video').src=arr[19];}
if (song=="21")
{document.getElementById('video').src=arr[20];}
if (song=="22")
{document.getElementById('video').src=arr[21];}
if (song=="23")
{document.getElementById('video').src=arr[22];}
if (song=="24")
{document.getElementById('video').src=arr[23];}
}
var circlecount=0;
function changecircle(){

circlecount=circlecount+1;
document.getElementById('circle1').style.top=(-740+((1*circlecount)%200));

document.getElementById('circle2').style.top=(-780+((2*circlecount)%250));

document.getElementById('circle3').style.top=(-750+((1*circlecount)%300));

document.getElementById('circle4').style.top=(-800+((1.5*circlecount)%300));

}
//setInterval(changecircle,20);
function changecirclecolor(){
x=parseInt(100*Math.random());
y=x%21;
document.getElementById('circle1').style.fill=colours1[y+3];document.getElementById('circle1').style.stroke=colours1[y+3];
document.getElementById('circle1').style.stroke=colours1[y+2];
document.getElementById('circle2').style.fill=colours1[y];
document.getElementById('circle2').style.stroke=colours1[y+1];
document.getElementById('circle3').style.fill=colours1[y+2];
document.getElementById('circle3').style.stroke=colours1[y+3];
document.getElementById('circle4').style.fill=colours1[y+1];
document.getElementById('circle4').style.stroke=colours1[y];
}
setInterval(changecirclecolor,500);
var hidecount=0;
function hideall(){

hidecount=hidecount+1;
if(hidecount%2==1){

//document.getElementById('image1').style.opacity=0;
//document.getElementById('image2').style.opacity=0;
document.getElementById('option2').style.opacity=0;
document.getElementById('prev1').style.opacity=0;
document.getElementById('next1').style.opacity=0;
document.getElementById('option').style.opacity=0;
document.getElementById('option1').style.opacity=0;
document.getElementById('custom').style.opacity=0;
document.getElementById('custom1').style.opacity=0;
document.getElementById('file').style.opacity=0;
document.getElementById('play').style.opacity=0;
document.getElementById('bg1').style.opacity=0;
document.getElementById('bg2').style.opacity=0;
document.getElementById('stop').style.opacity=0;
document.getElementById('reset').style.opacity=0;
document.getElementById('hide').value="Show all Buttons";

//document.getElementById('video').setAttribute("style","top:40px;");
//change();
//document.getElementById('video').setAttribute("style","top:40px;");
}
else{

//document.getElementById('image1').style.opacity=1;
//document.getElementById('image2').style.opacity=1;
document.getElementById('option2').style.opacity=1;
document.getElementById('prev1').style.opacity=1;
document.getElementById('next1').style.opacity=1;
document.getElementById('option').style.opacity=1;
document.getElementById('option1').style.opacity=1;
document.getElementById('custom').style.opacity=1;
document.getElementById('custom1').style.opacity=1;
document.getElementById('file').style.opacity=1;
document.getElementById('play').style.opacity=1;
document.getElementById('bg1').style.opacity=1;
document.getElementById('bg2').style.opacity=1;
document.getElementById('stop').style.opacity=1;
document.getElementById('reset').style.opacity=1;
document.getElementById('hide').value="Hide all Buttons";



//document.getElementById('video').setAttribute("style","top:0px;");
//change();
//document.getElementById('video').setAttribute("style","top:0px;");
}

}