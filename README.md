Bakerstreet Coder IQ
675 Town Square Blvd., Suite 200
Garland, Texas, 75040
214-235-4413
https://www.bakerstreet.industries/
© Bakerstreet Industries 2018
Submit your name and GIT repository link to jobs@bakerstreet.industries. All responses to these questions should be in a markdown file named readme.md on your GIT repo.



Technical Questions
Explain the differences between the variable j, if any, and list where these would exist in the DOM.
var j = 0;						                Answer: j is a variable within current scope (class or function)
j = 0;						                    Answer: j is a variable within global scope;

function j(j) {                                 Answer: (j) is a parameter within function named j
    return j + j;                               Answer: returns parameter value j+j; EX: if j =2 , this function returns 4
}

var j = function(b) {                           Answer: j is defined as a function. EX: j(4) returns 14
    return b + 10;
}

function(x) {                                   Answer: this is a Anonymous functions, declared at runtime, 
    let j = 10;
    return j * x;
}

//Referenced by <script src=”file.js” />
var j = 10;                                     Answer: j is a variable has a value of 10


What ways could this function be executed?
var a = function(b) {                           Answer: var a = function(1); document.getElementById("txt").innerHTML = a;
    return b * 10;
}


What does this function do? How would you unit test this function?
export default function c(...funcs) {           Answer: This function returns the function name with value.
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


Coding Test
Application name: Elementary
          Answer: https://github.com/Steven2005A/Elementary

Summary Questions:
How did you approach the design of this application?
          Answer: I have created a /Component folder under /src folder, and all the component JS files are stored under Component folder. it start with a login page. a user can log in with google account through Auth0
                  Logged in user can view more content of ATS data.
                  Non Logged in user can only view a partial of ATS data.

Why did you choose the specific events to trigger actions?
          Answer: all the events are triggered by click event.

Did you place all state into Redux or was it a combination of React and Redux?
          Answer: it is a combination.

How did you get React and Redux to play nicely together?
          Answer: separate functions into component.

What changes would you make if you had more time to complete this application?
          Answer: I will make the layout more dynamic and add more content to css
