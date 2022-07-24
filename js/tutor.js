function starttutor() {
    document.getElementById('tutor1').style.zIndex = 1000
    var div = document.createElement('div')
    div.style.background = '#000'
    div.style.opacity = .3
    div.style.zIndex = 999
    div.style.position = 'absolute'
    div.style.width = '100vw'
    div.style.height = '100vh'
    document.body.prepend(div)
}