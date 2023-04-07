function Slider() {
    let mainObj = {
        isint:false,
        counter:0,
        images:['\ \(2\)','\ \(3\)','\ \(4\)','\ \(5\)','\ \(8\)','\ \(9\)'],
        init:function(left,right,container){
            if(!mainObj.isint){
                mainObj.l = document.querySelector(left)
                mainObj.r = document.querySelector(right)
                mainObj.c = document.querySelector(container)

                mainObj.previous(mainObj.l,mainObj.c)
                mainObj.next(mainObj.r,mainObj.c)
            }
        },previous(a){
            a.addEventListener('click',(e)=>{
                mainObj.counter = mainObj.counter -1

                if(mainObj.counter < 0){
                    mainObj.counter = mainObj.images.length-1
                }

                mainObj.c.style.backgroundImage=`url("./Images/a${mainObj.images[mainObj.counter]}.jpg")`

            })
            
        },next(b){
            b.addEventListener('click',(e)=>{

                mainObj.counter = mainObj.counter + 1
                if(mainObj.counter > mainObj.images.length-1){
                    mainObj.counter = 0
                }

                    mainObj.c.style.backgroundImage=`url("./Images/a${mainObj.images[mainObj.counter]}.jpg")`
            })
        }

    }

    return{
        init:mainObj.init
    }

}

let slider = new Slider()
slider.init('.fa-chevron-left','.fa-chevron-right','.container')