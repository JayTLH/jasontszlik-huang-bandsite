// establish variable used to extract the value of the form
const commentForm = document.querySelector('.comments__form')

// function to return profile pic, feels like a deeper dive to get user info so just default to the provided asset
function profilePicture() {
    return '../assets/images/no-profile-pic.jpg'
}

// function to return user name
function userName() {
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        return (event.target[0].value);
    })
}

// function to return the date
function currentDate() {
        return '10/18/2019'
    }

// function to return the comment
function commentInput() {
    commentForm.addEventListener('submit', (event) => {
        return (event.target[1].value);
    })
}

// function to add info into an object
function createObject() {
    let newCommenter = {
        image: profilePicuture,
        name: userName,
        date: currentDate,
        comment: commentInput
    };

    return newCommenter
}

// function to push object into the array

// function to add new comment
function addNewComment(image, name, date, comment) {
    let commentSection = document.querySelector('.comments__old-comments');

    let commentList = document.createElement('ul');
    commentList.className = 'comments__list';

    let commentListItem = document.createElement('li');
    commentListItem.className = 'comments__list-item';

    let commentUserImage = document.createElement('img');
    commentUserImage.className = 'comments__user-img-past';
    commentUserImage.setAttribute('src', image);
    commentUserImage.setAttribute('alt', 'profile picture of past commenter');

    let commentHeader = document.createElement('header');
    commentHeader.className = 'comments__user-info';

    let commentName = document.createElement('p');
    commentName.className = 'comments__user-name-past';
    commentName.textContent = name;

    let commentDate = document.createElement('p');
    commentDate.className = 'comments__date font-label';
    commentDate.textContent = date;

    let commentArticle = document.createElement('article');
    commentArticle.className = 'comments__comment-past';

    let commentContent = document.createElement('p');
    commentContent.className = 'comments__comment-content';
    commentContent.textContent = comment;

    commentSection.appendChild(commentList);
    commentList.appendChild(commentListItem);
    commentListItem.appendChild(commentUserImage);
    commentListItem.appendChild(commentHeader);
    commentListItem.appendChild(commentArticle);
    commentHeader.appendChild(commentName);
    commentHeader.appendChild(commentDate);
    commentArticle.appendChild(commentContent);
}

let commenters = [
    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Jason',
        date: '10/18/2019',
        comment: 'Hey this is a comment3'
    },

    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Kiel',
        date: '10/17/2019',
        comment: 'Hey this is a comment2'
    },

    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Ignis',
        date: '10/16/2019',
        comment: 'Hey this is a comment1'
    },
]

// commenters.unshift(createObject);

commenters.forEach(function(index) {
    addNewComment(index.image, index.name, index.date, index.comment);
})