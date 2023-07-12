let title = document.getElementById("title")
let image = document.getElementById("image")
let author = document.getElementById("author")
let category = document.getElementById("category")
let story = document.getElementById("story")
let button = document.getElementById("btn")


// container right side
let imageRight = document.getElementById("imageRight")
let titleRight = document.getElementById("titleRight")
titleRight.style.fontSize="30px"
titleRight.style.fontWeight="900"
let storyRight = document.getElementById("storyRight")
let authorRight = document.getElementById("authorRight")


// create element for right side
let showImage = document.createElement("img")
let showtitle = document.createElement("h1")




let showstory = document.createElement("p")

let showAuthor = document.createElement("h1")





let input = document.createElement("input")
input.style.borderBlockColor="blue"
input.style.fontSize="20px"
input.style.borderRadius="10px"
input.style.padding="10px 40px"
input.setAttribute("placeholder","Title of your story")
let inputImg = document.createElement("input")
inputImg.style.borderBlockColor="blue"
inputImg.style.fontSize="20px"
inputImg.style.borderRadius="10px"
inputImg.style.padding="10px 40px"
inputImg.setAttribute("placeholder","Enter your image url")
let inputAuth = document.createElement("input")
inputAuth.style.borderBlockColor="blue"
inputAuth.style.fontSize="20px"
inputAuth.style.borderRadius="10px"
inputAuth.style.padding="10px 40px"
inputAuth.setAttribute("placeholder","Enter Author name")
let inputCat = document.createElement("input")
inputCat.style.borderBlockColor="blue"
inputCat.style.fontSize="20px"
inputCat.style.borderRadius="10px"
inputCat.style.padding="10px 40px"
inputCat.setAttribute("placeholder","Catagory: exp eductaion")
let inputstory = document.createElement("textarea")
inputstory.style.borderBlockColor="blue"
inputstory.style.fontSize="20px"
inputstory.style.borderRadius="10px"
inputstory.style.padding="10px 40px"
inputstory.setAttribute("placeholder","Enter your story")


// final outcome
title.appendChild(input)
image.appendChild(inputImg)
author.appendChild(inputAuth)
category.appendChild(inputCat)
story.appendChild(inputstory)

imageRight.appendChild(showImage)
titleRight.appendChild(showtitle)
storyRight.appendChild(showstory)
authorRight.appendChild(showAuthor)


button.addEventListener("click",()=>{
    let tasktitle = input.value.trim()
    titleRight.innerHTML=tasktitle
    let taskstory = inputstory.value.trim()
    storyRight.innerHTML=taskstory
    let taskAuthor = inputAuth.value.trim()
    authorRight.innerHTML=taskAuthor
    let taskImage = inputImg.value.trim()
    showImage.src=taskImage
})