/*-------------------------Guide starts Here------------------------------*/
/*--------------------- Page Name - Guide(Edit)---------------------------*/
//Validation for First Name
let eInputGuidef = document.getElementById("edit_inputGuidefName");
eInputGuidef.addEventListener("change", function () {
  let regforFname = /[a-z]{3}/i;
  let eInputGuidefName = document.getElementById("edit_inputGuidefName").value;
  if (!regforFname.test(eInputGuidefName)) {
    document.getElementById("edit_inputGuidefName").style.borderColor = "red";
  }
});

//Validation for Last Name
let eInputGuidel = document.getElementById("edit_inputGuidelName");
eInputGuidel.addEventListener("change", function () {
  let regforLname = /[a-z]{3,10}/i;
  let eInputGuidelName = document.getElementById("edit_inputGuidelName").value;
  if (!regforLname.test(eInputGuidelName)) {
    document.getElementById("edit_inputGuidelName").style.borderColor = "red";
  }
});

//Validation for Ph No
let eInputCon = document.getElementById("edit_inputContact");
eInputCon.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let eInputContact = document.getElementById("edit_inputContact").value;
  if (!regforeInpurContract.test(eInputContact)) {
    document.getElementById("edit_inputContact").style.borderColor = "red";
  }
});

//validation for Email
let eInpEmail = document.getElementById("edit_inputEmail");
eInpEmail.addEventListener("change", function () {
  let valforEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let eInputEmail = document.getElementById("edit_inputEmail").value;
  if (!valforEmail.test(eInputEmail)) {
    document.getElementById("edit_inputEmail").style.borderColor = "red";
  }
});

//Id validation
let editInput = document.getElementById("edit_inputId");
editInput.addEventListener("change", function () {
  let changeInput = document.getElementById("edit_inputId").value;
  let IdNumber = document.getElementById("edit_IdNumber");

  //Nested Id validation
  IdNumber.addEventListener("change", function () {
    if (changeInput == "pan") {
      let regForPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/g;
      let eIdNumber = document.getElementById("edit_IdNumber").value;
      console.log(eIdNumber);
      if (!regForPan.test(eIdNumber)) {
        document.getElementById("edit_IdNumber").style.borderColor = "red";
      }
    } else if (changeInput == "voter") {
      let regForvoter = /^[A-Z]{3}\d{7}$/g;
      let eIdNumber = document.getElementById("edit_IdNumber").value;
      if (!regForvoter.test(eIdNumber)) {
        document.getElementById("edit_IdNumber").style.borderColor = "red";
      }
    } else if (changeInput == "aadhar") {
      let regForaadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      let eIdNumber = document.getElementById("edit_IdNumber").value;
      if (!regForaadhar.test(eIdNumber)) {
        document.getElementById("edit_IdNumber").style.borderColor = "red";
      }
    } else if (changeInput == "dL") {
      let regFordL = /^(([A-Z]{2}[0-9]{2}))[0-9]{7}$/;
      let eIdNumber = document.getElementById("edit_IdNumber").value;
      if (!regFordL.test(eIdNumber)) {
        document.getElementById("edit_IdNumber").style.borderColor = "red";
      }
    }
  });
});

//Fees validation
let inputFee = document.getElementById("edit_inputFess");
inputFee.addEventListener("change", function () {
  let inputFess = document.getElementById("edit_inputFess").value;
  let integerFees = parseFloat(inputFess).toFixed(2);
  document.getElementById("edit_inputFess").value = integerFees;
});
/*--------------------- Page Name - Guide(Entry)--------------------------*/
//Validation for First Name
let enInputGuidef = document.getElementById("entry_inputGuidefName");
enInputGuidef.addEventListener("change", function () {
  let regforFname = /[a-z]{3}/i;
  let enInputGuidefName = document.getElementById("entry_inputGuidefName").value;
  if (!regforFname.test(enInputGuidefName)) {
    document.getElementById("entry_inputGuidefName").style.borderColor = "red";
  }
});

//Validation for Last Name
let enInputGuidel = document.getElementById("entry_inputGuidelName");
enInputGuidel.addEventListener("change", function () {
  let regforLname = /[a-z]{3,10}/i;
  let enInputGuidelName = document.getElementById("entry_inputGuidelName").value;
  if (!regforLname.test(enInputGuidelName)) {
    document.getElementById("entry_inputGuidelName").style.borderColor = "red";
  }
});

//Validation for Ph No
let enInputCon = document.getElementById("entry_inputContact");
enInputCon.addEventListener("change", function () {
  let regforeInpurContract = /^[9|8|7|6][0-9]{9}$/;
  let enInputContact = document.getElementById("entry_inputContact").value;
  if (!regforeInpurContract.test(enInputContact)) {
    document.getElementById("entry_inputContact").style.borderColor = "red";
  }
});

//validation for Email
let enInpEmail = document.getElementById("entry_inputEmail");
enInpEmail.addEventListener("change", function () {
  let valforEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let enInputEmail = document.getElementById("entry_inputEmail").value;
  if (!valforEmail.test(enInputEmail)) {
    document.getElementById("entry_inputEmail").style.borderColor = "red";
  }
});

//Id validation
let entryInput = document.getElementById("entry_inputId");
entryInput.addEventListener("change", function () {
  let changeInput = document.getElementById("entry_inputId").value;
  
  //Nested Id validation
  let IdNumber = document.getElementById("entry_Idnumber");
  IdNumber.addEventListener("change", function () {
    if (changeInput == "pan") {
      let regForPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/g;
      let eIdNumber = document.getElementById("entry_Idnumber").value;
      console.log(eIdNumber);
      if (!regForPan.test(eIdNumber)) {
        document.getElementById("entry_Idnumber").style.borderColor = "red";
      }
    } else if (changeInput == "voter") {
      let regForvoter = /^[A-Z]{3}\d{7}$/g;
      let eIdNumber = document.getElementById("entry_Idnumber").value;
      if (!regForvoter.test(eIdNumber)) {
        document.getElementById("entry_Idnumber").style.borderColor = "red";
      }
    } else if (changeInput == "aadhar") {
      let regForaadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      let eIdNumber = document.getElementById("entry_Idnumber").value;
      if (!regForaadhar.test(eIdNumber)) {
        document.getElementById("entry_Idnumber").style.borderColor = "red";
      }
    } else if (changeInput == "dL") {
      let regFordL = /^(([A-Z]{2}[0-9]{2}))[0-9]{7}$/;
      let eIdNumber = document.getElementById("entry_Idnumber").value;
      if (!regFordL.test(eIdNumber)) {
        document.getElementById("entry_Idnumber").style.borderColor = "red";
      }
    }
  });
});

//Fees validation
let enInputFee = document.getElementById("entry_inputFees");
enInputFee.addEventListener("change", function () {
  let eninputFess = document.getElementById("entry_inputFees").value;
  let integerFees = parseFloat(eninputFess).toFixed(2);
  document.getElementById("entry_inputFees").value = integerFees;
});
/*-----------------------------Guide Ends Here----------------------------*/
