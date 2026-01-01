export interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  banner: string;
  screenshots: string[] | null;
  publishedDate: string;
}

export const PROJECTS = [
  {
    id: '1',
    title: 'The Thief',
    url: 'https://emmanuel-pangan.itch.io/the-thief',
    description: 'Sneak stealthily into a dungeon filled with hidden and fake traps as the thief.',
    banner: "img-card/the-thief-card.png",
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNTM1NDEwLzcwMDk3OTIucG5n/original/meDVc3.png',
      'https://img.itch.zone/aW1hZ2UvNTM1NDEwLzcwMDk3OTUucG5n/original/waLjuT.png',
      'https://img.itch.zone/aW1hZ2UvNTM1NDEwLzcwMDk3OTQucG5n/original/a5oNJV.png',
      'https://img.itch.zone/aW1hZ2UvNTM1NDEwLzcwMDk3OTMucG5n/original/DaGKUt.png',
    ],
    publishedDate: 'December 15, 2019',
  },

  {
    id: '2',
    title: 'King and Queen',
    url: 'https://emmanuel-pangan.itch.io/king-and-queen',
    description: 'Guide King and Queen be reunited through clever puzzles across every level and unlock their heartwarming love story.',
    banner: 'img-card/king-and-queen-card.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNzQ4NzUxLzY3MzQyMjUucG5n/original/Us%2FILW.png',
      'https://img.itch.zone/aW1hZ2UvNzQ4NzUxLzY3MzQyMjcucG5n/original/D13Lj9.png',
      'https://img.itch.zone/aW1hZ2UvNzQ4NzUxLzY3MzQyMjQucG5n/original/bAz6SH.png',
      'https://img.itch.zone/aW1hZ2UvNzQ4NzUxLzY3MjYwNzAucG5n/original/JW6Hmv.png',
    ],
    publishedDate: 'November 10, 2020',
  },

  {
    id: '3',
    title: 'Yggdrasil',
    url: 'https://emmanuel-pangan.itch.io/yggdrasil',
    description: 'Venture from the roots of Yggdrasil and slay the beast Cartaphilus, the Gravedigger, which dwells beneath the church.',
    banner: "img-card/yggdrasil-card.png",
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvMTI1MTc2NS85MzkyMjkyLnBuZw==/original/qDLlPO.png',
      'https://img.itch.zone/aW1hZ2UvMTI1MTc2NS85MzkyMjkzLnBuZw==/original/mN%2FIUA.png',
      'https://img.itch.zone/aW1hZ2UvMTI1MTc2NS85MzkyMjk2LnBuZw==/original/wmYrRx.png',
      'https://img.itch.zone/aW1hZ2UvMTI1MTc2NS85Mzk3NzkyLnBuZw==/original/RZkmkm.png',
    ],
    publishedDate: 'November 06, 2021',
  },

  {
    id: '4',
    title: 'King and Queen 2',
    url: 'https://emmanuel-pangan.itch.io/king-and-queen-2',
    description: 'The royal couple are back again in their romantic adventure! Solve 25 new brain-teasing puzzles and help them reunite in love and happiness.',
    banner: "img-card/king-and-queen-2-card.png",
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvMzA4MjcyOS8yMjczNTA0Ny5wbmc=/original/PSKHBs.png',
      'https://img.itch.zone/aW1hZ2UvMzA4MjcyOS8yMjczNTA1MC5wbmc=/original/mLWZwN.png',
      'https://img.itch.zone/aW1hZ2UvMzA4MjcyOS8yMjczNTA0Ni5wbmc=/original/iRy694.png',
      'https://img.itch.zone/aW1hZ2UvMzA4MjcyOS8yMjczNTA0OC5wbmc=/original/a5BGWM.png',
      'https://img.itch.zone/aW1hZ2UvMzA4MjcyOS8yMjczNTA0OS5wbmc=/original/WtMeFn.png',
    ],
    publishedDate: 'August 15, 2025',
  },
];

export interface About {
  name: string;
  description: string;
  aboutMe: string;
  jpName: string;
  jpDescription: string;
  jpAboutMe: string;
}

export const ABOUT: About = {
  name: "Emmanuel Pangan",
  description: "Indie Game Developer from the Philippines.",
  aboutMe: "I'm a Software Developer with expertise in C#, ASP.Net, and Angular by day. And I dive into Unity3D and game development by night. I'm eager to delve more into the world of Azure and expand my cloud computing skills. I'm also passionate in learning Japanese with my level currently at N4, and the journey has been incredibly rewarding so far! And lastly, you could actually switch to Japanese with this button: 日本語",
  jpName: "パンガン　エマニュエル",
  jpDescription: "フィリピンからインディゲールクリエイター。",
  jpAboutMe: "",
}