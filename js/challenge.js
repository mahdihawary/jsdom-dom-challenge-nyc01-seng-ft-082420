function incrementLikes(){
    const  counter = document.querySelector("#counter")
    const likes = parseInt(counter.innerText, 10) +1
    
    counter.innerText = `${likes}`
    console.log(counter)
}

    let intervalId = setInterval(incrementLikes, 1000)

function togglePause(){
    const plus = document.querySelector("#plus")
    const minus = document.querySelector("#minus")
    const heart = document.querySelector("#heart")

    plus.disabled = true
    minus.disabled = true
    heart.disabled = true

    clearInterval(intervalId)
}

function toggleResume() {
    const plus = document.querySelector("#plus")
    const minus = document.querySelector("#minus")
    const heart = document.querySelector("#heart")
    const button = document.querySelector("#pause")
    console.log(button)
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    button.innerText = "pause"
    intervalId = setInterval(incrementLikes, 1000)
}





document.addEventListener('click',function(e){
    const button = e.target
    const counter = document.querySelector("#counter")
    const heart = document.querySelector('.likes')
    
    if (button.matches("#plus")){
        const likes = parseInt(counter.innerText, 10) + 1

        counter.innerText = `${likes}`
    }
    if (button.matches("#pause")){
        if (button.innerText === "pause")
        {togglePause()
        button.innerText = "resume"}
        else
        {toggleResume()
        
        }
        

    }
    if (button.matches("#minus")) {
        
        const likes = parseInt(counter.innerText, 10) - 1
        counter.innerText = `${likes}`

    }
    if (button.matches('#heart')) {
        console.log(e)
        const counter = document.querySelector('#counter')
        const like = document.createElement("li")
        const likeCounter = 0

        if (like.dataset.num === parseInt(counter.innerText, 10)){
            likeCounter++
        }

        heart.append(like)
        
        like.dataset.num = parseInt(counter.innerText, 10)
        const word = "time"

        if (likeCounter>1){
            word = "times"
        }
        
        like.innerHTML = `${like.dataset.num}  has been liked <span>1</span> ${word}
        `
    }

   
})

document.addEventListener('submit', function (e) {
    e.preventDefault()
    const comments = document.querySelector(".comments")
    const comment = document.createElement("p")
    console.dir(e.target)
    comment.innerText = e.target.comment.value
    comments.append(comment)

})