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


console.log(button)
let counter = 0
let current = false

const changeclass = () => {

    if(!current){

        current = true


        if(counter == 0){
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
            footer.classList.add("darkfooter")
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

