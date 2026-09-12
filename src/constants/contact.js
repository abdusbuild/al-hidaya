import { SCHOOL } from "./navigation.js";

export const CONTACT_HERO = {
  badge: "Contact Us",
  title: "We'd Love to Hear From You",
  subtitle:
    "Have a question about admissions or school life? Reach out via Instagram, visit us in person, or send a message below.",
};

export const CONTACT_DETAILS = [
  {
    icon: "phone",
    title: "Call Us",
    lines: [`Md. Rizwan (Principal)`, SCHOOL.phone],
    href: SCHOOL.phoneHref,
  },
  {
    icon: "map-pin",
    title: "Address",
    lines: ["Beside Urdu Middle School, Nawadih,", "Aurangabad, Bihar, India - 824101"],
  },
  {
    icon: "instagram",
    title: "Instagram",
    lines: ["@alhidayahfoundationschool"],
    href: "https://www.instagram.com/alhidayahfoundationschool/",
  },
  {
    icon: "clock",
    title: "Office Hours",
    lines: ["Monday – Saturday, 7:30 AM – 12:30 PM", "Closed on Sunday"],
  },
];

export const MAP_EMBED_QUERY = "Urdu Middle School, Nawadih, Aurangabad, Bihar, India 824101";
