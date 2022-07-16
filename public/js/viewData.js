

// fecthing data from server
async function userData(){
    const fetchUser = await fetch('/service/viewuserdata', { method: 'GET' });
    const user = await fetchUser.json();
    displayUserData(user);
}
userData();


// function to display data
const userContainer = document.querySelector('tbody');
function displayUserData(userProfile){
    let users = "";
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
                    <a href="/updateuser" class="pencil"><i class="bi bi-pencil-fill"></i></a>
                    <a onclick="deleteUser('${_id}')" class="delete text-danger"><i class="bi bi-trash-fill"></i></a>
                </td>
            </tr>
         `
    });
    userContainer.innerHTML = users;
}

// delete user data
async function deleteUser(id){
    console.log(id)
    const deleteUser = await fetch(`/service/deleteuser?_id=${id}`,{ method: 'DELETE' });
    const userDeleted = await deleteUser.json();
    userData();
    console.log(userDeleted)
}