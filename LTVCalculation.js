document.addEventListener('DOMContentLoaded', function(){
    // fetch values from the page
    function getFirstLoan(){
        return document.getElementByID("FirstLoan").value;
    }
    function getSecondLoan(){
        return document.getElementByID("SecondLoan").value;
    }
    function getAppraisal(){
        return document.getElementByID("Appraisal").value;
    }
    function getLTV(){
        return document.getElementByID("LTV").value;
    }
    function getCLTV(){
        return document.getElementByID("CLTV").value;
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
        document.getElementByID("FirstLoan").value = calcFirstLoan();
    }
    function setSecondLoan(){
        document.getElementByID("SecondLoan").value = calcSecondLoan();
    }
    function setAppraisal(){
        document.getElementByID("Appraisal").value = calcAppraisal();
    }
    function setLTV(){
        document.getElementByID("LTV").value = calcLTV();
    }
    function setCLTV(){
        document.getElementByID("CLTV").value = calcCLTV();
    }

    // attach these functions to the page buttons
    document.getElementByID("calcFirstLoan").onclick = setFirstLoan;
    document.getElementByID("calcSecondLoan").onclick = setSecondLoan;
    document.getElementByID("calcAppraisal").onclick = setAppraisal;
    document.getElementByID("calcLTV").onclick = setLTV;
    document.getElementByID("calcCLTV").onclick = setCLTV;
});