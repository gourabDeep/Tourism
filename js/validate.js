//edit or entry function
function editOnEntryOff() {
  document.getElementById('editLocationForm').style.display = 'block';
  document.getElementById('entryLocationForm').style.display = 'none';
}
function entryOnEditOff() {
  document.getElementById('editLocationForm').style.display = 'none';
  document.getElementById('entryLocationForm').style.display = 'block';
}



//Property

// //location Name
// function PropertyButton_edit() {
//   const plocationName_edit = document.getElementById('plocationName_edit').value;
//   const locationNameValidation = /[a-z]{3}/i;
//   if (!locationNameValidation.test(plocationName_edit)) {
//     document.getElementById('plocationName_edit').style.borderColor = 'red';
//     document.getElementById('plocationName_edit').style.backgroundColor = '#FBD6CB';
//   }

//   // //map
//   // const mapLocation_edit = document.querySelector('#mapLocation_edit').value;
//   // const mapLocationValidate = /[https]/;
//   // if(!mapLocation_edit.includes(mapLocationValidate)){
//   //   document.getElementById('plocationName_edit').style.borderColor='red';
//   //      document.getElementById('plocationName_edit').style.backgroundColor='#FBD6CB';
//   // }
//   //ph number
//   var phno = document.getElementById('inputNumber_edit').value;
//   const valid = /^(0|\91)?[6789]\d{9}$/;
//   if (!valid.test(phno)) {
//     document.getElementById(id).style.borderColor = 'red';
//     document.getElementById(id).style.backgroundColor = '#FBD6CB';
//   }
// }

/*--------------------------Edit Location Form Validation------------------------------*/

//Location

function editLocationName() {
  const editLocationName = document.getElementById('locationName_edit').value;
  const check = /[a-z]{3}/i;
  if (!check.test(editLocationName)) {
    document.getElementById('locationName_edit').style.borderBottom = 'red';
  }
}

//PinCode
function editPincode() {
  const locationPincode_edit = document.getElementById('locationPincode_edit').value;
  const check = /[/d]{6}/;
  if (!check.value(locationPincode_edit)) {
    document.getElementById('locationPincode_edit').style.borderBottom = 'red';
  }
}
//description
function editDescription() {
  const locationDescription_edit = document.getElementById('locationDescription_edit').value;
  const check = /[a-z]{10,200}/i;
  if (!check.test(locationDescription_edit)) {
    document.getElementById('locationDescription_edit').style.borderBottom = 'red';
  }
}

/*------------------------------------------Entry Location Form Validation---------------------------*/

//location

function entryLocationName() {
  const locationName_entry = document.getElementById('locationName_entry').value;
  const check = /[a-z]{3}/i;
  if (!check.value(locationName_entry)) {
    document.getElementById('locationName_entry').style.borderBottom = 'red';
  }
}

//PinCode
function entryPinCode() {
  const locationPincode_entry = document.getElementById('locationPincode_entry').value;
  const check = /[0-9]{6}/;
  if (!check.value(locationPincode_entry)) {
    document.getElementById('locationPincode_entry').style.borderBottom = 'red';
  }
}

//Description

function entryDescription() {
  const locationDescription_entry = document.getElementById('locationDescription_entry').value;
  const check = /[a-z]{10,200}/i;
  if (!check.test(locationDescription_entry)) {
    document.getElementById('locationDescription_entry').style.borderBottom = 'red';
  }
}

/*Edit Property Validation*/

//Location

function editPropertylocationName() {
  const plocationName_edit = document.getElementById('plocationName_edit').value;
  const check = /[a-z]{3}/i;
  if (!check.value(plocationName_edit)) {
    document.getElementById('plocationName_edit').style.borderBottom = 'red';
  }
}
//Hotel Name
function editHotelName() {
  const hotelname_edit = document.getElementById('hotelname_edit').value;
  const check = /[a-z]{3}/i;
  if (!check.value(hotelname_edit)) {
    document.getElementById('hotelname_edit').style.borderBottom = 'red';
  }
}
//Street
function editStreet() {
  const street_edit = document.getElementById('street_edit').value;
  const check = /[\w]/;
  if (!check.value(street_edit)) {
    document.getElementById('street_edit').style.borderBottom = 'red';
  }
}
//City

function editCity() {
  const City_edit = document.getElementById('City_edit').value;
  const check = /[a-z]{3}/i;
  if (!check.value(City_edit)) {
    document.getElementById('City_edit').style.borderBottom = 'red';
  }
}
//pincode
function pEditPincode() {
  const locationPincode_entry = document.getElementById('pPincode_edit').value;
  const check = /[0-9]{6}/;
  if (!check.value(locationPincode_entry)) {
    document.getElementById('pPincode_edit').style.borderBottom = 'red';
  }
}
//contact no
let edContact = document.getElementById("pContact_edit");
edContact.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let DriverContact = document.getElementById("pContact_edit").value;
  if (!regforeInpurContract.test(DriverContact)) {
    document.getElementById("pContact_edit").style.borderColor = "red";
  }
});
//alternative contact no
let eAlternativeContact = document.getElementById("pAternative_edit");
eAlternativeContact.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let DriverContact = document.getElementById("pAternative_edit").value;
  if (!regforeInpurContract.test(DriverContact)) {
    document.getElementById("pAternative_edit").style.borderColor = "red";
  }
});
//Manager
let eManagerContact = document.getElementById("pManager_edit");
eManagerContact.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let DriverContact = document.getElementById("pManager_edit").value;
  if (!regforeInpurContract.test(DriverContact)) {
    document.getElementById("pManager_edit").style.borderColor = "red";
  }
});
//Description

function pEditDescription() {
  const locationDescription_entry = document.getElementById('pDescription_edit').value;
  const check = /[a-z]{10,200}/i;
  if (!check.test(locationDescription_entry)) {
    document.getElementById('pDescription_edit').style.borderBottom = 'red';
  }
}
