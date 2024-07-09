const uri = "https://jsonplaceholder.typicode.com/users";

async function obtainUserData() {
    const response = await fetch(uri);
    const users = await response.json();
    const resultsBody = document.getElementById('resultsBody');
    users.forEach(user => {
        const row = `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.address.city}</td></tr>`;
        resultsBody.insertAdjacentHTML('beforeend', row);
    });
    console.log(users);
}


async function requestInformation() {
    const userId = document.getElementById('userId').value;
    await requestUserDataById(userId); 
}


async function requestUserDataById(id) {
    try {
        const response = await fetch(`${uri}/${id}`);
        const user = await response.json();
        console.log(user); 
        document.getElementById('resultData').innerHTML = 'Name: ' + user.name + '<br>Phone: ' + user.phone;
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('button').addEventListener('click', requestInformation);
});

obtainUserData();