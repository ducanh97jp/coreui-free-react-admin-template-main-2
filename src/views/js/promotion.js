let h = 23;
let m = 59;
let s = 59;
let data;
function setTime() {
    if(s > 0) {
        s = s-1;
    } else if (s == 0) {
        if(m > 0) {
            m = m-1;
            s = 59;
        } else if ( m == 0) {
            if (h > 0) {
                h = h -1;
                s = 59;
                m = 59;
            }
        }
    }
    document.getElementById("time").innerHTML = '<i class="bi bi-alarm"></i>' + h + ':' + m + ':' + s ;
    document.getElementById("times").innerHTML = '<i class="bi bi-alarm"></i>' + h + ':' + m + ':' + s ;
}
setInterval (setTime, 1000);