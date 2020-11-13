## A project to keep track of and manage your book library.

Stack:

- Frontend: ReactJS (https://reactjs.org), Redux.
- UI: Material-UI (https://material-ui.com/), Styled-Components (https://styled-components.com)

<img src="./mockups/DefaultView.png" width='600' height='427'>

## Planned features:

Home page with selection to view library by:

- All books
- Loaned out
- Reading status
- Favorites

## Redux implementation:

This project was originally created with React useState hooks to manage application state. While practical for a small project like this, Redux was implemented for learning purposes.
Although some boilerplate setup is required, components are less bloated as state logic is seperated into the redux portion of the app. At the same time, prop drilling is avoided. State is readily available throughout the app, which prevents having to possibly "lift state up" into the next higher component.

The AddBookModal still implements useState hooks for component level state such as open/close state and form inputs since these would not be usefull to have in redux store.

Todo:

- [x] Wireframe / Layout
- [x] Define containers and components
- [x] Build home page
- [x] Add new book
- [x] Extend 'AddBook' with input for status (isLoaned, isFav, isReading)
- [x] Open library by view
- [x] Add functionality for deleting books
- [x] Add support for localStorage
- [x] Implement state management with redux
- [ ] Add ability to change read/fav/loaned status after creation

## Possible extensions:

- Authentication (Auth0) / Login
