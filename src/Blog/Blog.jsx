import ReactPDF from '@react-pdf/renderer';
import React from 'react';


const Blog = () => {
    return (
        <div>
            <div className='container' ref={ref}>
            <h2 className='mt-5'>Blog Page</h2>
            <div className='mb-5'>
                <h2>Tell us the differences between uncontrolled and controlled components.</h2>
                <h4>Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.</h4>
            </div>
            <div className='mb-5'>
                <h2>How to validate React props using PropTypes</h2>
                <h4>Important means for passing read-only attributes across React components include props and proptypes.To transmit data from one component to another, we may utilize React props, which is short for properties. The incorrect type of props can introduce issues and unanticipated failures into your software.There are some React PropTypes validators:
                    1.PropTypes.any: The prop can be of any data type
                    2.PropTypes.bool: The prop should be a Boolean
                    3.PropTypes.number: The prop should be a number
                    4.PropTypes.string: The prop should be a string
                    5.PropTypes.func: The prop should be a function
                    6.PropTypes.array: The prop should be an array
                    7.PropTypes.object: The prop should be an object
                    8.PropTypes.symbol: The prop should be a symbol</h4>
            </div>
            <div className='mb-5'>
                <h2>Tell us the difference between nodejs and express js.</h2>
                <h4>Express is a lightweight and adaptable node. js online application framework that offers a complete set of functionality for creating single- and multi-page, as well as hybrid, web apps. The description of Node. js, on the other hand, describes it as "A platform built on Chrome's JavaScript runtime for easily creating fast, scalable network applications."
            </h4>
            </div>
            <div className='mb-5'>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <h4>Reusability is provided by custom React JS hooks because once a custom hook is built, it can be used repeatedly, making the code cleaner and taking less time to write. Additionally, it speeds up code rendering because a custom hook doesn't have to be rendered repeatedly while the entire code is being rendered.</h4>
            </div>

        </div>
        </div>

    );
};

export default Blog;