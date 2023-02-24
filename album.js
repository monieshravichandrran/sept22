const images = ["man.jpeg","images.png","college.jpeg","school.jpeg"];
const arr = [1,2,3,4,5,6,7,8,9,10];

const filteredArr  = arr.filter((item)=> item%3==0);
const alteredArr = arr.map((item) => item*2);
console.log(alteredArr);

let currentImage = 0;

setInterval(()=>{
    if(currentImage<images.length-1){
        currentImage++;
    }
    else{
        currentImage = 0;
    }
    image.setAttribute("src",images[currentImage]);
},2000);

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const image = document.getElementById("image");

previous.addEventListener("click",()=>{
    if(currentImage==0){
        currentImage = images.length-1;
    }
    else
        currentImage--;
    console.log(images[currentImage]);
    image.setAttribute("src",images[currentImage]);
});

next.addEventListener("click",()=>{
    if(currentImage==images.length-1){
        currentImage = 0;
    }
    else
        currentImage++;
    console.log(images[currentImage]);
    image.setAttribute("src",images[currentImage]);
})