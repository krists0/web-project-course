
console.log("script");
const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');



let pictures = ['https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14d2fe1244b43a1841569da918066fc4&auto=format&fit=crop&w=1050&q=80',
 'https://i.ibb.co/0K8yvyp/silver-r2.jpg',
  'https://i.ibb.co/8KscsVr/silver-ring3.jpg',
'https://i.ibb.co/CK23GtZ/Whats-App-Image-2022-10-05-at-00-14-23-1.jpg'
];

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
function setupImages(){
   

}
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
