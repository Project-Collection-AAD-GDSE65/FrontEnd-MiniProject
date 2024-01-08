$(document).ready(function(){

    $("#btn-submit").click(function(){
        event.preventDefault();

        let descF = $("#form-description").val();
        let qtyF = $("#form-qty").val();
        let unitPriceF = $("#form-unitPrice").val();

        console.log(descF);
        console.log(qtyF);
        console.log(unitPriceF);

        //create an object for accumilate data
        const itemData = {
          desc:descF,
          qty:qtyF,
          unitPrice:unitPriceF
        };

        console.log(itemData)
       
        //create JOSN
        const itemJSON = JSON.stringify(itemData)
        console.log(itemJSON)
    
         //send the data to the backend via AJAX
            //AJAX - Vanila JS
            //  const http = new XMLHttpRequest();
             /////////////////////////////////////////////////
            //  http.onreadystatechange = () =>{
            //      if(http.readyState == 4 && http.status == 200){
            //          console.log("Success")
            //          console.log(http.readyState)

            //      }else{
            //         console.log("Failed")
            //         console.log(http.readyState)
                    
            //      }
            //  }
            //  ///////////////////////////////////////////////
            //  http.open("POST","http://localhost:8080/pos/item",true);
            //  http.setRequestHeader("Content-Type","application/json");
            //  http.send(itemJSON)
            // AJAX - JQuery
            $.ajax({
                url:"http://localhost:8080/pos/item",
                type:"POST",
                data:itemJSON,
                headers:{"Content-Type":"application/json"},
                success: (res) =>{
                    console.log(JSON.stringify(res))
                },
                error: (err)=>{
                    console.error(err)
                }
              });
       
    });

});