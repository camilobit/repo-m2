

const responseHandler = (response) => {
    //const element = $('#userList')[0]
    const [usersList] = $('#usersList')
    
    response.forEach(user => {    
        const newLi = document.createElement('li');
        newLi.innerText = user.name
        usersList.appendChild(newLi);
    });
}

const [loadUsers] = $('#loadUsers')

const fetchUsers = () => {
    $.get('https://jsonplaceholder.typicode.com/users', responseHandler)
}

loadUsers.addEventListener('click', fetchUsers)