function obj(id){
    return document.getElementById(id);
}
function getNumericValue(id){
    var val = obj(id).value;
    if(val == "") {val = NaN;}
    return Number(val);
}
function setValue(id, val){
    if(isNaN(val)) {val = "";}
    return obj(id).value = val;
}

function calculateAmounts(){
    var FirstLoan = getNumericValue("FirstLoan");
    var SecondLoan = getNumericValue("SecondLoan");
    var Appraisal = getNumericValue("Appraisal");
    var LTV = getNumericValue("LTV")/100.0;
    var CLTV = getNumericValue("CLTV")/100.0;

    if(!isNaN(FirstLoan) && !isNaN(Appraisal)){
        LTV = FirstLoan / Appraisal;
    }

    if(!isNaN(FirstLoan) && !isNaN(LTV)){
        Appraisal = FirstLoan / LTV;
    }

    if(!isNaN(FirstLoan) && !isNaN(Appraisal)){
        FirstLoan = Appraisal * LTV;
    }

    if(!isNaN(FirstLoan) && !isNaN(SecondLoan) && !isNaN(Appraisal)){
        CLTV = (FirstLoan + SecondLoan) / Appraisal;
    }

    if(!isNaN(CLTV) && !isNaN(FirstLoan) && !isNaN(Appraisal)){
        SecondLoan = Appraisal * CLTV - FirstLoan;
    }

    if(!isNaN(FirstLoan) && !isNaN(SecondLoan) && !isNaN(CLTV)){
        Appraisal = (FirstLoan + SecondLoan) / CLTV;
    }

    if(!isNaN(Appraisal) && !isNaN(SecondLoan) && !isNaN(CLTV)){
        FirstLoan = Appraisal * CLTV - SecondLoan;
    }

    LTV *= 100;
    CLTV *= 100;

    setValue("FirstLoan",FirstLoan);
    setValue("SecondLoan",SecondLoan);
    setValue("Appraisal",Appraisal);
    setValue("LTV",LTV);
    setValue("CLTV",CLTV);
}

function clearAmounts(){
    setValue("FirstLoan","");
    setValue("SecondLoan","");
    setValue("Appraisal","");
    setValue("LTV","");
    setValue("CLTV","");
}

// once the page buttons exist
document.addEventListener('DOMContentLoaded', function(){
    obj("btn-calculate").onclick = calculateAmounts;
    obj("btn-clear").onclick = clearAmounts;
});
