function Expand(){
    let mainObj = {
        isinit:false,
        doc:document.body,
        init:function(img,btn){
            if(!mainObj.isinit){
                mainObj.img = document.querySelectorAll(img)
                mainObj.btn = document.querySelectorAll(btn)
                
                mainObj.changes(mainObj.btn)
                mainObj.display(mainObj.img)
            }
        },display(a){
            a.forEach(element => {
                element.addEventListener('click',()=>{
                    mainObj.remove()
                    element.classList.add('active')
                })
            });
        },changes(b){
            b[0].addEventListener('click',function(){
                mainObj.doc.classList.toggle('dark-mode')
            })
        },remove(){
            mainObj.img.forEach((e)=>{
                e.classList.remove('active')
            })
        }
    }

    return{
        init:mainObj.init
    }
}

let expand = new Expand()
expand.init('.panel','.toggleMode')