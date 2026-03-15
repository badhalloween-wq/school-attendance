function openQR(){

let room = prompt("กรอกห้อง เช่น 1/1");

let today = new Date().toISOString().slice(0,10);

let data = room + "_" + today;

let qr = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${data}`;

document.getElementById("content").innerHTML =
`
<h2>QR Check-in ห้อง ${room}</h2>
<img src="${qr}">
`;

}
