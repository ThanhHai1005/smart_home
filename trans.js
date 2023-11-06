let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#led');
let btn2 = document.querySelector('#btn2');


btn1.addEventListener('click', ()=>{
    img1.src = './img/denon.gif'
    firebase.database().ref("thietbi1").set({den1: 1})
})
btn2.addEventListener('click', ()=>{
    img1.src = './img/den1.png';
    firebase.database().ref("thietbi1").set({den1: 0})
})











// let btn3 = document.querySelector('#btn3');
// let img2 = document.querySelector('#call');
// let btn4 = document.querySelector('#btn4');
// // functions nut bam
// btn3.addEventListener('click', ()=>{
//     img2.src = './img/phonerun.gif'; 
//     firebase.database().ref("thietbi2").set({dienthoai:1})
// })

// btn4.addEventListener('click', ()=>{
//     img2.src = './img/mobile-1976104_1280.png';
//     firebase.database().ref("thietbi2").set({dienthoai:0})
// })





















// // khoi tao cac thong s
// let btn5 = document.querySelector('#btn5');
// let img3 = document.querySelector('#loa');
// let btn6 = document.querySelector('#btn6');

// // functions nut bam
// btn5.addEventListener('click', ()=>{
//      img3.src = './img/loaon.gif' ;
//      firebase.database().ref("thietbi3").set({loa:1})

// })
// btn6.addEventListener('click', ()=>{
//     img3.src = './img/loa.png';
//     firebase.database().ref("thietbi3").set({loa: 0})

// })







const firebaseConfig = {
    apiKey: "avWxy4yyfaipVCy39zbMi6qk5ZmZPrcqG3oXqQq9",
    authDomain: "tt-iot-esp32.firebaseapp.com",
    databaseURL: "https://tt-iot-esp32-default-rtdb.firebaseio.com",
    projectId: "tt-iot-esp32",
    storageBucket: "tt-iot-esp32.appspot.com",
    messagingSenderId: "91524795957",
    appId: "1:91524795957:web:84f6d4e03352e20ba1eb7c",
    measurementId: "G-CN9Y8E0NCK"
    };
firebase.initializeApp(firebaseConfig);

firebase.database().ref("Nhiet do 1").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = "Temperature: " + data + "°C";
});
firebase.database().ref("Do am 1").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("doam1").innerHTML = "Humidity: " + data + "%";
});

firebase.database().ref("Nhiet do 2").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo2").innerHTML = "Temperature: " + data + "°C";
});
firebase.database().ref("Do am 2").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("doam2").innerHTML = "Humidity: " + data + "%";
});


firebase.database().ref("Nhiet do 3").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo3").innerHTML = "Temperature: " + data + "°C";
});
firebase.database().ref("Do am 3").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("doam3").innerHTML = "Humidity: " + data + "%";
});


firebase.database().ref("Nhiet do 4").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo4").innerHTML = "Temperature: " + data + "°C";
});
firebase.database().ref("Do am 4").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("doam4").innerHTML = "Humidity: " + data + "%";
});
firebase.database().ref("Trang thai mua").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("rain").innerHTML = "Weather forecast:" + data + "";
});