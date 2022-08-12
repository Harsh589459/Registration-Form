
function validate() {
    let firstNameInput= document.getElementById('first-name').value
 let lastNameInput= document.getElementById('last-name').value
 let emailInput= document.getElementById('email').value
 let cityInput= document.getElementById('city').value
 let stateInput= document.getElementById('state').value
 let zipInput= document.getElementById('zip').value
 let tncInput = document.getElementById('tnc').checked

 let error = false
 
 if(firstNameInput.length>=1){
    document.getElementById('first-name-valid').style.display='block'
    document.getElementById('first-name-invalid').style.display='none'


 }
 else{
    document.getElementById('first-name-invalid').style.display='block'
    document.getElementById('first-name-valid').style.display='none'
    error = true



 }
 if(lastNameInput.length>=1){
   document.getElementById('last-name-valid').style.display='block'
   document.getElementById('last-name-invalid').style.display='none'
 }
 else{
   document.getElementById('last-name-valid').style.display='none'
   document.getElementById('last-name-invalid').style.display='block'
   error = true

 }
 /* Email
 -Whether exists?
 -@
 -. 
 -After last . there should atleast  2 characters like .com .in .org
-First character cannot be @

 */
// if string is empty then else part we learn bcoz empty string is falsy value so we dont write length is greater than or equal to 1
//ankit@gmail.in
//Index of .: 11
//Length of String: 14

if(emailInput &&  emailInput.includes('@') && 
emailInput.includes('.') && 
emailInput.lastIndexOf('.') <=emailInput.length  -3 &&
emailInput.indexOf('@') !==0)
{
   document.getElementById('email-valid').style.display='block'
   document.getElementById('email-invalid').style.display='none'
}
else{
   document.getElementById('email-valid').style.display='none'
   document.getElementById('email-invalid').style.display='block'
   error = true

}
if(cityInput && cityInput.length>=3){
   document.getElementById('city-valid').style.display='block'
   document.getElementById('city-invalid').style.display='none'
}
else{
   document.getElementById('city-valid').style.display='none'
   document.getElementById('city-invalid').style.display='block'
   error = true

}
if(zipInput && zipInput.length==6 && !isNaN(parseInt(zipInput))){
   document.getElementById('zip-valid').style.display='block'
   document.getElementById('zip-invalid').style.display='none'
}
else{
   document.getElementById('zip-valid').style.display='none'
   document.getElementById('zip-invalid').style.display='block'
   error = true

}

if(tncInput){
   document.getElementById("tnc-invalid").style.display='none';

}
else{
   document.getElementById("tnc-invalid").style.display='block';
   error = true


}

if(stateInput!='none'){
   document.getElementById('state-valid').style.display="block";
   document.getElementById('state-invalid').style.display="none";
}
else{
   document.getElementById('state-valid').style.display="none";
   document.getElementById('state-invalid').style.display="block";
   error = true


}

if(!error){
   alert('Your Details have been saved successfully')
   document.getElementById('first-name').value=''
   document.getElementById('last-name').value=''
document.getElementById('email').value=''
  document.getElementById('city').value=''
  document.getElementById('state').value='none'
 document.getElementById('zip').value=''
document.getElementById('tnc').checked=false

document.getElementById('first-name-valid').style.display='none'
document.getElementById('last-name-valid').style.display='none'
document.getElementById('email-valid').style.display='none'
document.getElementById('city-valid').style.display='none'
document.getElementById('zip-valid').style.display='none'
document.getElementById('state-valid').style.display="none";


}
}

