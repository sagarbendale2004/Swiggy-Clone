import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

function HelpAndSupport() {
  const [activeFaq, setActiveFaq] = useState(null); // For toggling FAQs
  const [activeLegal, setActiveLegal] = useState(null); // For toggling Legal items
  const [activeSection, setActiveSection] = useState("faq"); // Tracks whether FAQs or Legal is active

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
    setActiveLegal(null); // Close legal when FAQ is clicked
  };

  const toggleLegal = (id) => {
    setActiveLegal(activeLegal === id ? null : id);
    setActiveFaq(null); // Close FAQ when Legal is clicked
  };

  const showFaqs = () => {
    setActiveSection("faq");
    setActiveLegal(null); // Reset legal when FAQs is selected
  };

  const showLegal = () => {
    setActiveSection("legal");
    setActiveFaq(null); // Reset FAQs when Legal is selected
  };

  return (
    <div className="bg-[#36718D] min-h-[100vh] w-full pb-8">
      {/* Heading Section */}
      <div className="px-6 lg:px-[170px] pt-8 lg:pt-[70px] mb-6">
        <h1 className="font-bold text-[24px] lg:text-[28px] text-white">
          Help & Support
        </h1>
        <h4 className="text-white text-sm lg:text-base">
          Let's take a step ahead and help you better.
        </h4>
      </div>

      {/* Container for equal height sections */}
      <div className="bg-white w-full mx-auto max-w-[1200px] gap-4 p-4 lg:p-8 flex flex-col lg:flex-row items-stretch">
        {/* Left section (Legal & FAQs links) */}
        <div className="bg-[#EDF1F7] flex lg:flex-col flex-row items-center justify-start lg:w-[25%] w-full lg:space-y-4 space-x-4 lg:space-x-0">
          <div
            className={`bg-white w-full lg:w-[70%] text-center py-3 my-2 px-4 lg:px-8 cursor-pointer rounded-md text-[17px] font-medium ${
              activeSection === "faq" ? "bg-blue-100" : ""
            }`}
            onClick={showFaqs}
          >
            FAQs
          </div>
          <div
            className={`bg-white w-full lg:w-[70%] text-center py-3 px-4 lg:px-8 cursor-pointer rounded-md text-[17px] font-medium ${
              activeSection === "legal" ? "bg-blue-100" : ""
            }`}
            onClick={showLegal}
          >
            Legal
          </div>
        </div>

        {/* Right section (FAQs and Legal content) */}
        <div className="w-full lg:w-[70%] flex-grow mt-6 lg:mt-0">
          {/* Show FAQ content if FAQs are selected */}
          {activeSection === "faq" && (
            <>
              {faqs.map((faq) => (
                <div key={faq.id} className="mb-4">
                  <div
                    className="cursor-pointer bg-gray-200 p-4 rounded"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex items-center justify-between px-2">
                      <h2 className="font-semibold">{faq.que}</h2>
                      <IoChevronDownSharp />
                    </div>
                  </div>
                  {activeFaq === faq.id && (
                    <div className="bg-white p-4 border border-gray-300 rounded">
                      <p>{faq.ans}</p>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Show Legal content if Legal is selected */}
          {activeSection === "legal" && (
            <>
              {legal.map((item) => (
                <div key={item.id} className="mb-4">
                  <div
                    className="cursor-pointer bg-gray-200 p-4 rounded"
                    onClick={() => toggleLegal(item.id)}
                  >
                    <div className="flex items-center justify-between px-2">
                      <h2 className="font-semibold">{item.title}</h2>
                      <IoChevronDownSharp />
                    </div>
                  </div>
                  {activeLegal === item.id && (
                    <div className="bg-white p-4 border border-gray-300 rounded">
                      <p>{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HelpAndSupport;

const faqs = [
  {
    id: 1,
    que: "What is Swiggy Customer Care Number?",
    ans: "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in",
  },
  {
    id: 2,
    que: "I want to explore career opportunities with Swiggy",
    ans: "Contact us at support@swiggy.in",
  },
  {
    id: 3,
    que: "I want to provide feedback",
    ans: "send Feedback at support@swiggy.in",
  },
  {
    id: 4,
    que: "Can I edit my order?",
    ans: "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 5,
    que: "I want to cancel my order",
    ans: "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    id: 6,
    que: "Will Swiggy be accountable for quality/quantity?",
    ans: "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 7,
    que: "Is there a minimum order value?",
    ans: "We have no minimum order value and you can order for any amount. ",
  },
  {
    id: 8,
    que: "What are your delivery hours?",
    ans: "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 9,
    que: "Can I order from any location?",
    ans: "We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.",
  },
  {
    id: 10,
    que: "Can I change the address / number?",
    ans: "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.",
  },
];

const legal = [
  {
    id: 1,
    title: "Terms of Use",
    desc: "These terms of use (the Terms of Use) govern your use of our website www.swiggy.in (the Website) and our Swiggy application for mobile and handheld devices (the App). The Website and the App are jointly referred to as the Services). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.",
  },
  {
    id: 2,
    title: "Privacy Policy",
    desc: "We ( Bundl Technologies Private Limited, alias Swiggy ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.swiggy.com (Website) including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to you in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. ",
  },
  {
    id: 3,
    title: "Cancellations and Refunds",
    desc: " As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, Swiggy reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, Swiggy shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)Swiggy reserves the right to charge you cancellation fee for the orders constrained to be cancelled by Swiggy for reasons not attributable to Swiggy, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, Swiggy will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to Swiggy or the restaurant partner or delivery partners, Swiggy shall not charge you any cancellation fee. ",
  },
  {
    id: 4,
    title: "Terms of Use for Swiggy ON-TIME / Assured",
    desc:
      " These terms of use (the Terms of Use) that govern your use of our service Swiggy ON-TIME / Assured  (ON-TIME" /
      "Assured) on our website www.swiggy.in (the Website) and our Swiggy application for mobile and handheld devices (the App). The services on ON-TIME / Assured  available on our Website and the App are jointly referred to as the On-Time Delivery. Please read these Terms of Use carefully before you use the Services. If you do not agree to these Terms of Use, you may not use the Services. By using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (incorporated by reference herein) and creates a legally binding arrangement to abide by the same.  ",
  },
];
