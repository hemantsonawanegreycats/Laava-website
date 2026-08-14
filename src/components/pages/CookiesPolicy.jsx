import React from "react";
import SEO from "../SEO";

const CookiesPolicy = () => {
    return (
        <div className="bg-black text-white py-12 px-6 md:px-16 lg:px-32">
            <SEO title="Cookies Policy - Laava Fintech" description="Laava Financial Technologies Private Limited Cookies Policy and Usage Guidelines." />
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Cookies Policy
                </h1>
                <p className="mb-8">
                    LAAVA ("us", "we", or "our") uses cookies on the www.laavafin.com website (the "Service"). By using the Service, you consent to the use of cookies. Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.

                </p>

                <p className="mb-8">
                    <h4>What are cookies?</h4>
                    Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
                    Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.

                </p>

                <p className="mb-8">
                    <h4>How LAAVA uses cookies? </h4>
                    When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:<br />
                    To enable certain functions of the Service. We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:<br />
                    Essential cookies - We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.<br />

                </p>
                <p className="mb-8">
                    <h4>What are your choices regarding cookies?</h4>
                    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                    For respective web browsers, please visit your web browser's official web pages.
                </p>
                {/* Sections */}
            </div>
        </div>
    );
};

export default CookiesPolicy;
