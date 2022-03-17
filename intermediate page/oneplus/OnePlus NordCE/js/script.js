// getting all required elements

const searchWrapper =document.querySelector(".search-form");
const inputBox =searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// if user press any key and release the search

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data 
    let emptyArray = []; //empty
    if (userData){
        emptyArray= suggestions.filter((data)=>{
            // filtering array value and  user chat to lowercase and return only 
            // those word/sentc which are starts with user entered word 
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        
        searchWrapper.classList.add("show");   //show autocomplete box
        showSuggestions(emptyArray);
        let allList =suggBox.querySelectorAll("li");
        for (let i=0; i< allList.length; i++ ){
            const element = allList[i];
            // adding onclick attribute in all tag
            allList[i].setAttribute("onclick","select(this)");
        }
    }else{
        searchWrapper.classList.remove("show");  //hide autocomplete box
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passong the user selected list item data in textfield
    searchWrapper.classList.remove("show");  //hide autocomplete box
}

function showSuggestions(list){
    let listData;
    if(!list.length){
            userValue =inputBox.value;
            listData ='<li>'+ userValue +'</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML =listData;
}