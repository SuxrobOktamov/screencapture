
window.addEventListener('scroll', ()=>{
    const marketHead = document.querySelector('.market__head');
    const topHead = document.querySelector('.top__head');
    marketHead.classList.toggle('show', window.scrollY > 0);
    topHead.classList.toggle('block', window.scrollY > 0);
    
});
let block = document.querySelector('.top__head ');

block.addEventListener('mousedown', (e)=>{
    e.target.parentNode.parentNode.style.transform = 'perspective(1000px) rotate3d(1, 0, 0, 180deg)';
    console.log(e.target);
})
block.addEventListener('mouseup', (e)=>{
    e.target.parentNode.parentNode.style.transform = 'perspective(1000px) rotate3d(1, 0, 0, 360deg)';
})

let item = document.querySelectorAll('.home');
item.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if( item.classList.contains('home') ){
            item.parentNode.classList.toggle('toggle1');
        }
    })
})

item.forEach((item)=>{
    item.addEventListener('mousedown', ()=>{
        item.parentNode.style.transform = "translateY(10px)";
    })
    item.addEventListener('mouseup', ()=>{
        item.parentNode.style.transform = "translateY(0px)";
    })
})

let total1 = document.querySelector("#total1");
let count = 0;
total1.addEventListener('click', (e)=>{
    if( count == 0) {
        e.target.innerHTML = 'close';
        count = 1;
    }else {
        e.target.innerHTML = 'menu';
        count = 0;
    }
    document.body.classList.toggle('demo');
})

let anm = document.querySelectorAll('.anm');
let marketSoundbox  = document.querySelectorAll('.market__soundbox ');
let span1  = document.querySelector('.span1 ');
let span2  = document.querySelector('.span2 ');
let span3  = document.querySelector('.span3 ');
let idx = 0;

anm.forEach((item)=>{    
    item.addEventListener('click', (e)=>{
        reset()
        if( e.target.classList.contains('span1') ){
            anm.forEach((item)=>{
                item.classList.remove('black')
            });
            item.classList.add('black');
            marketSoundbox.forEach((item)=>{
                item.style.transform = 'translate(0)'
            })
            
        }else if( e.target.classList.contains('span2') ){
            anm.forEach((item)=>{
                item.classList.remove('black')
            });
            item.classList.add('black');
            marketSoundbox.forEach((item)=>{
                item.style.transform = 'translate(-100%)'
            })
            
        }else if( e.target.classList.contains('span3') ){
            
            anm.forEach((item)=>{
                item.classList.remove('black')
            });
            item.classList.add('black');
            marketSoundbox.forEach((item)=>{
                item.style.transform = 'translate(-200%)'
            })
           
        }
    })
})

function sayHello() {
    marketSoundbox.forEach((item)=>{
        if(idx < 3){
            item.style.transform = `translate(${idx*(-100)}%)`;
            
        }else{
            idx = 0;
            item.style.transform = `translate(${idx*(-100)}%)`;
        };

        if(idx == 0){
            span1.classList.add('black');
            span2.classList.remove('black');
            span3.classList.remove('black');
        }else if(idx == 1){
            span2.classList.add('black');
            span1.classList.remove('black');
            span3.classList.remove('black');
        }else if(idx == 2){
            span3.classList.add('black');
            span1.classList.remove('black');
            span2.classList.remove('black');
        }
    })
};

let interval =  setInterval(run, 3000);
function run(){
    idx++;
    sayHello();
};

function reset(){
    clearInterval(interval);
    interval =  setInterval(run, 3000);
}


let scroll = ScrollReveal({
    duration: 2000,
    origin: "bottom",
    distance:"100px",
    reset: true,
    opacity:0
});

scroll.reveal(`.soundbox1`, {
    interval: 200,
})


let categoryLogo = document.querySelector('.category__logo');
let categoryList = document.querySelector('.category__list');
let logo1 = document.querySelector('.logo1');
let logo2 = document.querySelector('.logo2');
let btn = 0;
categoryLogo.addEventListener('click', (e)=>{
    if( btn == 0 ){
        categoryList.style.display = 'block';
        logo2.style.display = 'block';
        logo1.style.display = 'none';
        btn = 1;
    }else {
        categoryList.style.display = 'none';
        logo1.style.display = 'block';
        logo2.style.display = 'none';
        btn = 0;
    }
})