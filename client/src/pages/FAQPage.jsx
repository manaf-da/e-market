import React, { useState } from "react";
import Header from "./../components/Layout/Header";
import Footer from "./../components/Layout/Footer";
import styles from "../styles/styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq  */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(1)}
          >
            <span className="text-base font-medium text-gray-600">
              What is your return policy?
            </span>
            {activeTab === 1 ? (
              <IoIosArrowDown className="h-6 w-6 text-gray-500" />
            ) : (
              <IoIosArrowUp className="h-6 w-6 text-gray-500" />
            )}
          </button>
          {activeTab === 1 && (
            <div className="mt-4">
              <p className="text-base text-gray-600">
                If you're not satisfied with your purchase, we accept returns
                within 30 days of delivery. To initiate a return, please email
                us at support@myecommercestore.com with your order number and a
                brief explanation of why you're returning the item.
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-base font-medium text-gray-600">
              How do I track my order?
            </span>
            {activeTab === 2 ? (
              <IoIosArrowDown className="h-6 w-6 text-gray-500" />
            ) : (
              <IoIosArrowUp className="h-6 w-6 text-gray-500" />
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-600">
                You can track your order by clicking the tracking link in your
                shipping confirmation email, or by logging into your account on
                our website and viewing the order details.
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-base font-medium text-gray-600">
              How do I contact customer support?
            </span>
            {activeTab === 3 ? (
              <IoIosArrowDown className="h-6 w-6 text-gray-500" />
            ) : (
              <IoIosArrowUp className="h-6 w-6 text-gray-500" />
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-gray-600">
                You can contact our customer support team by emailing us at
                support@myecommercestore.com, or by calling us at (555) 123-4567
                between the hours of 9am and 5pm EST, Monday through Friday.
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-base font-medium text-gray-600">
              Can I change or cancel my order?
            </span>
            {activeTab === 4 ? (
              <IoIosArrowDown className="h-6 w-6 text-gray-500" />
            ) : (
              <IoIosArrowUp className="h-6 w-6 text-gray-500" />
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-600">
                Unfortunately, once an order has been placed, we are not able to
                make changes or cancellations. If you no longer want the items
                you've ordered, you can return them for a refund within 30 days
                of delivery.
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-base font-medium text-gray-600">
              Do you offer international shipping?
            </span>
            {activeTab === 5 ? (
              <IoIosArrowDown className="h-6 w-6 text-gray-500" />
            ) : (
              <IoIosArrowUp className="h-6 w-6 text-gray-500" />
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-600">
                Currently, we only offer shipping within the United States.
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-base font-medium text-gray-600">
              What payment methods do you accept?
            </span>
            {activeTab === 5 ? (
              <IoIosArrowDown className="h-6 w-6 text-gray-500" />
            ) : (
              <IoIosArrowUp className="h-6 w-6 text-gray-500" />
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-600">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FAQPage;
