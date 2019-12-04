$(document).ready(function() {    
    //var apiKey = "https://api.darksky.net/forecast/b66c79c655b658d9f87dca40fc5092b8/37.8267,-122.4233" // Enter your API Key here   
    apiKey = "b66c79c655b658d9f87dca40fc5092b8" // Enter your API Key here            
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var state_obj = state_info
    console.log(state_info)
    //document.getElementById('image_today').src='./img/' + data.daily.icon+'.png';

    //var url =`https://api.darksky.net/forecast/-apikey-/-latitude-,-longitude-`;
    //var url =`https://api.darksky.net/forecast/ `+ apiKey +state_obj.latitude '/' +state_obj.latitude;


    Object.keys(state_info).map(function(key, index) 
    {
                //$('#'+key).css('fill', "blue");
                //console.log(key);
                //state_info[key] *= 2;
               // if 

    var url =`https://api.darksky.net/forecast/` + apiKey + '/'+state_obj[key].lat +',' +state_obj[key].lng ;
   //url = "https://api.darksky.net/forecast/b66c79c655b658d9f87dca40fc5092b8/37.8267,-122.4233" 
    console.log(url)
    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
                console.log(key)
                var temperature = null
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                var temperature = data.currently.temperature;

                //console.log(data.)
                console.log(temperature)


                //TODO 
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                // Between 11 and 30 should be cyan
                // Between 31 and 50 should be green
                // Between 51 and 80 should be orange
                // Greater than 80 should be 
                //console.log(state_info.length)
               // $('#CO').css('fill', "blue");
               // Object.keys(myObject).map(function(key, index) {
                //  myObject[key] *= 2;
                //});

                //console.log(myObject);

               // Object.keys(state_info).map(function(key, index) 
                //{

                if (temperature<=10)
                {

                    $('#'+key).css('fill', "#6495ED");
                }
                else if(temperature>10 && temperature<=20)
                {
                    $('#'+key).css('fill', "#7FFFD4");


                }
                else if(temperature>20 && temperature<=30)
                {
                    $('#'+key).css('fill', "#0000FF");


                }
                else if(temperature>30 && temperature<=40)
                {
                    $('#'+key).css('fill', "#008B8B");


                }
                else if(temperature>40 && temperature<=50)
                {
                    $('#'+key).css('fill', "#00BFFF");


                }
                else if(temperature>50 && temperature<=60)
                {
                    $('#'+key).css('fill', "#F08080");


                }
                else if(temperature>60 && temperature<=70)
                {
                    $('#'+key).css('fill', "#CD5C5C");


                }
                else if(temperature>70 && temperature<=80)
                {
                    $('#'+key).css('fill', "#8B0000");


                }
                else if(temperature>80 && temperature<=90)
                {
                    $('#'+key).css('fill', "#B22222");


                }
                 else if(temperature>90)
                {
                    $('#'+key).css('fill', "#FF0000");


                }


                //console.log(key);
                //state_info[key] *= 2;
               // if 



                //});

                

               //for (var i = 0; i < 50 -1; i++) 
               //{
                //console.log(state_info[1])
                //('#CO').css('fill', "blue");

               //}

                //$('#CO').css('fill', "blue");   // Example on how to fill colors for your state.    
    });
});
 });