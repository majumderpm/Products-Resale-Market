import React from "react";

const Blog = () => {
  return (
    <div className="w-full blog py-11 h-screen" style={{display: "flex"}}>
    <div className=" " >
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content rounded-l-xl" style={{backgroundColor: "#001a71"}}>
        What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content text-primary peer-checked:bg-slate-100 peer-checked:text-primary rounded-l-xl border-inherit bg-slate-100">
          <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

        useState is the first tool you should reach for to manage state in your components.

        It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content rounded-l-xl" style={{backgroundColor: "#001a71"}}>
        How does prototypical inheritance work?
        </div>
        <div className="collapse-content text-primary peer-checked:bg-slate-100 peer-checked:text-primary rounded-l-xl border-inherit bg-slate-100">
          <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content rounded-l-xl" style={{backgroundColor: "#001a71"}}>
        What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content text-primary peer-checked:bg-slate-100 peer-checked:text-primary rounded-l-xl border-inherit bg-slate-100">
          <p> The main objective of unit testing is to isolate written code to test and determine if it works as intended.

        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-primary-content peer-checked:bg-slate-100 peer-checked:text-secondary-content rounded-l-xl" style={{backgroundColor: "#001a71"}}>
        React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content text-primary peer-checked:bg-slate-100 peer-checked:text-primary rounded-l-xl border-inherit ">
          <p>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

        If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
