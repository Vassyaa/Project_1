
const show = document.querySelector('.show_password')
const input = document.querySelector('.input_password')

show.addEventListener('click',function(){
    if(input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
    }else {
        input.setAttribute('type', 'password')
    }
})
