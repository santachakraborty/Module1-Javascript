                        //  .................................Synopsis........................

//Users should be able to see five buttons for the five boroughs of New York City when they load the page
//Users should also be able to see an input box where they can put in a number of how many complaints they want to see
//When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
//If the user doesn't input any number, make the default be 10
//they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
//When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
//When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
//Make sure it only toggles the response for that one complaint, not the entire list!





  function getData(event){
   
      //collecting data from button input
      let borough=event.target.innerHTML.toUpperCase();
      console.log(borough);
  
      //input value
      let numOfComplaints=document.getElementById("userInput").value;
      console.log(numOfComplaints);

      //If user didn't enter anything in the text box then the default value will be 10
      if( !numOfComplaints ){
         numOfComplaints=10;
      }
  
      fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + "&$limit=" + numOfComplaints)
      // .then((rawData) => rawData.json())
      // .then((formattedData) => displayData(formattedData))
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((error) => console.log(error))
  }

       function displayData(data){
           console.log(data);
 
           let output = '';

           for( let i=0; i<data.length; i++){
             let des = data[i].descriptor;
             let reso=data[i].resolution_description;
    
             console.log(des);
             console.log(reso);

             output += `<tr><td id="descriptor">🚨 ${des}</td>
                        <td>
                         <details id="resolution">
                           <summary id="buttonPolice" >What did the police do?</summary>
                             ${reso}
                         </details>
                       </td>
                     </tr>`;

               document.querySelector("#complaint").innerHTML=output;
           }
       }

  

