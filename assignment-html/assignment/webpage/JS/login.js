const userList = [
    {
        username: "admin",
        password: "admin",
        name: "admin",
        designation: "Senior Developer",
        location: "Masjid Banda,Hyderabad",
        phone: 9450788108,
        email: "admin@beehyv.com",
        link: "www.beehyv.com",
        language: "English",
        employeeID: 451,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxvnZJAcXgOMRh6fmtUdsyel6c997RQB80Q&usqp=CAU"
    },
    {
        username: "vineetks",
        password: "vineetks",
        name: "Vineet Kumar Singh",
        designation: "Developer",
        location: "Hyderabad",
        phone: 8234567890,
        email: "vineet.k@beehyv.com",
        link: "www.beehyv.com",
        language: "English",
        employeeID: 452,
        image: "https://cdn.pixabay.com/photo/2022/09/08/20/58/sea-7441916__340.jpg"
    },
    {
        username: "sourabh",
        password: "sourabh",
        name: "Sourabh Aggarwal",
        designation: "Developer Trainee",
        location: "Hyderabad",
        phone: 9413231121,
        email: "sourabh.a@beehyv.com",
        link: "www.beehyv.com",
        language: "English",
        employeeID: 463,
        image: "https://cdn.pixabay.com/photo/2021/11/25/20/52/river-6824576__340.jpg"
    },
    {
        username: "kailash",
        password: "kailash",
        name: "Kailash Moond",
        designation: "Developer Trainee",
        location: "Hyderabad",
        phone: 7234567890,
        email: "kailash@beehyv.com",
        link: "www.beehyv.com",
        language: "English",
        employeeID: 454,
        image: "https://cdn.pixabay.com/photo/2022/08/05/05/59/korea-7366036__340.jpg"
    }
]


function checkLogin() {
    if (localStorage.getItem('name')) {
        window.location.href = "webpage1.html";
    }
}


function login() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    for (let i = 0; i < userList.length; i++) {
        if (user == userList[i].username && pass == userList[i].password) {
            localStorage.setItem("name", JSON.stringify(userList[i].name));
            localStorage.setItem("designation", JSON.stringify(userList[i].designation));
            localStorage.setItem("location", JSON.stringify(userList[i].location));
            localStorage.setItem("phone", JSON.stringify(userList[i].phone));
            localStorage.setItem("email", JSON.stringify(userList[i].email));
            localStorage.setItem("link", JSON.stringify(userList[i].link));
            localStorage.setItem("language", JSON.stringify(userList[i].language));
            localStorage.setItem("employeeID", JSON.stringify(userList[i].employeeID));
            window.location.href = "webpage1.html";
            return true;
        }
    }
    alert("incorrect details");
    return false;
}

function clearStorage() {
    localStorage.clear();
}



function details() {
    if (localStorage.getItem('name')) {
        document.querySelector("#userName").innerHTML = JSON.parse(localStorage.getItem('name'));
        document.querySelector("#designation").innerHTML = JSON.parse(localStorage.getItem('designation'));
        document.querySelector("#location").innerHTML = JSON.parse(localStorage.getItem('location'));
        document.querySelector("#phone").innerHTML = JSON.parse(localStorage.getItem('phone'));
        document.querySelector("#mail").innerHTML = JSON.parse(localStorage.getItem('email'));
        document.querySelector("#plink").innerHTML = JSON.parse(localStorage.getItem('link'));
        document.querySelector("#language").innerHTML = JSON.parse(localStorage.getItem('language'));
    }
    else {
        window.location.href = "login.html";
    }
}


function save() {
    localStorage.setItem("name", JSON.stringify(document.getElementById("uname").value));
    localStorage.setItem("designation", JSON.stringify(document.getElementById("des").value));
    localStorage.setItem("location", JSON.stringify(document.getElementById("add").value));
    localStorage.setItem("phone", JSON.stringify(document.getElementById("cont").value));
    localStorage.setItem("email", JSON.stringify(document.getElementById("email").value));
    localStorage.setItem("link", JSON.stringify(document.getElementById("linkw").value));
    localStorage.setItem("language", JSON.stringify(document.getElementById("lang").value));
    details();
}




function signUp(){
    localStorage.clear();
}


function validate() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date(new Date());
    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let date = today.getDate() - dob.getDate();
    if (date < 0) {
        month -= 1;
    }
    if (month < 0) {
        age -= 1;
    }
    if (age < 20) {
        alert("incorrect Date of Birth");
        return false;
    }

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].employeeID == document.getElementById("employeeID").value) {
            alert("Employee ID already exists");
            return false;
        }
    }

    if (String(document.getElementById("phone").value).length != 10) {
        alert("Enter 10 digit contact number");
        return false;
    }

    let x = document.getElementById("firstname").value + " " + document.getElementById("lastname").value;
    localStorage.setItem("name", JSON.stringify(x));
    localStorage.setItem("designation", JSON.stringify(document.getElementById("designation").value));
    localStorage.setItem("location", JSON.stringify(document.getElementById("address").value));
    localStorage.setItem("phone", JSON.stringify(document.getElementById("phone").value));
    localStorage.setItem("email", JSON.stringify(document.getElementById("email").value));
    localStorage.setItem("link", JSON.stringify(document.getElementById("linkw").value));
    localStorage.setItem("language", JSON.stringify(document.getElementById("language").value));

    return true;
}

function loadData() {
    document.getElementById("uname").value = document.getElementById("userName").innerText;
    document.getElementById("des").value = document.getElementById("designation").innerText;
    document.getElementById("add").value = document.getElementById("location").innerText;
    document.getElementById("cont").value = document.getElementById("phone").innerText;
    document.getElementById("email").value = document.getElementById("mail").innerText;
    document.getElementById("linkw").value = document.getElementById("plink").innerText;
    document.getElementById("lang").value = document.getElementById("language").innerText;
}