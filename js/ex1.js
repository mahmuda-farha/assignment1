



var firstname=" Hi,my name is Mahmuda Farha."
 var secondname="i'm 22 year old."

document.getElementById("student_message").innerHTML = "Hi, my name is Mahmuda Farha." + ""+ "i'm 22 year old.";


//2//

var number1=101;
var number2=7;

document.getElementById("result").innerHTML= number1/number2

//3//

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

if(phone1.length ==9) {
    console.log(phone1+"is valid");
} 
else (phone1.length == 9) 
{
    console.log(phone1+ "is not valid")
}


if (phone2.length == 9) {
    console.log(phone2 + "is valid");
}
else (phone2.length == 9) 
{
    console.log(phone2 + "is not valid")
}


if (phone3.length == 9) {
    console.log(phone3 + "is valid");
}
else (phone3.length == 9) 
{
    console.log(phone3 + "is not valid")
}

//5//
 var power = Math.pow(32,6)
 console.log(power)


 //6//
var quantity = "25";

console.log(quantity += quantity);

var number = 6;
console.log((7 + 5) / number + 2);

var pressure;
console.log(pressure);
console.log(typeof pressure); 

var temperature = null;
console.log(temperature); 
console.log(typeof temperature);

//7//

// 1
var getAddressFromWebsite = document.getElementById("url_1").innerText;
console.log(getAddressFromWebsite);

var modifyAddress = "https://" + getAddressFromWebsite;
console.log(modifyAddress);


document.getElementById("url_2").innerText = modifyAddress;


// 2

var getAddress = document.getElementById("url_3").innerText;
console.log(getAddress);

var modifyAddress = (getAddress.replace("https://", ""));
console.log(modifyAddress);

document.getElementById("url_4").innerText = modifyAddress;