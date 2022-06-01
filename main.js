const button = document.querySelector('button')
const body = document.body
let navquestions = document.getElementsByClassName("nav-pytanie")
let autors = document.getElementsByClassName("autor")
let hoversides = document.getElementsByClassName("hover-side")
let defaultsides = document.getElementsByClassName("default-side")
let footer = document.querySelector('footer')
console.log(footer)
let last = document.querySelector('.last')
let links = document.querySelectorAll('a')
let recenzjaicon = document.querySelector(".recenzja-icon")


console.log(button)
let counter = 0
let current = false

const changeclass = () => {

    if(!current){

        current = true


        if(counter == 0){
            recenzjaicon.src = "img/recenzja5"
            body.style.backgroundColor = "rgb(0, 43, 52)"
            body.style.color = "#eee"

            for(let i of autors){
                console.log(i)
                i.classList.add('darkautor')
            }
            for(let i of hoversides){
                console.log(i)
                i.classList.add('darkhover-side')
            }
            for(let i of defaultsides){
                console.log(i)
                i.classList.add('darkdefault-side')
            }
            footer.classList.add("darkfooter")
            for (let i of links){
                i.style.color = "white"
            }
            last.classList.add('darklast')
            button.classList.add("darkbutton")
            console.log(button.classList)
            button.innerHTML = "<i class=\"fa-solid fa-cloud-moon\"></i>"
            counter = 1
        }
        else{
            recenzjaicon.src = "img/recenzja4"
            body.style.backgroundColor = "rgb(231, 251, 255)"
            for(let i of autors){
                console.log(i)
                i.classList.remove('darkautor')
            }
            for(let i of hoversides){
                console.log(i)
                i.classList.remove('darkhover-side')
            }
            for (let i of links){
                i.style.color = "black"
            }
            for(let i of defaultsides){
                console.log(i)
                i.classList.remove('darkdefault-side')
            }
            body.style.color = "black"
            last.classList.remove('darklast')
            footer.classList.remove("darkfooter")
            button.classList.remove("darkbutton")

            button.innerHTML = "<i class=\"fa-solid fa-sun\"></i>"
            counter = 0
        }

        
        setTimeout(() => {
            current = false
            console.log('finished ' + current)
        }, 1000)
        console.log(current)

    }

}

button.addEventListener('click', changeclass)

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const lightbox = document.createElement('div')
let grid = document.querySelector(".grid")
let button2 = document.createElement('div')
lightbox.id = 'lightbox'

console.log(grid)
button2.classList.add('button-lightbox')
grid.appendChild(lightbox)
grid.appendChild(button2)
button2.innerHTML = "<span class=\"close\">&times;</span>"


const images = document.querySelectorAll('.recenzja-img')
images.forEach(image => {
  image.addEventListener('click', e => {
  body.classList.add('dark-lightbox')
    button2.style.display = "block"
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = "img/recenzja.png"
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

button2.addEventListener('click', e => {
  if (e.target !== e.currentTarget){
    button2.style.display = "none"
  body.classList.remove('dark-lightbox')
  lightbox.classList.remove('active')
  return}
  else{lightbox.classList.remove('active')
  body.classList.remove('dark-lightbox')

}

})



