export interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  descriptionJp: string;
  banner: string;
  screenshots: string[] | null;
  publishedDate: string;
}

export interface Header {
  name: string;
  shortDescription: string;
  longerDescription: string;
}

export const HEADER_ENG: Header = {
  name: "Emmanuel Pangan",
  shortDescription: "Indie Game Developer from the Philippines.",
  longerDescription: "I’m an indie game developer from the Philippines who loves creating cute pixel-art games with Unity and C#. And in my free time, I like to practice and study Japanese, currently at JLPT N4 level.",
};

export const HEADER_JP: Header = {
  name: "エマニュエル パンガン",
  shortDescription: "フィリピンのインディゲームクリエイター",
  longerDescription: "私はUnityとC＃でドットゲームを作るが好きフィリピンのインディゲームディクリエイター。自由時間に日本語を勉強していることが好き。",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Thief',
    url: 'https://emmanuel-pangan.itch.io/the-thief',
    description: 'Sneak stealthily into a dungeon filled with hidden and fake traps as the thief.',
    descriptionJp: '隠された偽の罠がいっぱいのダンジョンに泥棒としてこっそりと潜入しましょう。',
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
    descriptionJp: 'あらゆるレベルの巧妙なパズルを解いて王と女王が再会し、心温まるラブストーリーを解き明かしましょう',
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
    descriptionJp: 'ユグドラシルの根源から冒険し、教会の下に住む獣、墓掘り人カルタフィルスを倒してください。',
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
    description: 'The royal couple are back again in their romantic adventure! Solve 25 new brain-teasing puzzles and help them reunite in love and happiness. Game won the 3rd Place of Unity & Sentry: Creators Showcase 2025.',
    descriptionJp: 'ロイヤルカップルが再びロマンチックな冒険に！25の新しいパズルを解き明かし、愛と幸せを取り戻せるようお手伝いしましょう。このゲームはUnity & Sentry: Creators Showcase 2025で3位を獲得しました。',
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