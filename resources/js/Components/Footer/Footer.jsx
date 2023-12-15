import React from "react";
import Container from "../Container";
import FooterIndex from "./Partials/FooterIndex";
import FooterCommunity from "./Partials/FooterCommunity";
import FooterAbout from "./Partials/FooterAbout";
const Footer = () => {
    return (
        <div>
            <div className="border-t border-gray-300 py-4">
                <Container className="grid grid-cols-2 md:grid-cols-4 gap-12 py-8 md:px-0 px-4">
                    <FooterAbout />
                    <FooterIndex />
                    <FooterCommunity />
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-lg font-semibold md:text-2xl">
                            E-Services
                        </h1>
                        <span className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aut aliquam molestiae nostrum error delectus
                            veritatis distinctio pariatur iusto vel qui unde,
                            optio vitae atque magni corporis deserunt, illo enim
                            laudantium?
                        </span>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
