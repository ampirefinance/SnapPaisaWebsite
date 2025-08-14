import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import test1Image from "../assets/image/test1.jpeg";
import test2Image from "../assets/image/test2.jpeg";
import test3Image from "../assets/image/test3.jpeg";
import test4Image from "../assets/image/test4.jpeg";
import test5Image from "../assets/image/test5.jpeg";
import "./Testimonial.css";
import { APP_NAME } from "../Utils/constant";

const testimonials = [
    {
        image: test1Image,
        content:
            "I had a very smooth experience with " + APP_NAME + ". Their customer support was really helpful, and the loan was disbursed promptly. Highly recommend!",
        name: "Ravi Sharma",
    },
    {
        image: test2Image,
        content:
            "Hi, this is Raj. It was a pleasure to connect with " + APP_NAME + ". In such a short time, they processed my loan with minimal paperwork and genuine service.",
        name: "Raj Kumar",
    },
    {
        image: test3Image,
        content:
            "My experience with " + APP_NAME + " was fantastic. The support team made sure my loan was processed quickly and efficiently.",
        name: "Arjun Yadav",
    },
    {
        image: test4Image,
        content:
            "I’m grateful for the support I received from " + APP_NAME + ". The entire process was fast and hassle-free. Their customer service was exceptional!",
        name: "Neha Gupta",
    },
    {
        image: test5Image,
        content:
            "" + APP_NAME + " made getting my loan so easy. From start to finish, everything was handled smoothly, and the team was always there to help.",
        name: "Priya Singh",
    },
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const { image, content, name } = testimonials[currentIndex];

    return (
        <div className="testimonial-section">
            {/* Styled Header */}
            <h2 className="testimonial-header">
                What Our <span className="highlight">Customers</span> Say
            </h2>

            {/* Testimonial Card */}
            <div className="testimonial-card">
                <div className="testimonial-image">
                    <img src={image} alt={name} />
                </div>
                <div className="testimonial-content">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-text">"{content}"</p>
                    <p className="testimonial-name">- {name}</p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="testimonial-buttons">
                <button className="nav-button" onClick={prevTestimonial}>
                    <FaChevronLeft />
                </button>
                <button className="nav-button" onClick={nextTestimonial}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSection;
