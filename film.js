function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
 }
 function  hiddenSidebar(){
    const sidebar = document.querySelector('.sidebar')
   sidebar.style.display ='none'
}
     
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.getElementsByClassName("close")[0];

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

closeBtn.onclick = function() {
    loginModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
}



let availableKeywords = [
    { name: 'Sonic 3', url: 'sonic.html' },  
    { name: 'A Minecraft Movie', url: 'mc.html' },
    { name: 'Venom 3 last dance', url: 'venom.html' },
    { name: 'Naruto', url: 'naruto.html' },
    { name: 'Mad Max Sage', url: 'mad.html' },
    { name: 'Red One', url: 'red.html' },
    { name: 'Transformers One', url: 'transformers.html' },
    { name: 'Deadpool & Wolwerin', url: 'film.html' },
    { name: 'Goebbels and the Fuhrer', url: 'Fuhrer.html' },
    { name: 'Fast Five', url: 'fast.html' },
    { name: 'Avengers 4', url: 'avengers4.html' },
    { name: 'Despicable Me 4', url: 'des.html' },
    { name: 'The Six Triple Eight', url: 'six.html' },
    { name: 'Pirates of the Caribbean', url: 'pirates.html' },
    { name: 'Transformers 3', url: 'Transformers3.html' },
    { name: 'Avatar', url: 'avatar.html' },
    { name: 'Avengers 1', url: 'avengers.html' },
    { name: 'Oppenheimer', url: 'oppenheimer.html' },
    { name: 'Teenage Mutant Ninja Turtles: Mutant Mayhem', url: 'Ninja.html' },
    { name: 'Spider-Man: No Way Home', url: 'Spiderman.html' },

    
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.name.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result); 
}

function display(result) {
    const content = result.map((list) => {
        return `<li onclick="selectInput(this)" data-url="${list.url}">${list.name}</li>`;
    });
    resultsBox.innerHTML = result.length ? "<ul>" + content.join('') + "</ul>" : ""; 
}

function selectInput(list) {
    const url = list.getAttribute('data-url'); 
    if (url) {
        window.location.href = url; 
    }
    resultsBox.innerHTML = ''; 
}


function addComment() {
    var userName = document.getElementById('user-name').value;
    var commentText = document.getElementById('comment-text').value;
    
    if (userName && commentText) {
        var newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${userName}:</strong> ${commentText} 
            <div ><button class="edit" onclick="editComment(this)">Edit</button>
            <button class="delete" onclick="deleteComment(this)">Delete</button></div>`;
        
        document.getElementById('comment-list').appendChild(newComment);

        document.getElementById('user-name').value = '';
        document.getElementById('comment-text').value = '';
    } else {
        alert("Please enter both your name and comment.");
    }
}

function editComment(button) {
    var commentTextElement = button.parentElement.parentElement.querySelector('strong').nextSibling;
    var originalText = commentTextElement.textContent.trim();
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = originalText;
    commentTextElement.replaceWith(inputField);
    inputField.classList.add('save-inp')
    var saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = () => {
        var newText = inputField.value.trim();
        if (newText) {
            inputField.replaceWith(document.createTextNode(newText));
            saveButton.replaceWith(button);
        } else {
            alert("Comment cannot be left blank!");
        }
    };
    saveButton.classList.add('save-btn');

    button.replaceWith(saveButton);

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveButton.click();
    });
}

function deleteComment(button) {
    button.parentElement.parentElement.remove();
}
