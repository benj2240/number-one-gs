// fetch values from the page
function getFirstLoan(){
    return document.getElementById("FirstLoan").value;
}
function getSecondLoan(){
    return document.getElementById("SecondLoan").value;
}
function getAppraisal(){
    return document.getElementById("Appraisal").value;
}
function getLTV(){
    return document.getElementById("LTV").value;
}
function getCLTV(){
    return document.getElementById("CLTV").value;
}

// derive values based on what is on the page
function calcFirstLoan() {
    return getLTV()*getAppraisal();
}

function calcSecondLoan() {
    return getCLTV()*getAppraisal()-getFirstLoan();
}

function calcAppraisal() {
    if(getCLTV() != "" && getSecondLoan() != ""){
        // try to include second loan and CLTV
        return (getFirstLoan()+getSecondLoan())/getCLTV();
    }else{
        // if one of those is blank, just use first loan and LTV
        return getFirstLoan()/getLTV();
    }
}

function calcLTV() {
    return getFirstLoan()/getAppraisal();
}

function calcCLTV() {
    return (getFirstLoan()+getSecondLoan())/getAppraisal();
}

// display values based on what was derived
function setFirstLoan(){
    document.getElementById("FirstLoan").value = calcFirstLoan();
}
function setSecondLoan(){
    document.getElementById("SecondLoan").value = calcSecondLoan();
}
function setAppraisal(){
    document.getElementById("Appraisal").value = calcAppraisal();
}
function setLTV(){
    document.getElementById("LTV").value = calcLTV();
}
function setCLTV(){
    document.getElementById("CLTV").value = calcCLTV();
}

// attach these functions to the page buttons
document.getElementById("calcFirstLoan").onclick = setFirstLoan;
document.getElementById("calcSecondLoan").onclick = setSecondLoan;
document.getElementById("calcAppraisal").onclick = setAppraisal;
document.getElementById("calcLTV").onclick = setLTV;
document.getElementById("calcCLTV").onclick = setCLTV;
