document.querySelectorAll(".footersection .box").forEach((item) => {
    // code to change img title price starts form here
    item.addEventListener('click',(event) => {
        let imgsrc = item.querySelector(".thumbnail img").src;
        let title = item.querySelector(".infobox h5").textContent;
        let price = item.querySelector(".infobox .price").textContent;
        

        document.querySelector(".bannerscetion h1").textContent = title;
        document.querySelector(".bannerscetion .pricebox").textContent = price;
        document.querySelector(".bannerscetion .imgbox img").src = imgsrc;

    
        


        // adding animation classList
    document
    .querySelector(".bannerscetion .infobox")
    .classList.add("animateLeft");
    document
    .querySelector(".bannerscetion .imgbox")
    .classList.add("animateRight"); 




    // remiving the animation classList


    setTimeout(function(){
        document
        .querySelector(".bannerscetion .infobox")
        .classList.remove("animateLeft");
        document
        .querySelector(".bannerscetion .imgbox")
        .classList.remove("animateRight");
    
    },1400);
    });
    // code to change img title price end here

});

setTimeout(function(){
    document
    .querySelector(".bannerscetion .infobox")
    .classList.remove("animateLeft");
    document
    .querySelector(".bannerscetion .imgbox")
    .classList.remove("animateRight");

},1400);

// code to enable dark mode for prdt landing page


// function darkmode(){
//     document.querySelector("body").classList.toggle("darkmode");
//     alert("Enable darkmode");
// }


// code for add to cart function.

function addtocart(){
    document.querySelector(".select").classList.toggle('display');
}

function add(){
// getting required variables

var noti = document.querySelector('.cart');
var select = document.querySelector('.select');
var button = document.querySelector('.button');
var button_action = document.querySelector('.button.action');
var image = document.querySelector(".imgbox img");
var price = document.querySelector(".pricebox");
var brand = document.querySelector(".infobox h1");
var buy = document.querySelector(".buy");
var child = document.querySelector(".select1");
var bins = document.querySelector(".remove");

// processing variables for adding it to cart

if(button_action){
    alert("Already inside the cart");
}
else if(button){
var add = Number(noti.getAttribute('data-count')|| 0);
noti.setAttribute('data-count',add +1);
noti.classList.add('zero');
var clone1 = image.cloneNode(true);
var clone2 = price.cloneNode(true);
var clone3 = brand.cloneNode(true);
var clone4 = bins.cloneNode(true);
var clone5 = buy.cloneNode(true); 
var clone = child.cloneNode(true);
clone.append(clone1);
clone.append(clone4);
clone.append(clone2);
clone.append(clone3);
clone.appendChild(clone5);
select.append(clone);
button.classList.add('action');
}
}

// function to remove elements

function remove(){
    var noti = document.querySelector('.cart');
    var bins = document.querySelector(".remove");
    var select = document.querySelector('.select');
    var button = document.querySelector('.button');
    var add = Number(noti.getAttribute('data-count')|| 0);
    bins.parentElement.remove();
    noti.setAttribute('data-count',add -1);
    button.classList.remove('action');
    select.classList.remove('display');
    noti.classList.remove('zero');
}


//finction to show details page
function mouseOver()
{
    var details = document.querySelector('.details');
    details.classList.add('view');
}
function mouseOut()
{
    var details = document.querySelector('.details');
    details.classList.remove('view');
}
document.addEventListener('contextmenu', event => event.preventDefault());