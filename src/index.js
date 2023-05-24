import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
    alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!


document.querySelector(".text-content h2").addEventListener("click", function (a) {
    alert("Ama nereye?Hadi Seçelim:)");
});

//mouseover and mouseout
document.querySelectorAll("nav a").forEach(item => {
    item.addEventListener("mouseover", item => {
        item.target.style.backgroundColor = "yellow";
    });
    item.addEventListener("mouseout", item => {
        item.target.style.backgroundColor = "white";
    });
});
document.querySelector("h1").addEventListener("mouseover", item =>{
    item.target.style.backgroundColor = "yellow";
});
document.querySelector("h1").addEventListener("mouseout", item =>{
    item.target.style.backgroundColor = "white";
});
document.querySelectorAll("h2").forEach(item =>{
    item.addEventListener("mouseover", item =>{
        item.target.style.backgroundColor = "yellow";
    })
    item.addEventListener("mouseout", item =>{
        item.target.style.backgroundColor = "white";
    })
});
document.querySelectorAll("h4").forEach(item =>{
    item.addEventListener("mouseover", item =>{
        item.target.style.backgroundColor = "yellow";
    })
    item.addEventListener("mouseout", item =>{
        item.target.style.backgroundColor = "white";
    })
});
document.querySelectorAll("p").forEach(item =>{
    item.addEventListener("mouseover", item =>{
        item.target.style.backgroundColor = "pink";
      
    })
    item.addEventListener("mouseout", item =>{
        item.target.style.backgroundColor = "white";
    })
});



const imgs = document.querySelectorAll("img");
imgs.forEach(item =>{
    item.addEventListener("mouseover",item =>{
        item.target.setAttribute("style","filter:drop-shadow(5px 10px 10px)");
    });
   
});
imgs.forEach(item =>{
    item.addEventListener("mouseout",item =>{
        item.target.setAttribute("style","filter:drop-shadow()");
    });
    
   
});

window.addEventListener("load",(event)=>{
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor = "orange"

    },"2000");
    
})
window.addEventListener("load",(event)=>{
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor = "white"

    },"7000");
    
});

/*document.querySelectorAll("img").forEach(item=>{
    item.addEventListener("click",event =>{
        event.target.style.witdh = "50%";
    });
    item.addEventListener("dblclick",event =>{
        event.target.style.witdh = "100%";
    });
});*/

const body = document.querySelector('body');
body.style.transition = "background 1s ease";
window.onscroll = function(event){
    const scroll = window.pageYOffset;
    if(scroll <300){
        body.style.backgroundColor = '#fff';
        images.forEach(image =>{
            image.style.borderRadius = 0;
        });
    }else if(scroll >=300 && scroll<600){
        body.style.backgroundColor ='#4bbeab8f';
        images.forEach(image=>{
            image.style.borderRadius="100%";
        });
    
    }else {
        body.style.backgroundColor ='#4032c98f';
    }
};
window.addEventListener("resize",(e)=>{
    if(window.outerWidth <600){
        body.style.backgroundColor = "red";
    }
});



  


