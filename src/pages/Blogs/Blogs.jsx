/* eslint-disable no-unused-vars */
import React from 'react';
import './Blogs.css'


const Blogs = () => {
    return (
        <div className='blogs-container p-4 border rounded'>
           <div>
           <h3>Question 1: Differences between uncontrolled and controlled components.</h3>
           <p>The component whose state and behaviour are controlled by their parent component are called controlled component and the component whose behaviour are controlled by their state is called uncontrolled component.</p>
           </div><br />
           <div>
            <h3>Question 2: How to validate React props using PropTypes?</h3>
            <p>Answer: React props can be validate by many ways. One of them is by using extension like typeScript and Flow. PropTypes and propTypes library also can be used.</p>
           </div><br />
           <div>
            <h3>Question 3: Difference between nodejs and express js.</h3>
            <p>Answer: Node.js is a platform built on Chromes JavaScript runtime for easily building fast, scalable network applications and express.js is a framework of node.js</p>
           </div><br />

           <div>
            <h3>Question 4:</h3>
            <p>Answer:A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. we use it because it can be reused easily, make the code clean and reduce time. It increase the rendering speed of the code.</p>
           </div>

        </div>
    );
};

export default Blogs;