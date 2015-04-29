function obj(id){
    return document.getElementById(id);
}

// fetch values from the page
function getFirstLoan(){
    return Number(obj("FirstLoan").value);
}
function getSecondLoan(){
    return Number(obj("SecondLoan").value);
}
function getAppraisal(){
    return Number(obj("Appraisal").value);
}
function getLTV(){
    return Number(obj("LTV").value);
}
function getCLTV(){
    return Number(obj("CLTV").value);
}

// derive values based on what is on the page
function calcFirstLoan() {
    return getLTV()*getAppraisal()/100.0;
}

function calcSecondLoan() {
    return getCLTV()*getAppraisal()/100.0-getFirstLoan();
}

function calcAppraisal() {
    if(getCLTV() != "" && getSecondLoan() != ""){
        // try to include second loan and CLTV
        return (getFirstLoan()+getSecondLoan())*100.0/getCLTV();
    }else{
        // if one of those is blank, just use first loan and LTV
        return getFirstLoan()*100.0/getLTV();
    }
}

function calcLTV() {
    return getFirstLoan()*100.0/getAppraisal();
}

function calcCLTV() {
    return (getFirstLoan()+getSecondLoan())*100.0/getAppraisal();
}

// display values based on what was derived
function setFirstLoan(){
    obj("FirstLoan").value = calcFirstLoan();
}
function setSecondLoan(){
    obj("SecondLoan").value = calcSecondLoan();
}
function setAppraisal(){
    obj("Appraisal").value = calcAppraisal();
}
function setLTV(){
    obj("LTV").value = calcLTV();
}
function setCLTV(){
    obj("CLTV").value = calcCLTV();
}

// once the page buttons exist
document.addEventListener('DOMContentLoaded', function(){
    // attach these functions to the page buttons
    obj("calcFirstLoan").onclick = setFirstLoan;
    obj("calcSecondLoan").onclick = setSecondLoan;
    obj("calcAppraisal").onclick = setAppraisal;
    obj("calcLTV").onclick = setLTV;
    obj("calcCLTV").onclick = setCLTV;
});