let windowsPic = document.querySelector('.windows');
let windowsFacts = document.querySelector('.windows-facts');
let vscodePic = document.querySelector('.vscode');
let vscodeFacts = document.querySelector('.vscode-facts');
let githubFacts = document.querySelector('.github-facts');
let appleFacts = document.querySelector('.apple-facts');

let skillsPage1 = document.querySelector('.skills-page1');
let skillsPage2 = document.querySelector('.skills-page2');
let skillsPage3 = document.querySelector('.skills-page3');

let certDiv = document.querySelector('.certificates');
let phpCert = document.querySelector('.php-cert');
let webFundamentalsCert = document.querySelector('.web-fundamentals-cert');
let sqlCert = document.querySelector('.sql-cert');
let htmlCert = document.querySelector('.html-cert');
let certIcon = document.getElementById('badge');

let rect1 = document.querySelector('.rect1');
let rect2 = document.querySelector('.rect2');
let rect3 = document.querySelector('.rect3');
let rect4 = document.querySelector('.rect4');

let ecommerceWeb = document.querySelector('.ecommerce-terminal');
let portfolioWeb = document.querySelector('.portfolio-terminal');
let bookingInfo = document.querySelector('.booking-terminal');
let learningInfo =document.querySelector('.learning-terminal');
let realestateInfo = document.querySelector('.realestate-terminal');
let travelInfo = document.querySelector('.travel-terminal');

let terminalContainer = document.querySelector('.terminal-container');
let projectList = document.querySelector('.project-list-card');

function dWindowsFacts() {
    windowsFacts.style.display = 'block';
    setTimeout(function(){
        windowsFacts.style.display = 'none';
    }, 10000); //disappear after 10s
}

function dVscodeFacts(){
    vscodeFacts.style.display = 'block';
    setTimeout(function(){
        vscodeFacts.style.display = 'none';
    }, 10000);
};

function dGithubFacts(){
    githubFacts.style.display = 'block';
    setTimeout(() => {
        githubFacts.style.display = 'none';
    }, 10000);
};

function dAppleFacts(){
    appleFacts.style.display = 'block';
    setTimeout(()=>{
        appleFacts.style.display = 'none';
    }, 10000);
};

function dpage1(){
    skillsPage1.style.display='block';
    skillsPage2.style.display='none';
    skillsPage3.style.display='none'
}
function dpage2(){
    skillsPage2.style.display='block';
    skillsPage1.style.display='none';
    skillsPage3.style.display='none';
}
function dpage3(){
    skillsPage2.style.display='none';
    skillsPage1.style.display='none';
    skillsPage3.style.display='block';
}

var text = "Currently pursuing a degree in software engineering";
var index = 0;
var isDeleting = false;

function type() {
  var currentText = text.substring(0, index);
  document.querySelector("#progres-text").innerHTML = currentText;
    let content = document.querySelector(".education-card");

    
  if (!isDeleting) {
    index++;

    if (index > text.length) {
      isDeleting = true;
    }
  } else {
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(type, 65);
}
type();

function hideCerts(){
  phpCert.style.display='none';
  webFundamentalsCert.style.display='none';
  sqlCert.style.display='none';
  htmlCert.style.display='none';

}

function certPage1() {
  phpCert.style.display='block';
  webFundamentalsCert.style.display='none';
  sqlCert.style.display='none';
  htmlCert.style.display='none';
}

function handleCancelCerts() {
  hideCerts();
  certIcon.style.display='flex';
}

function certPage2(){
  phpCert.style.display='none';
  webFundamentalsCert.style.display='block';
  sqlCert.style.display='none';
  htmlCert.style.display='none';
}

function certPage3(){
  phpCert.style.display='none';
  webFundamentalsCert.style.display='none';
  sqlCert.style.display='block';
  htmlCert.style.display='none';
  rect1.style.backgroundColor='#F9FCFE';
  rect2.style.backgroundColor='#F9FCFE';
  rect3.style.backgroundColor='blue';
  rect4.style.backgroundColor='#F9FCFE';
}

function certPage4(){
  phpCert.style.display='none';
  webFundamentalsCert.style.display='none';
  sqlCert.style.display='none';
  htmlCert.style.display='block';
  rect1.style.backgroundColor='#F9FCFE';
  rect2.style.backgroundColor='#F9FCFE';
  rect3.style.backgroundColor='#F9FCFE';
  rect4.style.backgroundColor='#CB6CE6';
}

//handling sliders on the web dev  section

function openEcommerce(){
  ecommerceWeb.style.display='block';
  portfolioWeb.style.display='none';
  learningInfo.style.display = 'none'
  bookingInfo.style.display='none';
  realestateInfo.style.display='none';
  travelInfo.style.display='none';
  projectList.style.display = 'none';
}
function openPortfolio(){
  ecommerceWeb.style.display='none';
  portfolioWeb.style.display='block';
  bookingInfo.style.display='none';
  learningInfo.style.display = 'none'
  realestateInfo.style.display='none';
  travelInfo.style.display='none';
  projectList.style.display = 'none';
}

function openLearning(){
  ecommerceWeb.style.display='none';
  portfolioWeb.style.display='none';
  learningInfo.style.display = 'block'
  bookingInfo.style.display='none';
  realestateInfo.style.display='none';
  travelInfo.style.display='none';
  projectList.style.display = 'none';
}
function openBooking(){
  ecommerceWeb.style.display='none';
  portfolioWeb.style.display='none';
  learningInfo.style.display = 'none'
  bookingInfo.style.display='block';
  realestateInfo.style.display='none';
  travelInfo.style.display='none';
  projectList.style.display = 'none';
}
function openRealestate(){
  ecommerceWeb.style.display='none';
  portfolioWeb.style.display='none';
  learningInfo.style.display = 'none'
  bookingInfo.style.display='none';
  realestateInfo.style.display='block';
  travelInfo.style.display='none';
  projectList.style.display = 'none';
}
function openTravel(){
  ecommerceWeb.style.display='none';
  portfolioWeb.style.display='none';
  bookingInfo.style.display='none';
  learningInfo.style.display = 'none'
  realestateInfo.style.display='none';
  travelInfo.style.display='block';
  projectList.style.display = 'none';
}

/*close portfolio*/ 
function closeEcommerce(){
  ecommerceWeb.style.display = 'none';
  projectList.style.display = 'block';
}
function closePortfolio(){
  portfolioWeb.style.display = 'none';
  projectList.style.display = 'block';
}
function closeBooking(){
  bookingInfo.style.display = 'none';
  projectList.style.display = 'block';
}
function closeLearning(){
  learningInfo.style.display = 'none';
  projectList.style.display = 'block';
}
function closeRealestate(){
  realestateInfo.style.display = 'none';
  projectList.style.display = 'block';
}
function closeTravel(){
  travelInfo.style.display = 'none';
  projectList.style.display = 'block';
}
