let windowsPic = document.querySelector('.windows');
let windowsFacts = document.querySelector('.windows-facts');
let vscodePic = document.querySelector('.vscode');
let vscodeFacts = document.querySelector('.vscode-facts');
let githubFacts = document.querySelector('.github-facts');
let appleFacts = document.querySelector('.apple-facts');

let skillsPage1 = document.querySelector('.skills-page1');
let skillsPage2 = document.querySelector('.skills-page2');
let skillsPage3 = document.querySelector('.skills-page3');

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
