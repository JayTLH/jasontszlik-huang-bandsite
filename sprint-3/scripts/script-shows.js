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
    showsListItemVenue.textContent = object.venue;

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

const showsArr = [
    {
        date: 'Mon Dec 17 2018',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Jul 18 2019',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Jul 22 2019',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Aug 12 2019',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Sep 05 2019',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Sep 11 2019',
        venue: 'Pres Club',
        location: 'San Francisco, CA'
    }
]

showsArr.forEach(function(index) {
    displayTickets(index);
})