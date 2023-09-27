# Git Commands First Time:
- git init
- git config --global user.email "you@example.com"
- git branch -M main
- git add .
- git commit -m "volume-01"
- git remote add origin https://github.com/pargat1204/NamasteReact.git
- git push origin main

#  Git Commands After Updates:
- git status
- git add .
- git commit -m "vol-01"
- git push origin main

# To Change the Orgin:
- git remote rm origin


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Scripts:
- scripts: "start": "parcel index.html"           => Command: npm start
- scripts: "build": "parcel build index.html"     => Command: npm run build

# React Elements:
- React.createElemet() => Returns an Object (React Element is not HTML)
- When we render it to the DOM than it becomes HTML


# What is JSX:
- HTML like or XML like Syntax
- this is not a valid Javascript
- Javascript Engines does not understand JSX. Because, they only understands EchmaScript or ES6

# JSX Code is Transpiled:
- JSX code is transpiled before it reaches to the JS Engine. So, the Browsers can understand the code
- Transpiling is done by Babel.

# Babel:
- Babel is a Javascript Compiler
- Babel transpiled the JSX code, that React can understand
- JSX code => React.createElement => Javascript Object => HTML element

# Camel Case:
- All the attributes inside JSX are in Camel Casing

# React Components:
- Class Based Component => OLD
- Function Based Component => NEW
- React Functional Component is just a Normal Javascript Function Which returns some JSX
- All Functional Components Starts whith Capital Letter