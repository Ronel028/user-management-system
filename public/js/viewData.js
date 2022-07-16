

// fecthing data from server
const loadingData = document.getElementById('loading-data');
async function userData(){
    loadingData.classList.remove('d-none');
    const fetchUser = await fetch('/service/viewuserdata', { method: 'GET' });
    const user = await fetchUser.json();
    displayUserData(user);
    loadingData.classList.add('d-none');
    
}
userData();


// function to display data
const userContainer = document.querySelector('tbody');
function displayUserData(userProfile){
    let users = "";
    if(userProfile.length === 0){
        userContainer.innerHTML = '<tr><td colspan="6" class="text-center">No user data</td></tr>';
    }else{
        userProfile.forEach(user => {
            const { _id, name, email, age, gender, status } = user;
            users += `
               <tr>
                   <td>${name}</td>
                   <td>${email}</td>
                   <td>${age}</td>
                   <td>${gender}</td>
                   <td>${status}</td>
                   <td class="action">
                       <a href="/updateuser/${name}/${email}/${age}/${gender}/${status}?_id=${_id}" class="pencil"><i class="bi bi-pencil-fill"></i></a>
                       <a onclick="deleteUser('${_id}')" class="delete text-danger"><i class="bi bi-trash-fill"></i></a>
                   </td>
               </tr>
            `
       });
       userContainer.innerHTML = users;
    }
    
}

// delete user data
const deleteLoading = document.getElementById('loading');
async function deleteUser(id){
    console.log(id)
    deleteLoading.classList.remove('d-none')
    const deleteUser = await fetch(`/service/deleteuser?_id=${id}`,{ method: 'DELETE' });
    const userDeleted = await deleteUser.json();
    userData();
    deleteLoading.classList.add('d-none');
    serverMessage(userDeleted);
}

// server response in delete function
const deleteAlert = document.getElementById('delete-alert-container');
function serverMessage(message){
    if(message.status === 'ok'){
        deleteAlert.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Remove user succesfull</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
           `
        setTimeout(function(){
            deleteAlert.innerHTML = '';
        }, 2000)
    }else{
        deleteAlert.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Delete failed</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        setTimeout(function(){
            deleteAlert.innerHTML = '';
        }, 2000)
    }
}