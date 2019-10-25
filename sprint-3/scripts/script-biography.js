const api = 'd57bad13-0109-4ebf-ab09-1b45a643f963'

const apiKey = `?api_key=${api}`

// function to display comments into html using DOM
function displayComment(object) {
    const commentList = document.querySelector('.comments__list');
    let newTime = Date.now();

    let commentListItem = document.createElement('li');
    commentListItem.classList.add('comments__list-item');
    
    let commentUserImage = document.createElement('img');
    commentUserImage.classList.add('comments__user-img-past');
    commentUserImage.setAttribute('src', "../assets/images/no-profile-pic.jpg");
    commentUserImage.setAttribute('alt', 'profile picture of past commenter');
    
    let commentHeader = document.createElement('header');
    commentHeader.classList.add('comments__user-info');
    
    let commentName = document.createElement('p');
    commentName.classList.add('comments__user-name-past');
    commentName.textContent = object.name;
    
    let commentDate = document.createElement('p');
    commentDate.classList.add('comments__date');
    commentDate.classList.add('font-label');
    
    let diffTime = (newTime - object.timestamp) / 1000;
    Number(diffTime);
    let convertTime = Math.floor(diffTime);
    if (convertTime < 60 && convertTime > 0) {
        resultTime = convertTime + "s ago";
    }   else if (convertTime < (60 * 60) && convertTime >= 60) {
        resultTime = Math.floor(convertTime / 60) + "m ago";
    }   else if (convertTime < (60 * 60 * 24) && convertTime >= (60 * 60)) {
        resultTime = Math.floor(convertTime / (60 * 60)) + "h ago";
    }   else if (convertTime < (60 * 60 * 24 * 7) && convertTime >= (60 * 60 * 24)) {
        resultTime = Math.floor(convertTime / (60 * 60 * 24));
        if (resultTime < 2) {
            resultTime = "1 day ago"
        }   else {
            resultTime = Math.floor(convertTime / (60 * 60 * 24)) + " days ago";
        }
    }   else if (convertTime < 2628000 && convertTime >= (60 * 60 * 24 * 7)) {
        resultTime = Math.floor(convertTime / (60 * 60 * 24 * 7));
        if (resultTime < 2) {
            resultTime = "1 week ago"
        }   else {
            resultTime = Math.floor(convertTime / (60 * 60 * 24 * 7)) + " weeks ago";
        }
    }   else if (convertTime >= 2628000) {
        resultTime = Math.floor(convertTime / 2628000);
        if (resultTime < 2) {
            resultTime = "1 month ago"
        }   else {
            resultTime = Math.floor(convertTime / (2628000)) + " months ago";
        }
    }   else {
        resultTime = "posted a second ago"
    }
    commentDate.textContent = resultTime;

    let commentArticle = document.createElement('article');
    commentArticle.classList.add('comments__comment-past');
    
    let commentContent = document.createElement('p');
    commentContent.classList.add('comments__comment-content');
    commentContent.textContent = object.comment;

    commentList.prepend(commentListItem);
    commentListItem.appendChild(commentUserImage);
    commentListItem.appendChild(commentHeader);
    commentListItem.appendChild(commentArticle);
    commentHeader.appendChild(commentName);
    commentHeader.appendChild(commentDate);
    commentArticle.appendChild(commentContent);
}

// function to add a new comment as an object and unshift it into an array
function addNewComment() {
    const commentForm = document.querySelector('.comments__form')

    commentForm.addEventListener('submit', event => {
        event.preventDefault();
        axios.post(`https://project-1-api.herokuapp.com/comments${apiKey}`, {
            name: event.target['user-name'].value,
            comment: event.target['new-comment'].value,
        })
        .then(() => {
            const commentSection = document.querySelector('.comments__old-comments');

            let removeCommentList = document.querySelector('.comments__list');
            removeCommentList.remove();
    
            let createCommentList = document.createElement('ul');
            createCommentList.classList.add('comments__list');
    
            commentSection.appendChild(createCommentList);
            displayCommentApi()
            event.target['user-name'].value = '';
            event.target['new-comment'].value = '';
        })
        .catch(() => {
            console.error("Failed to post")
        })
    })
}

// function to display comments from api object
function displayCommentApi() {
    axios.get(`https://project-1-api.herokuapp.com/comments${apiKey}`)
    .then(response => {
        for (let index = 2; index >= 0; index--) {
            displayComment(response.data[index]);
        }
        for (let indexNew = 3; indexNew < response.data.length; indexNew++) {
            displayComment(response.data[indexNew]);
        }
    })
    .catch(() => {
        console.error("Failed to display comments");
    })
}

displayCommentApi();

addNewComment();