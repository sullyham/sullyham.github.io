const myImage = document.querySelector("img");
myImage.addEventListener("click", () =>{
const mySrc = myImage.getAttribute("src");
if(mySrc === "Images/chell.webp"){
    myImage.setAttribute("src", "Images/sans.jpg");
}
else{
    myImage.setAttribute("src", "Images/chell.webp");
}
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
    const myName = prompt("Please, enter your name.");
    if(!myName){
        setUserName();
    }
    
    else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `I love game, ${myName}`;
    }
}
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `I love games, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
}

)