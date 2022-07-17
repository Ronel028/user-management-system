
console.log('Update page')

const userID = document.getElementById('userId').value;
const updateName = document.getElementById('update-name');
const updateEmail = document.getElementById('update-email');
const updateAge = document.getElementById('update-age');

// gender select update
let updateGender = "";
const genderMale = document.getElementById('update-male');
const genderFemale = document.getElementById('update-female');
if(genderMale.checked === true) { updateGender = genderMale.value; }
genderMale.addEventListener('change', function(){
    updateGender = this.value
})
if(genderFemale.checked === true) { updateGender = genderFemale.value }
genderFemale.addEventListener('change', function(){
    updateGender = this.value
})
// gender select update end

// status select update
let updateStatus = "";
const statusActive = document.getElementById('update-active');
if(statusActive.checked === true) { updateStatus = statusActive.value; }
statusActive.addEventListener('change', function(){
    updateStatus = this.value
})
const statusInActive = document.getElementById('update-inactive');
if(statusInActive.checked === true) { updateStatus = statusInActive.value; }
statusInActive.addEventListener('change', function(){
    updateStatus = this.value
})
// status select update end

// form submit
const updateForm = document.getElementById('update-user');
updateForm.addEventListener('submit', function(e){
    e.preventDefault();
    updateUser();
})

// updating data to database function
async function updateUser(){
    const userUpdate = await fetch(`/service/updateuser?_id=${userID}`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: updateName.value,
            email: updateEmail.value,
            age: updateAge.value,
            gender: updateGender,
            status: updateStatus
        }) 
    }) 
    const user = await userUpdate.json();
    updateSuccess(user)
    console.log(user)
}

const messageContainer = document.getElementById('alert-message');
function updateSuccess(user){
    const { status } = user;
    if(status === 'ok'){
        resetUpdateData();
        messageContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
            </svg>
            <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <strong><div>Update Success!</div></strong>
            </div>
        `
        setTimeout(function(){
            messageContainer.innerHTML = '';
        }, 2000)
        
    }else if(status === 'Empty field'){
        messageContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
            </svg>
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <strong><div>Empty field!</div></strong>
            </div>
        `
        setTimeout(function(){
            messageContainer.innerHTML = '';
        }, 2000)
    }else{
        messageContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
            </svg>
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <strong><div>Error occur while updating user data!</div></strong>
            </div>
        `
        setTimeout(function(){
            messageContainer.innerHTML = '';
        }, 2000)
    }
}

// function to reset input data
function resetUpdateData(){
    updateName.value = '';
    updateEmail.value = '';
    updateAge.value = '';
    genderMale.checked = false;
    genderFemale.checked = false;
    statusActive.checked = false;
    statusInActive.checked = false;
}