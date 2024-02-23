let username = prompt("adınızı giriniz");
const DOMAİN = "gmail.com"
let text = "<span>Tarihinde <strong>Kodluyoruz Front-end Web Development Patikası</strong>'nın Javascript bölümü 1. ödevindesiniz.</span>"

let email = username + "@" + DOMAİN


let info = `Merhaba, ${username}  Hoşgeldin! mail adresin: ${email}`
console.log(info)

function tarihSaat(){
    var date = new Date().toLocaleString('tr-TR'); 
document.getElementById('zaman').innerHTML = date;
document.querySelector("#info").innerHTML = info;
document.querySelector("#text").innerHTML = text;
}
setInterval(tarihSaat,)

 