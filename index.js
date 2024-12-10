const enterme = document.getElementById("enterme")
const addme = document.getElementById("addme")
const result = document.getElementById("result")


addme.addEventListener('click',function(e){
    e.preventDefault()
    
    if(enterme.value == ""){
        alert("can't be empty fill up")
        return "";
    }

    let main = document.createElement("main")
    main.className = "allcontain"
    let div = document.createElement("div")
    div.className = "contain"
    let h2 = document.createElement("h2")
    let button = document.createElement("button")
    button.className = "btn"
    let label = document.createElement("label")
    label.className = "puts"
    let nav = document.createElement("nav")
    nav.className = "put"
    let section = document.createElement("section")
    section.className = "set"
    

    

    h2.textContent = enterme.value
    button.textContent = "delete"
    label.textContent = "read"
    nav.textContent = "unread"
    main.appendChild(h2)
    main.appendChild(div)
    div.appendChild(section)
    section.appendChild(nav)
    section.appendChild(label)
    div.appendChild(button)
    result.appendChild(main)
    console.log(main);
 
    enterme.value = ""


    window.addEventListener('load', function(){
        label.style.display ="block"
        nav.style.display ="none"
    })

    label.addEventListener('click',function(){
        h2.style.textDecoration = 'line-through'
        h2.style.textDecorationColor = 'red'
        h2.style.background = 'blue'
        label.style.display = "none"
        nav.style.display = "block"

    })

    nav.addEventListener('click',function(){
        h2.style.textDecoration = 'none'
        h2.style.textDecorationColor = 'none'
        h2.style.background = 'none'
        label.style.display = "block"
        nav.style.display = "none"
    })

    button.addEventListener('click',function(){
        result.removeChild(main)
    })


})
