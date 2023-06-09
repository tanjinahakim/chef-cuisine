import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container text-justify my-5'>
            <h2 className='text-center'>Terms and Conditions</h2>
             <h4 >Welcome to chef cuisine!</h4> <br/>

             <p> These terms and conditions outline the rules and regulations for the use of Resturant's Website, located at www.restaurant.com.<br/>

                By accessing this website we assume you accept these terms and conditions. Do not continue to use chef cuisine if you do not agree to take all of the terms and conditions stated on this page.<br/>

                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of gb. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.<br/></p>

                <h4>Cookies</h4>
                <p>We employ the use of cookies. By accessing chef cuisine, you agreed to use cookies in agreement with the Resturant's Privacy Policy.

                Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                <p>Go Back to <Link to={'/register'}>Register</Link></p>


        </div>
    );
};

export default Terms;