
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
    console.log(user)
}