# Key-J app
An app to help DJs, musicians, music enthusiasts, access a song's key information

## Set up
This project works in two parts; The front end is stored in the client folder, and the back end is stored in server folder. Once the project has been forked/cloned, each will need to be set up individually.

### Server set up
The back end runs on Node.js and first needs dependencies to be installed. First cd into server folder and then run:
```
npm install
```
Then cd into client folder and repeat this step, by again running:
```
npm install
```

### Server tests
Tests are run with Jest. To run tests, run:
```
npm test
```

If you want to see the test coverage alongside the tests, run:
```
npm test -- --coverage
```

Linting is handled by ESLint and run automatically with the tests. If you want to run linting without the tests run:
```
npm run pretest
```

## User Stories

````
As a user,
So that I can find a song,
I can search by name.
````

````
As a user,
So I can refine my search,
I can click on the specific song I want.
````

````
As a user,
So I can check a songs fits my purpose,
I can see the genre of a song.
````

```
As a user,
So I can check it is a good song to dance to,
I can see the Danceability of a song (high - red, low - green  + percentage)
```

```
As a user,
So I can check the song’s energy level,
I can see the Energy of a song (high - red, low - blue + percentage?)
```

```
As a user,
So I can match the song to a vibe,
I can see the mood of a song (emoji rating + percentage?)
```

```
As a user,
So I can check a song fits harmonically,
I can check the Key (combined with ‘mode’)
```

```
As a user,
So I can check a song speed fits,
I can check the Tempo (bpm).
```

```
As a user,
So I can check the song fits timing,
I can check the Time signature of a song.
```

### Stretch goals

```
As a user,
So I can compare two songs,
I can search and view two songs at once.
```

```
As a user,
So I can check compatibility of two songs,
I can see a visual representation of compatibility.
```

```
As a user,
So I can look back on compared songs,
I can sign up and save songs.
```

```
As a user,
So I can check compatibility with setlists,
I can save setlists/playlists and compare songs.
```

## Sequence Diagram
![sequence_diagram](/images/sequence_diagram.key_j.png)