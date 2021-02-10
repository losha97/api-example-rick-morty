import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export const links = [
    {
        id: 1,
        url: "/",
        name: "home"
    },
    {
        id: 2,
        url: "/characters/1",
        name: "characters"
    }
];

export const social = [
    {
		id: 1,
		url: "https://www.facebook.com",
		icon: <FaFacebook />
    },
    {
		id: 2,
		url: "https://www.instagram.com",
		icon: <FaInstagram />
    },
    {
		id: 3,
		url: "https://www.linkedin.com",
		icon: <FaLinkedin />
    },
    {
		id: 4,
		url: "https://www.twitter.com",
		icon: <FaTwitter />
    }
  ];