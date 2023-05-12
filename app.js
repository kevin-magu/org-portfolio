let windowsPic = document.querySelector('.windows');
let windowsFacts = document.querySelector('.windows-facts');
let vscodePic = document.querySelector('.vscode');
let vscodeFacts = document.querySelector('.vscode-facts');
let githubFacts = document.querySelector('.github-facts');


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
    }, 10000)
};

function dGitHubFacts(){
    githubFacts.style.display = 'block';
    setTimeout(() => {
        githubFacts.style.display = 'none';
    }, 10000)
};
