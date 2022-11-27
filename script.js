
console.log("script");
const img = document.getElementById('carousel');

const imgClass=document.getElementById('carousel').className;
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

console.log("imgaes.className="+imgClass);
let pictures = [];
if(imgClass=="earrings"){
     pictures = [
    'https://i.ibb.co/DGs4HCW/ear-1.jpg',
    'https://i.ibb.co/vXhD1RR/ear-2.jpg',
    'https://i.ibb.co/0sJ7NGb/ear-4.jpg',
    
];
document.getElementById("carousel").style.height = "122%";

}
else if(imgClass=="ring-1"){
    pictures = [
        'https://i.ibb.co/Bn7VHSP/s-ring-1.jpg',
        'https://i.ibb.co/7pFRGS6/s-ring-3.jpg',
        'https://i.ibb.co/6NpRBTp/s-ring-4.jpg',
        
      
       ];
}
else if(imgClass=="ring-2"){
    pictures = [
        'https://i.ibb.co/YPhwQ6k/g-ring-2.jpg',
       'https://i.ibb.co/DftvM9x/g-ring-1.jpg',
       'https://i.ibb.co/g9pzvPC/g-ring-3.jpg',
       'https://i.ibb.co/NmNtBZM/g-ring-4.jpg'
       ];
}
else if(imgClass=="ring-3"){
    pictures = [
        'https://i.ibb.co/6rMysvV/silver-r2.jpg',
       'https://i.ibb.co/HdQzwG7/silver-ring3.jpg'
       ];
}
else if(imgClass=="ring-4"){
    pictures = [
        'https://i.ibb.co/f0tbh0h/p-s-1.jpg',
       'https://i.ibb.co/TLM8CQW/p-s-2.jpg',
       'https://i.ibb.co/M50n9pD/p-s-3.jpg',
       'https://i.ibb.co/YkkJZxD/p-s-4.jpg'
       ];
}
else if(imgClass=="ring-pre2"){
    pictures = [
        'https://i.ibb.co/mGjzGQt/p-g-3.jpg',
       'https://i.ibb.co/HBLVqLw/p-g-1.jpg',
       'https://i.ibb.co/6tNPJSK/p-g-2.jpg',
       'https://i.ibb.co/b6LvB71/p-g-4.jpg'
       ];
}
else{
    pictures = [
];
}


img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
