var a,b,c,n,next,previous,check,ok
var pressed,pressed1,pressed2,pressed3
var rarea,r,m
var tri="no"
var a1,a2,a3,a4,poin;
var sr,ra,cent
var cp,rp
var calc=true
var p,p1,p2,p3,p4
class Game{
  constructor(){}
 look(){

 this.t=createSprite(100,100)
 this.t.shapeColor="white"
 this.t.strokeWeight=34
 this.a=createInput("3")
 this.b=createInput("4")
 this.c=createInput("5")
 this.a.position(200,100) 
previous=createButton("previous")
.mousePressed(()  => {pressed1 = true;p1=true})
.mouseReleased(() =>{ pressed1 = false;p1=false})

next=createButton("next")
.mousePressed(()  => {pressed = true;p=true})
  .mouseReleased(() => {pressed = false;p=false});
previous.position(60,440)
next.position(360,440)
 this.b.position(200,130)
 this.c.position(200,160)
  check=createButton("check")
  .mousePressed(()=> {pressed2 = true;p2=true})
  .mouseReleased(()=>{ pressed2 = false;p2=false});
  check.position(320,210)
  ok=createButton("OK")
  .mousePressed(()=> {pressed3 = true;p3=true})
  .mouseReleased(()=> {pressed3 = false;p3=false});
  ok.position(200,210)

}

 
 value(){
 a=parseFloat(this.a.value())
 b=parseFloat(this.b.value())
 c=parseFloat(this.c.value())
if(touchIsDown(ok)||p3===true){
  pressed3=true
}
else{
  pressed3=false
}
if(touchIsDown(next)||p===true){
  pressed=true
}
else{
  pressed=false
}
if(touchIsDown(check)||p2===true){
  pressed2=true
}
else{
  pressed2=false
}
if(touchIsDown(previous)||p1===true){
  pressed1=true
}
else{
  pressed1=false
}
 } 
 find(){
    m=(a/2)+(b/2)+(c/2)
  r=(m*(m-a)*(m-b)*(m-c))
  rarea=sqrt(r)
  //decimals
  var marea=Math.round(rarea)
 var  e=str(rarea)
   sr =e.split(".")
  //is it a trianglem
  if(calc===true){if(a>0&&b>0&&c)
   {a1=true}
   else{ a1=false}
   if((a+b)>c) 
   {a2=true}
   else{a2=false}
   if((b+c)>a)
   {a3=true}
   else{a3=false}
   if((c+a)>b)
   { a4=true}
   else{a4=false}

 if(a1===true&&a2===true&&a3===true&&a4===true){
     tri="sr"
 }
 else{
     tri=1
 }}
  //decimals
 if(rarea!==marea&&tri==="sr"){
  sry=1
  poin=sr[1].slice(0,3)
}
else{
    poin=0
}
 // other values
var rcent=rarea/40.47
var rra= rarea/100
var mcent=Math.round(rcent)
var mra=Math.round(rra)
var ce=str(rcent)
var re =str(rra)
ra=re.split(".")
 cent=ce.split(".")

//slicing string
if(rcent!==mcent&&tri==="sr"){

cp=cent[1].slice(0,3)
}
else{
cp=0
}
if(rra!==mra&&tri==="sr"){

rp=ra[1].slice(0,3)
}
else{
rp=0
}
//textarea
if(calc===false){
  //textarea
  var crtr=(array[0].totalarea/40.47)+(array[0].randomarea/40.47);
  //var crtr=0.22345
  var d21=parseFloat(crtr)
  var cmtr=Math.round(d21);
  var cr1=str(crtr);
  var tccet=cr1.split(".");
  var tpc
   
  if(crtr!==cmtr){
    tpc=tccet[1].slice(0,3)}else{tpc=0}

//r
var rtr=(array[0].totalarea/100)+(array[0].randomarea/100);
var mtr=Math.round(rtr);
var cr=str(rtr);
var tcet=cr.split(".");
var tp

if(rtr!==mtr){tp=tcet[1].slice(0,3)}else{tp=0}

//area
var tarea=array[0].totalarea+array[0].randomarea;
var mtarea=Math.round(tarea);
var ca=str(tarea);
var tcat=ca.split(".");
var tc

if(tarea!==mtarea){tc=tcat[1].slice(0,3)}else{tc=0}

 text("totalArea="+tcat[0]    +"."+tc ,230,300)
 text("TotalCent="+tccet[0] +"."+tpc,230,320)
 text("Totalr="   +tcet[0]    +"."+tp ,230,340)}
  
 }
}    

