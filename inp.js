var array=[{
   triangles:null,
   totalarea:null,
   triangleActive:null,
   a:null,
   b:null,
   c:null,
   randomarea:null,
   trianglename:0,
   area:0

}]
var tno=1
 var trichecker=0;
 var tri2=0;
 var trichecker1=1;
 var tri1=0;   
 var i=0
 var tridata=0
 var total=0
 var s1=0
var s2=0 
var r1=0
var r2=0
var c1=0
var c2=0

class data{
constructor(){}
   tn(){
    fill(0)
    textSize(20)
    text ("Triangle"+tno,60,100)
   array[0].triangles= tridata;
  array[0].triangleActive= tno;
   if(tno===array[0].triangles){
    array[0].a=a
    array[0].b=b
    array[0].c=c
    array[0].randomarea=rarea
   }
if(calc===true){
textSize(20)
  fill(255)
  text (s1+"."+s2,300,300)
  text (c1+"."+c2,300,320)
  text (r1+"."+r2,300,340)
}
  
  if(calc===true){
   text("area=",230,300)
   text("cent=",230,320)
   text("r=",230,340)
  }
     
   }


}