let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

let commandList = [ 'bio 🧔', 'cv 📄', 'proyectos 💻',  'rrss 📱',  'borrar ❌',];

functionCalls();

function functionCalls() {
    checkWindowClick();
    checkPressedEnter();
}

function checkWindowClick() {
    terminalBody.addEventListener ('click', function(event){
        // console.log("clicked!");
        input.focus();
    });
}

function checkPressedEnter() {
    input.addEventListener('keydown', function(e){
        // console.log("function");
        if (e.key === 'Enter') {
            // console.log("Enter");
            execute(input.value);
        }
    });
}

function execute(inputValue) {
    let temp = input.value;
    input.remove();
    terminalBody.innerHTML += temp;
    checkCommand(temp);
    addInput();
}

function checkCommand(inputCommand){

    let command = inputCommand.split(" ")[0];

    if(command){
       
        if(command === 'bio'){ commandBio();}
        else if(command === 'borrar'){ commandClear();}
        else if(command === 'help'){  terminalBody.innerHTML +=  '<p class="msj">Escribe alguno de estos comandos: ⬇️<p/>'; commandHelp(); }      
        else if(command === 'proyectos'){ commandProject();}
        else if(command === 'cv'){ commandResume();}
        else if(command === 'rrss'){ commandSocial();}
        else{
            terminalBody.innerHTML +=  '<br>' + inputCommand + ' is not recognized as a command, Try \"help\"<br>';
        }
    }
    else {
        terminalBody.innerHTML += '<br>';
    }
}

function addInput() {
    terminalBody.innerHTML += ' > <input type="text" autofocus />';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}

function commandBio() {

    terminalBody.innerHTML += '<br><br>';
    for(let i=0; i<data.bio.length; i++) {
        terminalBody.innerHTML += `${data.bio[i].name}: ` ;
        terminalBody.innerHTML += `${data.bio[i].value}<br>` ;
    }
    terminalBody.innerHTML += '<br>';
}



function commandClear() {
    terminalBody.innerHTML = ``;
}

function commandHelp() {
    terminalBody.innerHTML += '';
    for(let i=0; i<commandList.length; i++) {
        terminalBody.innerHTML += `${commandList[i]}<br>`
    }
}



function commandSocial() {

    terminalBody.innerHTML += '<br><br>';
    for(let i=0; i<data.socials.length; i++) {
        terminalBody.innerHTML += `${data.socials[i].name}: ` ;
        terminalBody.innerHTML += `<a href=${data.socials[i].url} target="_blank">${data.socials[i].url}</a><br>` ;
    }
    terminalBody.innerHTML += '<br>';
}

function commandProject() {

    terminalBody.innerHTML += '<br><br>';
    for(let i=0; i<data.projects.length; i++) {
        terminalBody.innerHTML += `${data.projects[i].name}: ` ;
        terminalBody.innerHTML += `<a href="${data.projects[i].url}" target="_blank">${data.projects[i].url}</a><br>` ;
    }
    terminalBody.innerHTML += '<br>';
}

function commandResume() {
    terminalBody.innerHTML += `<br><a href=${data.resume}>Descargar PDF</a><br>`;
}


