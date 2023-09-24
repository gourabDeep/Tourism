/*---------------------------Adventure Starts Here---------------------------*/
/*------------------------Page Name - Adventure(Edit)------------------------*/
//Validation for First Name
let edContactPerFirst = document.getElementById("editContactPerFirst");
edContactPerFirst.addEventListener("change", function () {
  let regforFname = /[a-z]{3}/i;
  let edContactPerF = document.getElementById("editContactPerFirst").value;
  if (!regforFname.test(edContactPerF)) {
    document.getElementById("editContactPerFirst").style.borderColor = "red";
  }
});

//Validation for Last Name
let edContactPerLast = document.getElementById("editContactPerLast");
edContactPerLast.addEventListener("change", function () {
  let regforLname = /[a-z]{3,10}/i;
  let editContactPerL = document.getElementById("editContactPerLast").value;
  if (!regforLname.test(editContactPerL)) {
    document.getElementById("editContactPerLast").style.borderColor = "red";
  }
});

//Id validation
let editConGovId = document.getElementById("editContactGovId");
editConGovId.addEventListener("change", function () {
  let changeInput = document.getElementById("editContactGovId").value;
  
  //Nested Id validation
  let edContactGovIdNo = document.getElementById("editContactGovIdNo");
  edContactGovIdNo.addEventListener("change", function () {
    if (changeInput == "pan") {
      let regForPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/g;
      let eIdNumber = document.getElementById("editContactGovIdNo").value;
      console.log(eIdNumber);
      if (!regForPan.test(eIdNumber)) {
        document.getElementById("editContactGovIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "voter") {
      let regForvoter = /^[A-Z]{3}\d{7}$/g;
      let eIdNumber = document.getElementById("editContactGovIdNo").value;
      if (!regForvoter.test(eIdNumber)) {
        document.getElementById("editContactGovIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "aadhar") {
      let regForaadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      let eIdNumber = document.getElementById("editContactGovIdNo").value;
      if (!regForaadhar.test(eIdNumber)) {
        document.getElementById("editContactGovIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "dL") {
      let regFordL = /^(([A-Z]{2}[0-9]{2}))[0-9]{7}$/;
      let eIdNumber = document.getElementById("editContactGovIdNo").value;
      if (!regFordL.test(eIdNumber)) {
        document.getElementById("editContactGovIdNo").style.borderColor = "red";
      }
    }
  });
});

//Singel Package Cost
let editSiPackC = document.getElementById("editSiPackCost");
editSiPackC.addEventListener("change", function () {
  let SiPackCost = document.getElementById("editSiPackCost").value;
  let integerFees = parseFloat(SiPackCost).toFixed(2);
  document.getElementById("editSiPackCost").value = integerFees;
});

//Group Package Cost
let editGroPackC = document.getElementById("editGroPackCost");
editGroPackC.addEventListener("change", function () {
    let GroPackCost = document.getElementById("editGroPackCost").value;
    let integerFees = parseFloat(GroPackCost).toFixed(2);
    document.getElementById("editGroPackCost").value = integerFees;
});
/*----------------------Page Name - Adventure(Entry)--------------------------*/
//Validation for First Name
let enContactPerFirst = document.getElementById("entryContactPerFirst");
enContactPerFirst.addEventListener("change", function () {
  let regforFname = /[a-z]{3}/i;
  let enContactPerF = document.getElementById("entryContactPerFirst").value;
  if (!regforFname.test(enContactPerF)) {
    document.getElementById("entryContactPerFirst").style.borderColor = "red";
  }
});

//Validation for Last Name
let enContactPerLast = document.getElementById("entryContactPerLast");
enContactPerLast.addEventListener("change", function () {
  let regforLname = /[a-z]{3,10}/i;
  let enContactPerL = document.getElementById("entryContactPerLast").value;
  if (!regforLname.test(enContactPerL)) {
    document.getElementById("entryContactPerLast").style.borderColor = "red";
  }
});

//Id validation
let entryConGovId = document.getElementById("entryContractGovId");
entryConGovId.addEventListener("change", function () {
  let changeInput = document.getElementById("entryContractGovId").value;
  
  //Nested Id validation
  let enContractGovIdNo = document.getElementById("entryContractGovIdNo");
  enContractGovIdNo.addEventListener("change", function () {
    if (changeInput == "pan") {
      let regForPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/g;
      let eIdNumber = document.getElementById("entryContractGovIdNo").value;
      console.log(eIdNumber);
      if (!regForPan.test(eIdNumber)) {
        document.getElementById("entryContractGovIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "voter") {
      let regForvoter = /^[A-Z]{3}\d{7}$/g;
      let eIdNumber = document.getElementById("entryContractGovIdNo").value;
      if (!regForvoter.test(eIdNumber)) {
        document.getElementById("entryContractGovIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "aadhar") {
      let regForaadhar = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
      let eIdNumber = document.getElementById("entryContractGovIdNo").value;
      if (!regForaadhar.test(eIdNumber)) {
        document.getElementById("entryContractGovIdNo").style.borderColor = "red";
      }
    } else if (changeInput == "dL") {
      let regFordL = /^(([A-Z]{2}[0-9]{2}))[0-9]{7}$/;
      let eIdNumber = document.getElementById("entryContractGovIdNo").value;
      if (!regFordL.test(eIdNumber)) {
        document.getElementById("entryContractGovIdNo").style.borderColor = "red";
      }
    }
  });
});

//Singel Package Cost
let entrySiPackC = document.getElementById("entrySiPackCost");
entrySiPackC.addEventListener("change", function () {
  let SiPackCost = document.getElementById("entrySiPackCost").value;
  let integerFees = parseFloat(SiPackCost).toFixed(2);
  document.getElementById("entrySiPackCost").value = integerFees;
});

//Group Package Cost
let entryGrPackC = document.getElementById("entryGroupPackCost");
entryGrPackC.addEventListener("change", function () {
    let GroPackCost = document.getElementById("entryGroupPackCost").value;
    let integerFees = parseFloat(GroPackCost).toFixed(2);
    document.getElementById("entryGroupPackCost").value = integerFees;
});