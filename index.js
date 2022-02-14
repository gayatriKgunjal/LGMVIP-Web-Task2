
var textField=$("#result")
function insertNumber(number){
    
   var existingNumbers=textField.val()
   textField.val(existingNumbers+number)
   
}
function clearResult(){
    textField.val('')
}
function calculate(){
   var result= eval(textField.val()) 
   textField.val(result)
//    result=1
//    alert(result)
}

// insertNumber(number);{
//     if(result=1){
//         textField.val('')
//     }
//     else{
//     existingNumbers=textField.val()
//    textField.val(existingNumbers+number)
//     }
// }

function deleteNumber(){
    var presentValue=textField.val()
    if(presentValue!=''){
        textField.val(presentValue.slice(0,-1))
    }
}