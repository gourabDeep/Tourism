/*---------------------------Driver Starts Here---------------------------*/
/*------------------------Page Name - Driver(Edit)------------------------*/
//Validation for First Name
let edDriverfName = document.getElementById("edit_driverfName");
edDriverfName.addEventListener("change", function () {
  let regforFname = /[a-z]{3}/i;
  let DriverfName = document.getElementById("edit_driverfName").value;
  if (!regforFname.test(DriverfName)) {
    document.getElementById("edit_driverfName").style.borderColor = "red";
  }
});

//Validation for Last Name
let edDriverlName = document.getElementById("edit_driverlName");
edDriverlName.addEventListener("change", function () {
  let regforLname = /[a-z]{3,10}/i;
  let DriverlName = document.getElementById("edit_driverlName").value;
  if (!regforLname.test(DriverlName)) {
    document.getElementById("edit_driverlName").style.borderColor = "red";
  }
});

//Validation for Ph No
let edDriverContact = document.getElementById("edit_DriverContact");
edDriverContact.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let DriverContact = document.getElementById("edit_DriverContact").value;
  if (!regforeInpurContract.test(DriverContact)) {
    document.getElementById("edit_DriverContact").style.borderColor = "red";
  }
});

//validation for Email
let edDriverEmail = document.getElementById("edit_DriverEmail");
edDriverEmail.addEventListener("change", function () {
  let valforEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let DriverEmail = document.getElementById("edit_DriverEmail").value;
  if (!valforEmail.test(DriverEmail)) {
    document.getElementById("edit_DriverEmail").style.borderColor = "red";
  }
});

//Id validation
let edDriverGovId = document.getElementById("edit_DriverGovId");
edDriverGovId.addEventListener("change", function () {
  let changeInput = document.getElementById("edit_DriverGovId").value;
  
  //Nested Id validation
  let edDriverIdNo = document.getElementById("edit_DriverIdNo");
  edDriverIdNo.addEventListener("change", function () {
    if (changeInput == "voter") {
      let regForvoter = /^[A-Z]{3}\d{7}$/g;
      let DriverIdNo = document.getElementById("edit_DriverIdNo").value;
      if (!regForvoter.test(DriverIdNo)) {
        document.getElementById("edit_DriverIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "aadhar") {
      let regForaadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      let DriverIdNo = document.getElementById("edit_DriverIdNo").value;
      if (!regForaadhar.test(DriverIdNo)) {
        document.getElementById("edit_DriverIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "dL") {
      let regFordL = /^(([A-Z]{2}[0-9]{2}))[0-9]{7}$/;
      let DriverIdNo = document.getElementById("edit_DriverIdNo").value;
      if (!regFordL.test(DriverIdNo)) {
        document.getElementById("edit_DriverIdNo").style.borderColor = "red";
      }
    }
  });
});

//Fees validation
let edDriverFees = document.getElementById("edit_DriverFees");
edDriverFees.addEventListener("change", function () {
  let DriverFees = document.getElementById("edit_DriverFees").value;
  let integerFees = parseFloat(DriverFees).toFixed(2);
  document.getElementById("edit_DriverFees").value = integerFees;
});
/*----------------------Page Name - Driver(Entry)--------------------------*/
//Validation for First Name
let enDriverfName = document.getElementById("entry_DriverfName");
enDriverfName.addEventListener("change", function () {
  let regforFname = /[a-z]{3}/i;
  let DriverfName = document.getElementById("entry_DriverfName").value;
  if (!regforFname.test(DriverfName)) {
    document.getElementById("entry_DriverfName").style.borderColor = "red";
  }
});

//Validation for Last Name
let enDriverlName = document.getElementById("entry_DriverlName");
enDriverlName.addEventListener("change", function () {
  let regforLname = /[a-z]{3,10}/i;
  let DriverlName = document.getElementById("entry_DriverlName").value;
  if (!regforLname.test(DriverlName)) {
    document.getElementById("entry_DriverlName").style.borderColor = "red";
  }
});

//Validation for Ph No
let enDriverContactNo = document.getElementById("entry_DriverContactNo");
enDriverContactNo.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let DriverContact = document.getElementById("entry_DriverContactNo").value;
  if (!regforeInpurContract.test(DriverContact)) {
    document.getElementById("entry_DriverContactNo").style.borderColor = "red";
  }
});

//validation for Email
let enDriverEmail = document.getElementById("entry_DriverEmail");
enDriverEmail.addEventListener("change", function () {
  let valforEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let DriverEmail = document.getElementById("entry_DriverEmail").value;
  if (!valforEmail.test(DriverEmail)) {
    document.getElementById("entry_DriverEmail").style.borderColor = "red";
  }
});

//Id validation
let enDriverGovId = document.getElementById("entry_DriverGovId");
enDriverGovId.addEventListener("change", function () {
  let changeInput = document.getElementById("entry_DriverGovId").value;
  
  //Nested Id validation
  let enDriverIdNo = document.getElementById("entry_DriverIdNo");
  enDriverIdNo.addEventListener("change", function () {
    if (changeInput == "voter") {
      let regForvoter = /^[A-Z]{3}\d{7}$/g;
      let DriverIdNo = document.getElementById("entry_DriverIdNo").value;
      if (!regForvoter.test(DriverIdNo)) {
        document.getElementById("entry_DriverIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "aadhar") {
      let regForaadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      let DriverIdNo = document.getElementById("entry_DriverIdNo").value;
      if (!regForaadhar.test(DriverIdNo)) {
        document.getElementById("entry_DriverIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "dL") {
      let regFordL = /^(([A-Z]{2}[0-9]{2}))[0-9]{7}$/g;
      let DriverIdNo = document.getElementById("entry_DriverIdNo").value;
      if (!regFordL.test(DriverIdNo)) {
        document.getElementById("entry_DriverIdNo").style.borderColor = "red";
      }
    }
  });
});

//Fees validation
let enDriverFees = document.getElementById("entry_DriverFees");
enDriverFees.addEventListener("change", function () {
  let DriverFees = document.getElementById("entry_DriverFees").value;
  let integerFees = parseFloat(DriverFees).toFixed(2);
  document.getElementById("entry_DriverFees").value = integerFees;
});