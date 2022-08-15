# Code Challenge

You’re building a website for a client who is selling movies online. The client already have a simple API which represents the middleware between your
website and the data provider. The data provider is the owner of all the clients data, this includes movies, products, and media.

The documentation for middleware API the can be found here:

Middleware Documentation:
https://documenter.getpostman.com/view/314065/Szmb5z1m?version=latest

_!Note that the parameters used in the different examples can be used in all requests._

## Requirements

When developing the solution a mixture of technologies and programming languages are allowed. However, it is advisable to use some sort of existing
framework.

The code base should be well-structured and have a suitable level of commenting.

# Functionality

The solution should have the following functionality. If you believe some functionality is obsolete or some cool features are missing, feel free to modify your solution accordingly. However, remember to document your modifications and present arguments for their inclusion or exclusion.

- A frontpage showcasing the following genres (both for movies and series if available).
  - Action
  - Comedy
  - Thriller
  - War
  - Romance
  - Drama
  - Crime
  - Documentary
  - Horror
  - Each genre should include the genre title and the total count of movies.
  - Only showcase a few movies from the genre.
    - The movies should be presented with title and cover of the movie.
    - The user should be able to click on the movie and be redirected to a page showing all information about it.
    - **Optional**: A load more button which requests the next row of movies from the feed.
  - A button next to the title which links the user to a complete list of all the movies.
- A page showcasing all movies from a genre.
  - Presenting the title and total count of movies.
  - Presenting all movies with their title and cover.
    - The user should be able to click the movie and be redirected to a page showing all information about it.
- **Optional**: Pagination based presentation of all the movies. (For faster loading)
- A page presenting all information available about a movie.
  - The following data needs to be visible on the page:
    - Title
    - Description
    - Release year
    - Cover
    - Backdrop (Background-image for creating the proper atmosphere)
    - Genre
    - Actors and Directors
    - **Optional**: A embedded video player for playing the Youtube trailer attached to the movie
  - The user should be allowed to add and delete movies from his wishlist.
    - Hint: Permanent persistence is not required, but would of course be optimal. Saving the list in session is acceptable.
- A page presenting all movies on the users wishlist.
  - Presenting all movies with their title and cover.
    - The user should be able to click the movie and be redirected to a page showing all information about it.
  - The user should be allowed to remove movies from his wishlist.
  - **Optional**: Movies disappear from the list without a refresh after deleting the movie.

# Design

The following represents general design guidelines. Furthermore, it is encouraged to be creative and innovative.

- The website is intended for everyone. A colorful and playful design would therefore fit the purpose.
- The website needs to be responsive. Mobile and tablets are a big part of the visitors.
