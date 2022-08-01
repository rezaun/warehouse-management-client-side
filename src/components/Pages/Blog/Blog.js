import React from 'react';
import jsvsnode from '../../Assets/Images/Blog/jsvsnode.jpg'
import MongoDB_NodeJS from '../../Assets/Images/Blog/MongoDB_NodeJS.png'
import sqlnosql from '../../Assets/Images/Blog/sqlnosql.png'

const Blog = () => {
    return (
        <div className='container'>
            <div className="row">
                <h4 className='pt-5 text-center my-3 text-primary fs-1'>1. Difference between Javascript and Nodejs</h4>
                <div className="col-sm-8  offset-md-2 offset-sm-2 col-xs-12 col-md-8 py-4 text-center">
                    <img className='img-fluid' src={jsvsnode} alt="" />
                </div>
                <div className="col-sm-12 col-xs-12 col-md-12">
                    <table className='table table-bordered border-primary table-hover'>
                        <tbody>
                        <tr>
                            <th>Javascript</th>
                            <th>Node js</th>
                        </tr>
                        <tr >
                            <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>It is basically used on the client-side. </td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>Javascript is capable enough to add HTML and play with the DOM.  </td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.  </td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                        </tr>
                        </tbody>
                    </table>
                   
                </div>
                <h4 className='pt-5 text-center my-3 text-primary fs-1'>2. When should you use nodejs and when should you use mongodb</h4>
                <div className="col-sm-6 col-xs-12 col-md-6">
                    <img className='img-fluid text-center' src={MongoDB_NodeJS} alt="" />
                </div>
                <div className="col-sm-6 col-xs-12 col-md-6">
                <h6>Node Js:</h6>
                    <p>Node Js is a Javascript Runtime Environment.Basially we are using node js for server side Developement.We are for  connect database client side to server side when we are using node js.</p>
                    <h6>Mongodb:</h6>
                    <p>MongoDB makes it easy for developers to store structured or unstructured data.Mongodb is Stored Data in Json Format.MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p>
                   
                </div>
                <h2 className='pt-5 text-center my-3 fs-1 text-primary'>3. Differences between sql and nosql databases.</h2>
                <div className="col-sm-8 col-xs-12 col-md-8  offset-md-2 offset-sm-2 py-4">
                    <img className='img-fluid' src={sqlnosql} alt="" />
                </div>
                <div className="col-sm-12 col-xs-12 col-md-12">
                    <table className='table table-bordered border-primary table-hover'>
                        <tbody>
                        <tr>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                        <tr>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr>
                            <td>These databases are not suited for hierarchical data storage. </td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries</td>
                            <td>These databases are not so good for complex queries</td>
                        </tr>
                        <tr>
                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>
                        </tr>
                        <tr>
                            <td>Follows ACID property</td>
                            <td>Follows CAP(consistency, availability, partition tolerance)</td>
                        </tr>
                        </tbody>
                    </table>
                   
                </div>
            </div>
           
           
        </div>
    );
};

export default Blog;