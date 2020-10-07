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
    const likesUl = document.querySelector('.likes')
    console.log(likesUl)
    
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
        const likeNum = parseInt(counter.innerText, 10)

        if (likesUl.querySelector(`[data-number="${likeNum}"]`)){
            const like = likesUl.querySelector(`[data-number="${likeNum}"]`)
            like.dataset.likes++
            like.innerHTML = `${like.dataset.num}  has been liked <span>${like.dataset.likes}</span> times
        `
        }
    else{
        const like = document.createElement("li")
            
            like.dataset.number = likeNum
            like.dataset.likes = 1
        
        likesUl.append(like)
            like.dataset.num = parseInt(counter.innerText, 10)
            like.innerHTML = `${like.dataset.num}  has been liked <span>${like.dataset.likes}</span> time
        `

        }
        
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