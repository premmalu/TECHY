// function to get value and pass it to another html file
function passvalues(){
    var firstname =document.getElementById("name").value;
    localStorage.setItem("textvalue",firstname);
    var ad1 =document.getElementById("ad1").value;
    localStorage.setItem("textvalue1",ad1);
    var ad2 =document.getElementById("ad2").value;
    localStorage.setItem("textvalue2",ad2);
    var ad3 =document.getElementById("ad3").value;
    localStorage.setItem("textvalue3",ad3);
    var ad4 =document.getElementById("ad4").value;
    localStorage.setItem("textvalue4",ad4);
    var email =document.getElementById("email").value;
    localStorage.setItem("textvalue5",email);
    var phone =document.getElementById("phone").value;
    localStorage.setItem("textvalue6",phone);
}
document.addEventListener('contextmenu', event => event.preventDefault());