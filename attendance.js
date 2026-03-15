async function checkStudent(){

let id = document.getElementById("student_id").value;

let student = await db.collection("students").doc(id).get();

if(!student.exists){

alert("ไม่พบรหัสนักเรียน");

return;

}

let data = student.data();

let confirmCheck = confirm(
`${data.name}
ห้อง ${data.class}
เลขที่ ${data.number}

มายืนยันการมาเรียน`
);

if(confirmCheck){

await db.collection("attendance").add({

student_id:id,
name:data.name,
class:data.class,
date:new Date(),
status:"present"

});

alert("เช็คชื่อเรียบร้อย");

}

}
