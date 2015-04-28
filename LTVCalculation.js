$(document).ready(function(){
    $("#calcFirstLoan").click(function(){
        $("#FirstLoan").val(calcFirstLoan());
    });
    
    $("#calcSecondLoan").click(function(){
        $("#SecondLoan").val(calcSecondLoan());
    });
    
    $("#calcAppraisal").click(function(){
        $("#Appraisal").val(calcAppraisal());
    });
    
    $("#calcLTV").click(function(){
        $("#LTV").val(calcLTV());
    });
    
    $("#calcCLTV").click(function(){
        $("#CLTV").val(calcCLTV());
    });
    
    function getFirstLoan() {
        return $("#FirstLoan").val();
    }
    
    function getSecondLoan() {
        return $("#SecondLoan").val();
    }
    
    function getAppraisal() {
        return $("#Appraisal").val();
    }
    
    function getLTV() {
        return $("#LTV").val();
    }
    
    function getCLTV() {
        return $("#CLTV").val();
    }
    
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
});
