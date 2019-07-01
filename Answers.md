1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map Array.filter,Array.concat
Object.assign


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions consists of information that will send data from my app to the store.

Reducers specifies the changes in state. 

Store holds all of the application's state.

Store keeps the state in one place and keeps it from changing and makes it read only. In order to change state a reducer function needs to be created. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used to store all of your data.
Component state breaks the state down and it only uses what it needs.
I think it depends on your application if it is a big app then using components would make it easier to manages your state.

4.  What is middleware?

Middleware is a function within a function that uses store as a parameter  and another function that uses action as a parameter. 


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk stops the flow and if a action-creator is seen it will send the action to the reducer otherwise it will pass the thunk(function) to dispatch.


6.  Which `react-redux` method links up our `components` with our `redux store`? 

connect
