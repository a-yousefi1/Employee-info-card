// employees info
var employees = [
  {
    image: "./images/employee-1.png",
    author: "Melika Jabbari",
    job: "Front-end Developer",
    info: "Hi, I'm a front-end developer. I specialize in creating beautiful and efficient websites using various programming languages and frameworks.",
  },
  {
    image: "./images/employee-2.png",
    author: "Homman Seyrafi",
    job: "Back-end Developer",
    info: "Hi, I'm a back-end developer. I'm responsible for programming and maintaining the server-side components of websites and applications. I have the ability to work on complex web",
  },
  {
    image: "./images/employee-3.png",
    author: "Sima Alizadeh",
    job: "UI/UX Designer",
    info: "Hi, I'm a UI/UX designer. My goal is to create visually appealing and user-friendly interfaces for websites and applications, ensuring a better user experience.",
  },
  {
    image: "./images/employee-4.png",
    author: "Aria Shirzad",
    job: "security engineer",
    info: "Hi, I'm a security engineer. I'm responsible for protecting systems and networks from security threats. I work to safeguard sensitive organizational data and prevent cyber attacks.",
  },
  // more employee info
];

var currentIndex = 0;

// showing employee's info
function displayEmployeeInfo() {
  let employee_picture = document.getElementById("employee-picture");
  let author =  document.getElementById("author");
  let job = document.getElementById("job");
  let info = document.getElementById("info");
  employee_picture.innerHTML = `<img class="centered-article" id="employee-picture" src="${employees[currentIndex].image}" alt="" />`;
  author.innerHTML = `<h4 id="author" class="centered-article">${employees[currentIndex].author}</h4>`;
  job.innerHTML = `<p id="job" class="centered-article">${employees[currentIndex].job}</p>`;
  info.innerHTML = `<p id="info" class="centered-article">${employees[currentIndex].info}</p>`;
  console.log(employee_picture);
}

// Previous button
document.getElementById("previous").addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = employees.length - 1;
  }
  displayEmployeeInfo();
});

// next button
document.getElementById("next").addEventListener("click", function () {
  if (currentIndex < employees.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  displayEmployeeInfo();
});

// random button
document.getElementById("random").addEventListener("click", function () {
  currentIndex = Math.floor(Math.random() * employees.length);
  displayEmployeeInfo();
});

displayEmployeeInfo();
