let btn = document.getElementsByClassName('change-img')
console.log(btn);

let mainCard = document.querySelectorAll('.card-img-left')[1]
let two = document.querySelector('.mini-img')

for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener('click', function() {
    for (const child of btn[i].children) {
        console.log(btn.innerHTML);
        child.classList.replace('mini-img', 'card-img-left')
child.innerHTML = child.innerHTML + mainCard.innerHTML
console.log(child.innerHTML);
mainCard.innerHTML = ''
      }
})
}


function switchImage() {

}




// })
// }

    // btn.map((el) => (el.addEventListener('click', function() {
    //     console.log('click');
    // })))

// btn[0].addEventListener('click', function() {
//     console.log('click');
// })   card-img-left
