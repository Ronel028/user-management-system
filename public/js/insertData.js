
 // declaration
 const userName = document.getElementById('name');
 const userEmail = document.getElementById('email');
 const userAge = document.getElementById('age');
 
 let gender = "";
 // gender choices
 const userGenderMale = document.getElementById('male');
 userGenderMale.addEventListener('change', function(){
     gender = this.value;
 })
 const userGenderFemale = document.getElementById('female');
 userGenderFemale.addEventListener('change', function(){
     gender = this.value
 })
 // end

 // status choices
 let userStatus = "";
 const userStatusActive = document.getElementById('active');
 userStatusActive.addEventListener('change', function(){
     userStatus = this.value
 })
 const userStatusInActive = document.getElementById('inactive');
 userStatusInActive.addEventListener('change', function(){
     userStatus = this.value
 })
 // end

 // form event
 const form = document.getElementById('insert-form');
 form.addEventListener('submit', async function(e){
     e.preventDefault();

     const insertUser = await fetch('/service/insertuser', {
         method: "POST",
         headers: {"content-type": "application/json"},
         body: JSON.stringify({
             name: userName.value,
             email: userEmail.value,
             age: userAge.value,
             gender: gender,
             status: userStatus
         })
     })
     const response = await insertUser.json();
     resetInput();
     serverResponse(response);

 })

 // server response
 function serverResponse(serverMessage){
     const alertContainer = document.getElementById('alert-container');
     if(serverMessage.message === 'Save Successfull'){
         alertContainer.innerHTML = `
                     <div class="alert alert-success alert-dismissible fade show" role="alert">
                         <strong>${serverMessage.message}</strong>
                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>
             `
     }else{
         alertContainer.innerHTML = `
                     <div class="alert alert-danger alert-dismissible fade show" role="alert">
                         <strong>${serverMessage.message}</strong>
                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>
         `
     }
 }

 // reset form input
 function resetInput(){
     userName.value = '';
     userEmail.value = '';
     userAge.value = '';
     userGenderMale.checked = false;
     userGenderFemale.checked = false;
     userStatusActive.checked = false;
     userStatusInActive.checked = false;
 }
