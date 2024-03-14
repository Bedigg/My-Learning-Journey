const viewMore= document.getElementById('view-more')
const viewLess= document.getElementById('view-less')
const posts= document.getElementById('posts')
const four= document.getElementById('four')
const five= document.getElementById('five')
const six= document.getElementById('six')


document.addEventListener('click', e=>{
    
    if(e.target === viewMore){
    four.classList.remove('hidden')
    five.classList.remove('hidden')
    six.classList.remove('hidden')
    viewMore.classList.add('hidden')
    viewLess.classList.remove('hidden')
    }
    
    
    if(e.target ===viewLess){
        four.classList.add('hidden')
    five.classList.add('hidden')
    six.classList.add('hidden')
        viewMore.classList.remove('hidden')
        viewLess.classList.add('hidden')
    }
    
    
    
})