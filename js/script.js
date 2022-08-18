// checklist problem 2

const headings = document.getElementsByTagName('h2');
for( const heading of headings){
    heading.style.color = "lightblue";
}

// checklist problem 3

document.getElementById('backpack').style.backgroundColor = "tomato";

// checklist problem 4

const cards = document.getElementsByClassName('card');
for ( const card of cards){
    card.style.borderRadius = "30px";
}

// checklist problem 5

function show(){
    console.log("Shows something on console");
}

// checklist problem 6

const buttons = document.getElementsByClassName("btn");
for(const button of buttons){
    button.addEventListener("click", function(){
        button.style.display = "none";
    })
}

// checklist problem 6

const submitBtn = document.getElementById('submit-btn');
const inputArea = document.getElementById("exampleInputEmail1");

inputArea.addEventListener('keyup', function(event){
    if(event.target.value === 'email'){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
})

// checklist problem 7

function imageChange(image){
    image.src = "images/bags/bag-2.png"
}
function firstImage(image){
    image.src = "images/bags/bag-1.png"
}

// checklist problem 8

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor = "grey";
})