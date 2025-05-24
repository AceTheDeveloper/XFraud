const users = [
    {
    user_id : 'U008',
    name : 'han lee',
    email : 'hanlee@gmail.com',
    password : 'demo123',
    location : 'Philippines',
    account_age : '60 months',
    acc_bal : '20090.00',
    transactions : []
},

{
    user_id : 'U009',
    name : 'John Doe',
    email : 'johndoe@gmail.com',
    password : 'demo456',
    location : 'China',
    account_age : '78 months',
    acc_bal : '388720.00',
    transactions : []
}

]

document.getElementById('login').addEventListener('click', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const foundUser = users.find((user) => user.email === email && user.password === password );

    if(foundUser){
        alert('Login Success');
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        location.href = 'checkout.html';
    } else{
        alert('User not found');
    }
});