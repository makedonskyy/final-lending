let btn = document.querySelectorAll('.about__map_mini-image')

// console.log(btn[0].children);


let mainCard = document.querySelectorAll('.main-img')[1]
// console.log(mainCard.alt);

let miniCard = document.querySelectorAll('.switch')

// console.dir(mainCard.src);

let title = document.querySelectorAll('.text-in-card-main')[1]
console.log(title.innerHTML);
// btn.forEach( el => {
//     let src = el.children[0].src;
//     console.log(src);
//     let alt = el.children[0].alt;

//     // console.dir(el.children[0].src);

//     el.addEventListener('click', function () {
//         const originalImg = src
//         mainCard.src = src;    
//         miniCard = originalImg
//         // console.dir(el.children[0].src)

//     });

// });




for (let i = 0; i < btn.length; i++) { 
    btn[i].addEventListener('click', function () {  
       for (const child of btn[i].children) {
            console.log(child.alt);
            const originalImg = mainCard.src
            const originalAlt = mainCard.alt
            mainCard.src = child.src
            title.innerHTML = child.alt
            child.alt = originalAlt
            child.src = originalImg
        }
    })
}