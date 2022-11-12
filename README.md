# React-Project
# TASK BRIEF:
Movie stats app
-simple login for user differentiation
-search for and log watched movies using api/database
-display comprehensive statistics on the user/movies

# DELIVERABLES:
-features: user recognition, movie searching, movie logging, creative stats display
-consider access control (credentials check on query)  
-Testing scripts

# LEARNING OUTCOMES:
-Using more advanced hooks
-Professional structuring
-React router
-Testing

# SUITABLE TOOLS:
React-(Typescript), Express, Node, Database(Mongo)
/React-(Typescript), React JSON server

# Functionality {
Homepage [
-Posters of latest films
-clickable
-leads to film info page
-Navbar {
-profile homepage
-watched stats (ratings spread, time spent, top genres, year by year breakdown
-watched
-poster look
-your ratings
}
-Search bar
]

Find films from a database
-search bar
-return poster, title, rating, length, release date, director, reviews, description

Add to watched-list
-toggle button
-Rating ability

View profile with all your lists, stats
-different graphical representation
-interactive

}

# Components [
  Navbar
  Search
  Homepage
  Profile page
  StatsNav(ordered by: 
    time(years by number, total time, years by rating), 
    genres(genre blobs by number, genre by ratings), 
    location(countries by number, languages by number, countries by map))

  ## Stats generate components
  Number of films seen vs year (line graph)
  Total time calculator
  No. of stars vs Years (bar graph)
  Genre (by number) (blobs) -> click through to those films
  Genre by ratings bar graph
  Countries by number (bar graph)
  Languages by number (bar graph)
  Countries by (map)

  ## Stats display components
  Line Graph
  Bar graph
  Blobs
  Map
]

# Mongo Database schema {
  Document: A User {
    MoviesSeen: [{
      MovieTitle: "Title",
      MovieYear: Year,
      MovieSynopsis: "The Synopsis",
      MovieGenre: ["All Genres",],
      MovieRuntime: Minutes,
      MovieRating: X/10,
      MovieCountry: "Country",
      MovieLang: "Language"}, 
    {x...}],
    UserName: "Name",
    UserID: ID,
  } 
}

