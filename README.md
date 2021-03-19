# React app with voice input

### Main page displays random images. Sign in for searching certain one, also supports voice interaction.

See full features [Live](https://reactjsapp-7dab3.web.app)

```
U can use this account, or make your own.
email: george@georgee.co.uk
password: admin1234
```
---

# Technologies:
| **Tech** | **Description** |**Using** |
|----------|-------|----|
| **SPA** | no heavy Lifting, in some cases it's only one level deep + global State on demand... | [React](https://reactjs.org/), [Create-React](https://facebook.github.io/create-react-app/), ([Redux](https://redux.js.org/) + [thunk](https://github.com/reduxjs/redux-thunk))
| **CSS**  | styled-components | [styled-components](https://www.styled-components.com/), [helmet](https://github.com/nfl/react-helmet)
| **DATA SOURCE** | Accessing user info. Searching pictures.  | [Firebase](https://firebase.google.com), [image](https://unsplash.com/)
| **Hosting** |  GCP, Firebase | [GCP](https://cloud.google.com/), [Firebase](https://firebase.google.com)

# Project structure:

* ### src/ **#Development folder!**
    * **components/**
        * **'****'** #Components

    * **pages/**
        * **'****'** #pages
    * **store/**   #Global State : Redux.
        * **actions/**
        * **firebase/** 
        * **reducers/**
* ### / ***#Root files***

  - #### .package.json

    > Gives some useful npm dependency information..
