const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content')
const btn1 = document.getElementById('btn-tab1')
const btn2 = document.getElementById('btn-tab2')
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');

const changeClass = el =>{
    for (let i =0; i<tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e =>{

    let currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }

    btn1.addEventListener('click', ()=>{
        btnClickOne();
    })

    btn2.addEventListener('click', ()=>{
        btnClickTwo();
    })

})

const btnClickOne = () =>{
    for (let i =0; i<tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
    }
    tab1.classList.add('active');
    content[0].classList.add('active');
}

const btnClickTwo = () =>{
    for (let i =0; i<tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
    }
    content[1].classList.add('active');
    tab2.classList.add('active');
}

/*
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус

*/