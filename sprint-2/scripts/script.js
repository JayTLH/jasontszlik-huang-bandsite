// function to display comments into html using DOM
function displayComment(object) {
    const commentList = document.querySelector('.comments__list');

    let commentListItem = document.createElement('li');
    commentListItem.classList.add('comments__list-item');
    
    let commentUserImage = document.createElement('img');
    commentUserImage.classList.add('comments__user-img-past');
    commentUserImage.setAttribute('src', object.image);
    commentUserImage.setAttribute('alt', 'profile picture of past commenter');
    
    let commentHeader = document.createElement('header');
    commentHeader.classList.add('comments__user-info');
    
    let commentName = document.createElement('p');
    commentName.classList.add('comments__user-name-past');
    commentName.textContent = object.name;
    
    let commentDate = document.createElement('p');
    commentDate.classList.add('comments__date');
    commentDate.classList.add('font-label');
    commentDate.textContent = object.date;

    let commentArticle = document.createElement('article');
    commentArticle.classList.add('comments__comment-past');
    
    let commentContent = document.createElement('p');
    commentContent.classList.add('comments__comment-content');
    commentContent.textContent = object.comment;
    
    commentList.appendChild(commentListItem);
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
    let newCommenter = {};
    let today = new Date();
    let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        newCommenter = {
            image: '../assets/images/Mohan-muruge.jpg',
            name: event.target['user-name'].value,
            date: date,
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
            displayComment(index);
        event.target['user-name'].value = '';
        event.target['new-comment'].value = '';
        })
    })
    return newCommenter
}

const commenters = [
    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Wolf',
        date: '10/18/2019',
        comment: "Hey, can't we all just get along? I mean music is suppose to bring people together. I agree it wasn't their best work but I had fun."
    },

    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Kiel',
        date: '10/17/2019',
        comment: 'I have no idea what the other guy was talking about, I mean this concert was hot garbage. Its such a shame to see the band I love fall from grace.'
    },

    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Ignis',
        date: '10/16/2019',
        comment: 'Yoooo! The concert was FIYA! By far the best event I ever attended, wish I could relieve the moment.'
    },
]

commenters.forEach(function(index) {
    displayComment(index);
})

addNewComment();