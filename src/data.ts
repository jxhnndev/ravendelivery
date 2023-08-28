import { ChatMessageType, NavLink } from "./types";

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Delicious Pizzas",
    desc: "Our hand-tossed pizza brings a mouthwatering symphony of fresh dough, tangy sauce, and melted cheese.",
    img: "/temporary/m3.png",
    color: "white",
  },
];

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Menu",
    href: "/menu"
  },
  {
    id: 2,
    title: "About",
    href: "/about"
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact"
  },
];

export const chatMessages: ChatMessageType[] = [
  {
    id: "1",
    text: "Hi, I am a test bot, How can I help you?",
    name: "Test Bot",
    timestamp: "2023-08-28T14:34:29Z",
    outbound: false
  },
  {
    id: "2",
    text: "I want to test an outbound message.",
    name: "User Test",
    timestamp: "2023-08-28T14:35:29Z",
    outbound: true
  },
  {
    id: "3",
    text: "At the moment this is FE test only. Chat is not connected to BE.",
    name: "Test Bot",
    timestamp: "2023-08-28T14:36:29Z",
    outbound: false
  },
];