# React.js
![Generic badge](https://badgen.net/badge/SPA/React.js/blue) ![Generic badge](https://badgen.net/badge/sass/modules/blue) ![Generic badge](https://badgen.net/badge/Serverless/Firebase/yellow) ![Generic badge](https://badgen.net/badge/state-management/Redux/purple) 
![Generic badge](https://badgen.net/badge/reusable-code/100/blue) ![Generic badge](https://badgen.net/badge/spaghetti-code/nope/) ![Generic badge](https://badgen.net/badge/style/styled-components/orange)

You can see the full features on [Live Demo](https://reactjsapp-7dab3.web.app)

---
## Getting started:

### Setup

```
1. Clone the repository.
```

```
2. Install dependencies.
```

# Technologies:💜
| **Tech** | **Description** |**Using** |
|----------|-------|----|
| **SPA** | no heavy Lifting, in some cases it's only one level deep + global State on demand.. etc | [React](https://reactjs.org/), [Create-React](https://facebook.github.io/create-react-app/), ([Redux](https://redux.js.org/) + [thunk](https://github.com/reduxjs/redux-thunk))
| **CSS**  | Compiled CSS styles, to automate the tedious BEM notation it's better to use CSS/SASS modules, ```Components``` are styled using it and inside ```pages``` folder is used styled-components, for page related adjustment. Zero global styling ~ 98%, everything scoped to component level except Layout folder..  | ([sass/modules](https://github.com/css-modules/css-modules),[autoprefixer](https://github.com/postcss/autoprefixer),[helmet](https://github.com/nfl/react-helmet)) [styled-components](https://www.styled-components.com/)
| **DATA SOURCE** | Storing reg users, accessing user info. Searching pictures + etc.  | [Firebase](https://firebase.google.com), [image](https://unsplash.com/)
| **Hosting** |  GCP, Firebase | [GCP](https://cloud.google.com/), [Firebase](https://firebase.google.com)

# Project structure:
* ### build/ **#Production folder!**

* ### src/ **#Development folder!**
    * **components/**
        * **'****'** #Components

    * **pages/**
        * **'****'** #pages
    * **images/**  #Icons, Background, svg..  
    * **store/**   #Global State : Redux.
        * **actions/**
        * **firebase/**  #initialize firebase config
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
