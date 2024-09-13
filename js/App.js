const title = document.querySelectorAll('.main>div>span')
const back = document.querySelector('.first')
const btn = document.querySelector('button')
const inp = document.querySelector('input')
const ul = document.querySelector('.list>ul')
const list = document.querySelectorAll('li')
const aval = document.querySelector('#aval')
const second = document.querySelector('#second')
const time = document.getElementById('time')
const styleSpan = document.querySelectorAll('.style>span')

styleSpan[1].addEventListener('click', () => {
    back.style.backgroundImage = 'linear-gradient(100deg, #d4f1ff, #ffffff)'
    back.style.color = '#ffdfdb'

})

styleSpan.forEach((val, i) => {
    ////////////light
    styleSpan[2].addEventListener('click', () => {
        back.style.backgroundImage = 'linear-gradient(100deg, #575656, #062e3f)'
        back.style.color = '#ffdfdb'
        btn.style.backgroundColor = 'rgb(246, 226, 223)'
        btn.style.color = 'black'
        inp.style.backgroundColor = ' rgb(24, 26, 26)'
        list.style.color = 'black'
    })
    ////////////white
    styleSpan[1].addEventListener('click', () => {
        back.style.backgroundImage = 'linear-gradient(100deg, #d4f1ff, #ffffff)'
        back.style.color = '#1a150e'
        btn.style.backgroundColor = 'rgb(255, 255, 255)'
        btn.style.color = 'black'
        inp.style.backgroundColor = 'rgb(174,177,180)'
        list.style.color = 'rgb(255,223,219)'


    })
    ///////dark
    styleSpan[0].addEventListener('click', () => {
        back.style.backgroundImage = 'linear-gradient(100deg, #001214, #001f29)'
        back.style.color = 'white'
        btn.style.color = 'white'
        btn.style.backgroundColor = 'rgb(0,40,55)'
        inp.style.backgroundColor = 'rgb(1,57,76)'
        list.style.color = 'white'
    })
})

inp.focus()
btn.addEventListener('click', () => {
    if (inp.value == '') {
        alert('should not be empty')
    } else {
        const li = document.createElement('li')
        ul.appendChild(li).innerHTML =
            ` ${inp.value} 
         <span id='aval'><i class="bi bi-trash"></i></span>    
         <span id='second'><i class="bi bi-person-check"></i></span>    `
    }
    inp.value = ''
    inp.focus()
    const span1 = document.querySelectorAll('li>span:first-of-type')
    span1.forEach((val, i) => {
        val.addEventListener('click', () => {
            val.parentElement.style.transform = 'translatex(-1000px)'
            setTimeout(() => {
                val.parentElement.style.display = 'none'
            }, 200);
        })
    })
    const span2 = document.querySelectorAll('li>span:last-of-type')
    span2.forEach((val, i) => {
        val.addEventListener('click', () => {
            val.parentElement.style.textDecoration = 'line-through';
            val.parentElement.style.backgroundColor = 'rgba(24, 26, 26, 0.245)';

        })
    })
})

time.innerText = new Date().toDateString() + ' , ' + new Date().toLocaleTimeString()
setInterval(() => {
    time.innerText = new Date().toDateString() + ' , ' + new Date().toLocaleTimeString()
}, 1000);


/////////////////////title/////////
setInterval(() => {
    title[0].style.borderRight = '2px solid black'
}, 500);
setInterval(() => {
    title[0].style.borderRight = '2px solid rgba(250, 235, 215, 0)'
}, 1000);

title[0].style.opacity = '0'
setTimeout(() => {
    title[0].style.opacity = '1'
    title[0].innerHTML = 'j'
}, 500);
setTimeout(() => {
    title[0].innerHTML = 'ju'
}, 700);
setTimeout(() => {
    title[0].innerHTML = 'jus'
}, 1000);
setTimeout(() => {
    title[0].innerHTML = 'just'
}, 1300);
setTimeout(() => {
    title[0].innerHTML = 'just d'
}, 1500);
setTimeout(() => {
    title[0].innerHTML = 'just do'
}, 1800);
setTimeout(() => {
    title[0].innerHTML = 'just do i'
}, 2100);
setTimeout(() => {
    title[0].innerHTML = 'just do it.'
}, 2300);

