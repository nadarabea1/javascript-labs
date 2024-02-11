document.addEventListener("DOMContentLoaded", function() {
    fetchUserData();
});

function fetchUserData() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            displayUserData(data.data);
        })
        .catch(error => console.log('Error fetching user data:', error));
}

function displayUserData(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; 

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const image = document.createElement('img');
        image.src = user.avatar;
        image.alt = 'User Avatar';

        const email = document.createElement('p');
        email.textContent = user.email;

        userCard.appendChild(image);
        userCard.appendChild(email);
        userContainer.appendChild(userCard);
    });
}