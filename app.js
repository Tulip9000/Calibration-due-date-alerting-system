// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCcGKt0T6eAanZlKs5h-O-42ddGvo39Y9A",
    authDomain: "calibration-due-date-sys.firebaseapp.com",
    databaseURL: "https://calibration-due-date-sys-default-rtdb.firebaseio.com",
    projectId: "calibration-due-date-sys",
    storageBucket: "calibration-due-date-sys.appspot.com",
    messagingSenderId: "483954598961",
    appId: "1:483954598961:web:62db49c0d2cf2dcfca2110",
    measurementId: "G-ZYG1QNPCEH"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("Master-data");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let buisness_unit = document.querySelector(".buisness_unit").value;
  let plant = document.querySelector(".plant").value;
  let due_date = document.querySelector(".due_date").value;
  let range = document.querySelector(".range").value;
  let des_accuracy = document.querySelector(".des_accuracy").value;
  let equip_no = document.querySelector(".equip_no").value;
  let calib_freq = document.querySelector(".calib_freq").value;
  let intim_days = document.querySelector(".intim_days").value;
  let section = document.querySelector(".section").value;
  let location = document.querySelector(".location").value;
  let equip_desc = document.querySelector(".equip_desc").value;
  let last_calib = document.querySelector(".last_calib").value;
  let status = document.querySelector(".status").value;
  let remarks = document.querySelector(".remarks").value;
  
  
  
  console.log(buisness_unit, plant, due_date, range, des_accuracy,
    equip_no, calib_freq,intim_days, section,location,equip_desc,last_calib,status,remarks);

  saveContactInfo(buisness_unit, plant, due_date, range, des_accuracy,equip_no, 
    calib_freq,intim_days, section,location,equip_desc,last_calib,status,remarks);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(buisness_unit, plant, due_date, range, 
  des_accuracy, equip_no, calib_freq,intim_days, section,location,equip_desc, last_calib,status, remarks) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    buisness_unit: buisness_unit,
    plant: plant,
    due_date: due_date,
    range: range,
    des_accuracy: des_accuracy,
    equip_no: equip_no,
    calib_freq: calib_freq,
    intim_days:intim_days,
    section: section,
    location:location,
    equip_desc: equip_desc,
    last_calib: last_calib,
    status: status,
    remarks: remarks
  });

 // window.location.href = "retrieve.html";

}

var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails(){
  var buisness_unit = document.getElementsByClassName("buisness_unit").value;
  var plant = document.getElementsByClassName("plant").value;
  var due_date = document.getElementsByClassName("due_date").value;
  var range = document.getElementsByClassName("range").value;
  var des_accuracy = document.getElementsByClassName("des_accuracy").value;
  var equip_no = document.getElementsByClassName("equip_no").value;
  var calib_freq = document.getElementsByClassName("calib_freq").value;
  var intim_days = document.getElementsByClassName("intim_days").value;
  var section = document.getElementsByClassName("section").value;
  var location  = document.getElementsByClassName("location ").value;
  var equip_desc = document.getElementsByClassName("equip_desc").value;
  var last_calib = document.getElementsByClassName("last_calib").value;
  var status = document.getElementsByClassName("status").value;
  var remarks = document.getElementsByClassName("remarks").value;

//if(!buisness_unit || !plant || !due_date || !range || !des_accuracy || !equip_no
//   || !calib_freq|| !intim_days|| !section|| !location ||!equip_desc||!last_calib||!status||!remarks ){
 //   alert("Please fill all the boxes");
 //   return;
 //}

 var display = document.getElementById("display");
 var newRow = display.insertRow(row);

 var cell1 = newRow.inserCell(0);
 var cell2 = newRow.inserCell(1);
 var cell3 = newRow.inserCell(2);
 var cell4 = newRow.inserCell(3);
 var cell5 = newRow.inserCell(4);
 var cell6 = newRow.inserCell(5);
 var cell7 = newRow.inserCell(6);
 var cell8 = newRow.inserCell(7);
 var cell9 = newRow.inserCell(8);
 var cell10 = newRow.inserCell(9);
 var cell11= newRow.inserCell(10);
 var cell12= newRow.inserCell(11);
 var cell13 = newRow.inserCell(12);
 

 cell1.innerHtml = buisness_unit;
 cell2.innerHtml = plant;
 cell3.innerHtml = due_date;
 cell4.innerHtml = range;
 cell5.innerHtml = des_accuracy;
 cell6.innerHtml = equip_no;
 cell7.innerHtml = calib_freq;
 cell8.innerHtml = intim_days;
 cell8.innerHtml = section;
 cell9.innerHtml = location;
 cell10.innerHtml = equip_desc;
 cell11.innerHtml = last_calib;
 cell12.innerHtml = status;
 cell13.innerHtml = remarks;

 row++;
}

