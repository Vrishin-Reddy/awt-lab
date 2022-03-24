async function display()
{
    const url='https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=3078fc1574c6c7c19d47cf07db371609&units=metric';
    const response=await fetch(url);
    var result=await response.json();
    return Promise.resolve(result);
}
display().then(function(result){
    console.log(result);
     let {main:{temp,temp_max,temp_min=result}}=result;
     console.log("TEMPERATURE:"+temp);
     console.log("MAX_TEMPERATURE:"+temp_max);
     console.log("MIN_TEMPERATURE:"+temp_min);
     document.getElementById("test").innerHTML=temp;
     
});