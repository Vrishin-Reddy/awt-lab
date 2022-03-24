async function display(){
    var city=document.getElementById("city").value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87b86a13038f8a7f716b6b1d775f028f`;
    const response=await fetch(url);
    var data=await response.json();
    return Promise.resolve(data);
}
   function weatherdy(){
       display().then(function(data){

        console.log(data);
         let {main:{temp,temp_max,temp_min=data}}=data;
         console.log("TEMPERATURE:"+temp);
         console.log("MAX_TEMPERATURE:"+temp_max);
         console.log("MIN_TEMPERATURE:"+temp_min);
         document.getElementById("test").innerHTML=temp;
         
    });
   }