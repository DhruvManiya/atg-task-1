const posts = [
  {
    key: 1,
    sign: "✍️",
    status: "Article",
    header: "What if famous brands had regular fonts? Meet RegulaBrands!",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    img: "./bg2.jpg",
    name: "Sarthak Kamra",
    views: "1.4k",
    avtar: './dp3.jpg'
  },
  {
    key: 2,
    sign: "🔬️",
    status: "Education",
    header:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    img: "./bg3.jpg",
    name: "Sarah West",
    views: "1.4k",
    avtar: './dp2.jpeg'
  },
  {
    key: 3,
    sign: "🗓️",
    status: "Meetup",
    header: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2018",
    city: "Ahmedabad, India",
    img: "./bg4.jpg",
    name: "Ronal Jones",
    views: "1.4k",
    visit: "Visit website",
    avtar: './dp1.jpeg'
  },
  {
    key: 4,
    sign: "💼️",
    status: "Job",
    header: "Software Developer",
    com: "Innovaccer Analytics Private Ltd.",
    name: "Joseph Gray",
    views: "1.4k",
    apply: "Apply on Timesjobs",
    avtar: './dp4.jpg'
  },
];

export default posts;

export const count = posts.length;
export const ArticalCount = posts.filter(
  (post) => post.status === "Article"
).length;
export const EducationCount = posts.filter(
  (post) => post.status === "Education"
).length;
export const MeetupCount = posts.filter(
  (post) => post.status === "Meetup"
).length;
export const JobCount = posts.filter((post) => post.status === "Job").length;
