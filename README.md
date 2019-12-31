# React.js
![Generic badge](https://badgen.net/badge/SPA/React.js/blue) ![Generic badge](https://badgen.net/badge/state-management/Redux/purple) ![Generic badge](https://badgen.net/badge/style/styled-components/orange) 
![Generic badge](https://badgen.net/badge/reusable-code/100/blue) ![Generic badge](https://badgen.net/badge/spaghetti-code/maybe/) ![Generic badge](https://badgen.net/badge/Paradigm/functional-programming/)
![Generic badge](https://badgen.net/badge/V/2.0/)

### You can see the full features on [Live Demo](https://reactjsapp-7dab3.web.app)

main page displays random images. Sign in for searching certain one, also supports voice input.

```
U can use this account, or make your own.
email: george@georgee.co.uk
password: admin1234
```
---
## Getting started:

### Setup

```
1. Clone the repository.
```

```
2. Install dependencies.
```

# Technologies:
| **Tech** | **Description** |**Using** |
|----------|-------|----|
| **SPA** | no heavy Lifting, in some cases it's only one level deep + global State on demand... | [React](https://reactjs.org/), [Create-React](https://facebook.github.io/create-react-app/), ([Redux](https://redux.js.org/) + [thunk](https://github.com/reduxjs/redux-thunk))
| **CSS**  | styled-components, Zero global styling! ~ 98% scoped to component level except Layout Component..  | [styled-components](https://www.styled-components.com/), [helmet](https://github.com/nfl/react-helmet)
| **DATA SOURCE** | Storing reg users, accessing user info. Searching pictures + etc.  | [Firebase](https://firebase.google.com), [image](https://unsplash.com/)
| **Hosting** |  GCP, Firebase | [GCP](https://cloud.google.com/), [Firebase](https://firebase.google.com)

# Project structure:

* ### src/ **#Development folder!**
    * **components/**
        * **'****'** #Components

    * **pages/**
        * **'****'** #pages
    * **images/**  #Icons, Background, svg..  
    * **store/**   #Global State : Redux.
        * **actions/**
        * **firebase/** 
        * **reducers/**

    * **.app/**  #DOM BrowserRouter.
    * **.index/**  #initialization.
     * **.serviceWorker/**  #PWA Conf.

* ### / ***#Root files***

  - #### .package.json

    > Gives some useful npm dependency information..

## Feedback

    If you have encountered bug, or have a useful suggestion how to improve development.
    Create a new issue.
