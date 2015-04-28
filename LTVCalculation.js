$(document).ready(function(){
    $("#calc1stLoan").click(function(){
        $("#1stLoan").val(calc1stLoan());
    });
    
    $("#calc2ndLoan").click(function(){
        $("#2ndLoan").val(calc2ndLoan());
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
    
    function get1stLoan() {
        return $("#1stLoan").val();
    }
    
    function get2ndLoan() {
        return $("#2ndLoan").val();
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
    
    function calc1stLoan() {
        return getLTV()*getAppraisal();
    }
    
    function calc2ndLoan() {
        return getCLTV()*getAppraisal()-get1stLoan();
    }
    
    function calcAppraisal() {
        if(getCLTV() != "" && get2ndLoan() != ""){
            // try to include 2nd loan and CLTV
            return (get1stLoan()+get2ndLoan())/getCLTV();
        }else{
            // if one of those is blank, just use 1st loan and LTV
            return get1stLoan()/getLTV();
        }
    }
    
    function calcLTV() {
        return get1stLoan()/getAppraisal();
    }
    
    function calcCLTV() {
        return (get1stLoan()+get2ndLoan())/getAppraisal();
    }
});
