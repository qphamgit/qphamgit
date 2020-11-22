let id, animation, images, timeout, pos = 0;
window.onclick = resetTimer;
function start () {
    if (id) clearInterval(id);
    document.getElementById('stop').disabled = false;
    document.getElementById('animation').disabled = true;
    animation = document.getElementById("text-area").value;
    images = animation.split("=====\n");
    if (images.length < 2) {
        images = [];
        animation.split('').reduce(function(pV, cV){
            pV = pV+cV;
            images.push(pV);
            return pV;}, images);
    }
    if (document.getElementById("turbo").checked) id = setInterval(frame, 50);
    else id = setInterval(frame, 250);
}
function idleDisplay() {
    if (id) clearInterval(id);
    document.getElementById('animation').disabled = false;
    document.getElementById("text-area").value = animation;
}
function frame() {
    pos++;
    if (pos >= images.length) pos = 0;
    document.getElementById("text-area").value = images[pos];
}
function stop () {
    if (id) clearInterval(id);
    document.getElementById("text-area").value = animation;
    document.getElementById('animation').disabled = false;
}
function changeStyle() {
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}
function changeText() {
    document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
}
function changeSpeed() {
    if (id) clearInterval(id);
    if (document.getElementById("turbo").checked) id = setInterval(frame, 50);
    else id = setInterval(frame, 250);
}
function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(idleDisplay, 10000);
}