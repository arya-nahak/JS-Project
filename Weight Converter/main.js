let form = document.querySelector('form')
let append_v = document.querySelector('#contex_t')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let values = e.srcElement.children[3].value * (2.2046);
    append_v.innerHTML=values.toFixed(2)
})