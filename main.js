function getId (id){
    return document.getElementById(id)
}

function fadeInOut (e){
    if (e.target.classList[0] == 'simpson'){
        e.target.classList.toggle('faded')
    }
}

window.onload = () => {
    getId('container').addEventListener(('click'), (e) => fadeInOut(e))
    document.querySelectorAll('.simpson').forEach((character) => {
        character.classList.remove('hide')
    })
}