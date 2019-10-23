const api = 'd57bad13-0109-4ebf-ab09-1b45a643f963'

const apiKey = `?api_key=${api}`

// function to display comments into html using DOM
function displayTickets (object) {
    const showsContainer = document.querySelector('.shows__container');

    let showsCard = document.createElement('section');
    showsCard.classList.add('shows__card');

    let showsList = document.createElement('ul');
    showsList.classList.add('shows__list');

    let showsListItemDateLabel = document.createElement('li');
    showsListItemDateLabel.classList.add('shows__list-item-label')
    showsListItemDateLabel.classList.add('font-label');
    showsListItemDateLabel.textContent = 'DATE';

    let showsListItemDate = document.createElement('li');
    showsListItemDate.classList.add('shows__list-item--bold');
    showsListItemDate.textContent = object.date;

    let showsListItemVenueLabel = document.createElement('li');
    showsListItemVenueLabel.classList.add('shows__list-item-label');
    showsListItemVenueLabel.classList.add('font-label');
    showsListItemVenueLabel.textContent = 'VENUE';

    let showsListItemVenue = document.createElement('li');
    showsListItemVenue.classList.add('shows__list-item');
    showsListItemVenue.textContent = object.place;

    let showsListItemLocationLabel = document.createElement('li');
    showsListItemLocationLabel.classList.add('shows__list-item-label');
    showsListItemLocationLabel.classList.add('font-label');
    showsListItemLocationLabel.textContent = 'LOCATION';

    let showsListItemLocation = document.createElement('li');
    showsListItemLocation.classList.add('shows__list-item-location');
    showsListItemLocation.textContent = object.location;

    let showsButton = document.createElement('button');
    showsButton.classList.add('shows__button');
    showsButton.textContent = 'BUY TICKETS';

    showsContainer.appendChild(showsCard);
    showsCard.appendChild(showsList);
    showsList.appendChild(showsListItemDateLabel);
    showsList.appendChild(showsListItemDate);
    showsList.appendChild(showsListItemVenueLabel);
    showsList.appendChild(showsListItemVenue);
    showsList.appendChild(showsListItemLocationLabel);
    showsList.appendChild(showsListItemLocation);
    showsList.appendChild(showsButton);
}

axios.get(`https://project-1-api.herokuapp.com/showdates${apiKey}`)
.then(response => {
    response.data.forEach(index => {
        console.log(index);
        displayTickets(index);
    })
})