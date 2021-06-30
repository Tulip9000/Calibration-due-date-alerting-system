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
let contactInfo = firebase.database().ref("Information");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
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
  
  
  
  console.log(name, plant, due_date, range, des_accuracy,
    equip_no, calib_freq,intim_days, section,location,equip_desc,last_calib,status,remarks);

  saveContactInfo(name, plant, due_date, range, des_accuracy,equip_no, 
    calib_freq,intim_days, section,location,equip_desc,last_calib,status,remarks);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, plant, due_date, range, 
  des_accuracy, equip_no, calib_freq,intim_days, section,location,equip_desc, last_calib,status, remarks) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
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
}
