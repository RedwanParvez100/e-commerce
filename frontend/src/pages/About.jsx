import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={"ABOUT"} text2={" US"} />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img
                    className="w-full md:max-w-[450px]"
                    src={assets.about_img}
                    alt=""
                />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>
                        At Forever, we believe fashion should be simple,
                        stylish, and accessible. Our goal is to bring you
                        high-quality clothing, footwear, and accessories that
                        fit perfectly into your everyday lifestyle.
                    </p>
                    <p>
                        From cozy sweaters and jeans to chic shoes and everyday
                        essentials, we carefully curate our collections to keep
                        you comfortable and confident.
                    </p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>
                        We aim to make online shopping easy and enjoyable for
                        everyone. With a focus on great design, reliable
                        quality, and affordable prices, we’re here to help you
                        look good and feel even better—no matter the occasion.
                    </p>
                </div>
            </div>

            <div className="text-xl py-4">
                <Title text1={"WHY"} text2={" CHOOSE US"} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-justify">
                    <b className="text-lg">Quality Assurance :</b>
                    <p className="text-gray-600 text-base">
                        We focus on delivering top-quality products every time.
                        Our items go through strict checks before reaching you.
                        We use trusted materials and tested processes. Customer
                        satisfaction is our top priority. You can rely on us for
                        consistent, dependable quality.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-justify">
                    <b className="text-lg">Convenience :</b>
                    <p className="text-gray-600 text-base">
                        Shopping with us is smooth and stress-free. Our website
                        is easy to navigate for a better experience. We offer
                        flexible payment and delivery options. Everything you
                        need is just a few clicks away. We save your time by
                        making everything simple.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-justify">
                    <b className="text-lg">Exceptional Customer Service :</b>
                    <p className="text-gray-600 text-base">
                        Our support team is always ready to help. We respond
                        quickly and solve problems fast. Your questions and
                        concerns matter to us. We guide you through every step
                        when needed. Great service is part of everything we do.
                    </p>
                </div>
            </div>

            <NewsletterBox />
        </div>
    );
};

export default About;
