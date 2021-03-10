async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log("worked")
        document.location.replace('/');
    } else {
        console.log("didnt work")
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);