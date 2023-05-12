let windowsPic = document.querySelector('.windows');
let windowsFacts = document.querySelector('.windows-facts');
let vscodePic = document.querySelector('.vscode');
let vscodeFacts = document.querySelector('.vscode-facts');
let githubFacts = document.querySelector('.github-facts');
let appleFacts = document.querySelector('.apple-facts');

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
