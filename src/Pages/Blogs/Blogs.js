import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-3">My Blogs</h2>
      <h2>Why should we not update the state directly?</h2>
      <p>
        One should never update the state directly because of the following
        reasons: If you update it directly, calling the setState() afterward may
        just replace the update you made. When you directly update the state, it
        does not change this.state immediately. Instead, it creates a pending
        state transition, and accessing it after calling this method will only
        return the present value. You will lose control of the state across all
        components.
      </p>
      <h2>
        What are the different ways to manage a state in a React application?
      </h2>
      <p>
        When we talk about state in our applications, it’s important to be clear
        about what types of state actually matter. There are four main types of
        state you need to properly manage in your React apps:
      </p>
      <ul>
        <li>Local state</li>
        <li>Global state</li>
        <li>Server state</li>
        <li>URL state</li>
      </ul>
      <h2>How will you improve the performance of a React Application?</h2>
      <p>
        Optimizing application performance is key for developers who are mindful
        of keeping a user’s experience positive to keep them on an app and
        engaged. According to research by Akamai, a second delay in load time
        can cause a 7 percent reduction in conversions, making it imperative for
        developers to create apps with optimized performance. In React
        applications, we are guaranteed a very fast UI by default. However, as
        an application grows, developers may encounter some performance issues.
        In this guide, we will discuss five important ways to optimize the
        performance of a React application, including pre-optimization
        techniques. These include:
      </p>
      <ul>
        <li>Keeping component state local where necessary</li>
        <li>Memoizing React components to prevent unnecessary re-renders</li>
        <li>Code-splitting in React using dynamic import()</li>
        <li>Windowing or list virtualization in React</li>
        <li>Lazy loading images in React</li>
      </ul>
      <h2>How does prototypical inheritance work?</h2>
      <p>
        Every object with its methods and properties contains an internal and
        hidden property known as [[Prototype]]. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the [[Prototype]]
        of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language, it is being set using __proto__.
      </p>
      <h2>What is a unit test? Why should write unit tests?</h2>
      <p>
        Unit tests are typically automated tests written and run by software
        developers to ensure that a section of an application (known as the
        "unit") meets its design and behaves as intended.Unit testing ensures
        that all code meets quality standards before it's deployed. This ensures
        a reliable engineering environment where quality is paramount. Over the
        course of the product development life cycle, unit testing saves time
        and money, and helps developers write better code, more efficiently.{" "}
      </p>
    </div>
  );
};

export default Blogs;
