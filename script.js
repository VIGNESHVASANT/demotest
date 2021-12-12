var request= new XMLHttpRequest();

request.open('GET','',true);


request.send();

request.onload=function(){
  var countryData=JSON.parse(this.responce);
  const asia=countryData.filter((element)=>{
    if(element.region==='Asia'){
      return element.name;
    }
     
  })
  console.log(asia);
  
}



   
  
  


  