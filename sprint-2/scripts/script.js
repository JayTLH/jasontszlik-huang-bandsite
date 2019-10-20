// function to display comments into html using DOM
function displayComment(object) {
    const commentList = document.querySelector('.comments__list');
    let newTime = new Date();

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
    let diffTime = (newTime - object.date) / 1000;
    Number(diffTime);
    let convertTime = Math.floor(diffTime);
    if (convertTime < 60) {
        resultTime = convertTime + "s ago";
    }   else if (convertTime < (60 * 60) && convertTime >= 60) {
        resultTime = Math.floor(convertTime / 60) + "m ago";
    }   else if (convertTime < (60 * 60 * 24) && convertTime >= (60 * 60)) {
        resultTime = Math.floor(convertTime / (60 * 60)) + "h ago";
    }   else if (convertTime < (60 * 60 * 24 * 7) && convertTime >= (60 * 60 * 24)) {
        resultTime = Math.floor(convertTime / (60 * 60 * 24));
        if (resultTime === 1) {
            resultTime = "1 week ago"
        }   else {
            resultTime = Math.floor(convertTime / (60 * 60 * 24)) + " weeks ago";
        }
    }   else if (convertTime < 2628000 && convertTime >= (60 * 60 * 24 * 7)) {
        resultTime = Math.floor(convertTime / (60 * 60 * 24 * 7));
        if (resultTime === 1) {
            resultTime = "1 month ago"
        }   else {
            resultTime = Math.floor(convertTime / (60 * 60 * 24)) + " months ago";
        }
    }   else if (convertTime < 31,540,000 && convertTime >= 2628000) {
        resultTime = Math.floor(convertTime / 2628000);
        if (resultTime === 1) {
            resultTime = "1 year ago"
        }   else {
            resultTime = Math.floor(convertTime / (60 * 60 * 24)) + " years ago";
        }
    }
    


    commentDate.textContent = resultTime;

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
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let now = new Date();
        newCommenter = {
            image: '../assets/images/Mohan-muruge.jpg',
            name: event.target['user-name'].value,
            date: now.getTime(),
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
        date: '1571531262149',
        comment: "Hey, can't we all just get along? I mean music is suppose to bring people together. I agree it wasn't their best work but I had fun."
    },

    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Kiel',
        date: '1571521149184',
        comment: 'I have no idea what the other guy was talking about, I mean this concert was hot garbage. Its such a shame to see the band I love fall from grace.'
    },

    {
        image: '../assets/images/no-profile-pic.jpg',
        name: 'Ignis',
        date: '1571511226296',
        comment: 'Yoooo! The concert was FIYA! By far the best event I ever attended, wish I could relieve the moment.'
    },
]

commenters.forEach(function(index) {
    displayComment(index);
})

addNewComment();