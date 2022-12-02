let btn = document.getElementsByClassName('about__map_mini-image')

// console.log(btn[0].children);


let mainCard = document.querySelectorAll('.main-img')[1]
// console.log(mainCard.alt);

let miniCard = document.querySelectorAll('.switch')


for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            for (const child of btn[i].children) {
                console.log(child);
                const originalImg = mainCard.src
                mainCard.src = child.src 
                child.src = originalImg
        }})
    }