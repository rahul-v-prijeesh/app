var triprev=false
class controller{
triangle(){
  if(tridata<tno){
    tridata=tno
 }
  if(trichecker>0&&trichecker%10===0){
       trichecker=0;
       tri2=tri2+1
  }
  if(pressed===true&&tri==="sr"){
     trichecker=trichecker+1
  }else if(pressed===true&&tri!=="sr"&&calc===true){
    fill(255,0,0)
    text("type the right value",70,250)
  }
 if(tri2===1){
   tri2=0
   //if(array[tno])
    if(array.length===tno){
     
    array.push({
            trianglename:tno,
            a:a,
            b:b,
            c:c,
            area:rarea
            })
            total=total+rarea
            
  }else{
      array[tno].area=rarea
      array[tno].a=a
      array[tno].b=b
      array[tno].c=c
}
   // array[0].totalarea=total
    tno+=1
    s1=0;s2=0 ;r1=0;r2=0;c1=0; c2=0;
 }
 if(trichecker1>0&&trichecker1%10===0){
    trichecker1=0;
    tri1=tri1+1

}
 if(pressed1===true&&tno>1){
 trichecker1=trichecker1+1
}
if(tri1===1){
tri1=0
 tno-=1
 triprev=true
}
if(pressed2===true&&tri==="sr"){
 s1=sr[0]
 s2=poin
 r1=ra[0]
 r2=rp
 c1=cent[0]
 c2=cp
}else if(pressed2===true&&tri!=="sr"&&calc===true){
 fill(255,0,0)
 text("type the right value",70,250)
}
if(pressed3===true&&tri==="sr"){
 calc=false
 tri=1
}  else if(pressed3===true&&tri!=="sr"&&calc===true){
fill(255,0,0)
text("type the right value",70,250)
}
}

}
