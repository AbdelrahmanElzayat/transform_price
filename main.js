
let selectto = document.querySelector(".select2")

let numTo = document.querySelector(".numTo")

let Btn = document.querySelector(".getBtn");

let result = document.querySelector(".result");

let optionFrom;
let optionTO;
let data;
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e53ea6ab4e584b04b7377c0c9529b464")
.then((res)=>{
    // console.log(res);
   let myData = res.json();
    // console.log(myData);
    return myData;
}).then((currency) => {

    // let amount = document.querySelector(".amount");
    // let egpPrice = document.querySelector(".egp span")
    // let sarPrice = document.querySelector(".sar span")


    // egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    // sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
    
    
    data = currency.rates;
    
    displayKeys(data);
});


    function displayKeys(data){
        if(data){
            Object.entries(data).forEach(([key,value]) =>{

                optionTO = document.createElement("option");
                optionTO.innerHTML = `${key}`;
                optionTO.value = `${value}`;
                selectto.append(optionTO);
                
            })
        }
    }
    Btn.onclick =  () => {
        output = selectto.options[selectto.selectedIndex].value;
        console.log(output); 
        console.log(numTo.value * output);       
        result.innerHTML= `${numTo.value * output} USD`;
        result.style.display = "block";
    }



// input.addEventListener("input", displayObj);