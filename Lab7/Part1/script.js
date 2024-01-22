document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var loginData = {
        username: username,
        password: password
    };

    if (loginData.username === 'admin' && loginData.password === '123') {
        displayMessage('Welcome!');
    } else {
        displayMessage('Not registered.');
    }
});

function displayMessage(message) {
    var resultMessageElement = document.getElementById('resultMessage');
    resultMessageElement.innerHTML = '<p>' + message + '</p>';
}
