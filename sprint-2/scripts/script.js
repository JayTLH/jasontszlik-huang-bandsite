// function to add comments into html using DOM
function displayComment(image, name, date, comment) {
    const commentList = document.querySelector('.comments__list');

    let commentListItem = document.createElement('li');
    commentListItem.classList.add('comments__list-item');
    
    let commentUserImage = document.createElement('img');
    commentUserImage.classList.add('comments__user-img-past');
    commentUserImage.setAttribute('src', image);
    commentUserImage.setAttribute('alt', 'profile picture of past commenter');
    
    let commentHeader = document.createElement('header');
    commentHeader.classList.add('comments__user-info');
    
    let commentName = document.createElement('p');
    commentName.classList.add('comments__user-name-past');
    commentName.textContent = name;
    
    let commentDate = document.createElement('p');
    commentDate.classList.add('comments__date');
    commentDate.classList.add('font-label');
    commentDate.textContent = date;

    let commentArticle = document.createElement('article');
    commentArticle.classList.add('comments__comment-past');
    
    let commentContent = document.createElement('p');
    commentContent.classList.add('comments__comment-content');
    commentContent.textContent = comment;
    
    commentList.appendChild(commentListItem);
    commentListItem.appendChild(commentUserImage);
    commentListItem.appendChild(commentHeader);
    commentListItem.appendChild(commentArticle);
    commentHeader.appendChild(commentName);
    commentHeader.appendChild(commentDate);
    commentArticle.appendChild(commentContent);
}

// function to add info into an object and unshift it into an array
function addNewComment() {
    const commentForm = document.querySelector('.comments__form')
    let newCommenter = {};
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        newCommenter = {
            image: '../assets/images/Mohan-muruge.jpg',
            name: event.target['user-name'].value,
            date: '10/18/2019',
            comment: event.target['new-comment'].value
        };
        commenters.unshift(newCommenter);
        const commentSection = document.querySelector('.comments__old-comments');
        let removeCommentList = document.querySelector('.comments__list');
        removeCommentList.remove();
        let createCommentList = document.createElement('ul');
        createCommentList.classList.add('comments__list');
        commentSection.appendChild(createCommentList);
        commenters.forEach(function(index) {
            displayComment(index.image, index.name, index.date, index.comment);
        })
    })
    return newCommenter
}

// function removeComments() {
//     let noList = document.querySelector('');
// }

const commenters = [
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

commenters.forEach(function(index) {
    displayComment(index.image, index.name, index.date, index.comment);
})

addNewComment();