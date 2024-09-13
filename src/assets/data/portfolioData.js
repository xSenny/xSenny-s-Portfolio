
import fishing from "../images/fishing.mp4"
import fishingThubnail from "../images/fishing-thumbnail.png"
import compiler from "../images/compiler.jpg"
import baseCreator from "../images/base-creator.png"
import baseVideo from "../images/base.mp4"
import sennybans from "../images/sennybans.png"
import discord from "../images/discord.png"
import discordVideo from "../images/discord-video.mp4"
import lethiumPanel from "../images/LethiumPanel.png"
import cars from "../images/car-hub.png"
import prompts from "../images/prompts.png"
import events from "../images/events.png"
import flashcards from '../images/flashcards.mp4'
import flashcardsThumbnail from '../images/flashcards.png'
import stickers from '../images/stickers.mp4'
import stickersThumnail from '../images/stickers.png'
import wandermate from '../images/wandermate.mp4'
import wandermateThumbnail from '../images/wandermate.png'
import satoshiThumbnail from '../images/satoshi.png'
import satoshi from '../images/satoshi.mp4'
import expenses from '../images/expenses.png'
import bakery from '../images/bakery.png'
import kamalu from '../images/kamalu.png'
const portfolios = [
  {
    id: "000",
    imgUrl: expenses,
    video: false,
    category: "Web",
    description: "This project was made for Premier Studio application process. It helps users to track their expenses, and also use the data to develop other tools with the rest api.",
    technologies: ["NextJS", "ui.shadcn.com", "v0", "TailwindCSS", "MongoDB"],
    siteUrl: "https://expense-tracking.xsenny.dev"
  },
  {
    id: "001",
    imgUrl: bakery,
    video: false,
    category: "Web",
    description: "This project was made for DevRoom application process. It helps small bakery businesses to have a small online store and to track their products.",
    technologies: ["NextJS", "ui.shadcn.com", "TailwindCSS", "MongoDB"],
    siteUrl: "https://bakery-lilac.vercel.app "
  },
  {
    id: "002",
    imgUrl: kamalu,
    video: false,
    category: "Web",
    description: "This project was made for Candor Studios application process. It is a Hiking and camping equipment store landing page. It presents all the things the shop has to offer.",
    technologies: ["React", "TailwindCSS"],
    siteUrl: "https://kamalu.vercel.app/"
  },
  {
    id: "010",
    imgUrl: flashcardsThumbnail,
    video: true,
    videoUrl: flashcards,
    category: "Web",
    title: "Flashy Learners",
    description: "A platform for students to create / explore different flash card groups and practice on different subjects.",
    technologies: ["NextJs", "ui.shadcn.com", "TailwindCSS", "MongoDB"],
    siteUrl: "https://flashcards.xsenny.dev"
  },
  {
    id: "011",
    imgUrl: stickersThumnail,
    video: true,
    videoUrl: stickers,
    category: "Web",
    title: "Stickers",
    description: "A platform for online users to upload and share different stickers through their group chats. The stickers can be shared as simple image url, or even with a embed image.",
    technologies: ["NextJs", "Clerk", "ui.shadcn.com", "TailwindCSS", "UploadThing", "MongoDB"],
    siteUrl: "https://stickers.xsenny.dev"
  },
  {
    id: "012",
    imgUrl: wandermateThumbnail,
    video: true,
    videoUrl: wandermate,
    category: "Web",
    title: "Wandermate",
    description: "A prototype for an application that was built for a Tekwill Junior Ambassadors 2024 contestant. The idea is that the app gives people different location where they can meet and spend their time with other users.",
    technologies: ["React", "Appwrite", "TailwindCSS"],
    siteUrl: "https://wandermate.xsenny.dev"
  },
  {
    id: "013",
    imgUrl: satoshiThumbnail,
    video: true,
    videoUrl: satoshi,
    category: "Web",
    title: "Local artist landing page - Satoshi",
    description: "In my free time, I tried to create this cool landing page for a local artist - Satoshi, learning new technologies.",
    technologies: ["React", "GSAP", "TailwindCSS"],
    siteUrl: "#"
  },
  {
    id: "01",
    imgUrl: fishingThubnail,
    video: true,
    videoUrl: fishing,
    category: "Minecraft",
    title: "Minecraft custom fishing",
    description:
      "A minecraft plugin for custom fishing, is a plugin used by the play.minebuddies.org server. In this plugin we worked on custom rods, custom fish and custom enchantments.",
    technologies: ["Java", "Paper API", "Grandle"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: compiler,
    category: "Web",
    title: "XCompiler",
    description:
      "A website that allows users to create web projects composed of Html, Css and Javascript, also through this website, with a username and a password, you can store all your projects and create an infinity of projects.",
    technologies: ["Javascript", "React", "Firebase", "Tailwind CSS"],
    siteUrl: "https://compiler.xsenny.dev",
  },
  {
    id: "03",
    imgUrl: baseCreator,
    category: "Minecraft",
    video: true,
    videoUrl: baseVideo,
    title: "Base Creator",
    description:
      "A plugin that allows players to automatically create a default base, a base protected from enemies, and each player can create his own team, adding or removing players from the team.",
    technologies: ["Java", "Spigot API", "Minecraft", "Maven"],
    siteUrl: "https://github.com/xSenny/BaseCreator/tree/merge/src",
  },
  {
    id: "04",
    imgUrl: sennybans,
    category: "Minecraft",
    title: "Senny Bans",
    description:
      "A plugin that helps minecraft server owners maintain their server and keep it away from unwanted players. With this plugin you can punish players, giving them ban, mute, but also you can see the reports of other players, become invisible, and many other helpful things for the staff.",
    technologies: ["Java", "Spigot API", "Minecraft", "Maven"],
    siteUrl: "https://github.com/xSenny/SennyBans",
    },
  {
    id: "05",
    imgUrl: discord,
    category: "Minecraft",
    video: true,
    videoUrl: discordVideo,
    title: "Minecraft x Discord Link system",
    description:
      "A plugin used by my server - Senny Mines, a plugin that allows players to use their discord account to get a free rank on the play.sennymines.xyz server. This also helps minecraft server owners to maintain their community, but also to know their minecraft players' discord accounts.",
    technologies: ["Java", "Spigot API", "JDA", "Minecraft", "Maven"],
    siteUrl: "https://discord.gg/ff2waqn7qq",
  },
  {
    id: "06",
    imgUrl: lethiumPanel,
    category: "Minecraft",
    title: "Minecraft server web panel",
    description: "A website created for a romanian minecraft server Lethium, to help the server owners to manage their staff members and their players. Done with zAnat0lica.",
    technologies: ["Java", "Bukkit", "Waterfall", "LuckpermsAPI"],
    siteUrl: "https://www.lethium.net"
  },
  {
    id: "07",
    imgUrl: cars,
    category: "Web",
    title: "Car Hub",
    description: "A website that allows users to see and search through cars via rapidapi.com services.",
    technologies: ["TypeScript", "NextJS", "Tailwind CSS", "RapidAPI"],
    siteUrl: "https://cars.xsenny.dev"
  },
  {
    id: "08",
    imgUrl: prompts,
    category: "Web",
    title: "Prompts",
    description: "A website that allows users to create and share prompts for writing and using AI assistants.",
    technologies: ["JavaScript", "NextJS", "Tailwind CSS", "MongoDB"],
    siteUrl: "https://prompts.xsenny.dev"
  },
  {
    id: "09",
    imgUrl: events,
    category: "Web",
    title: "Events",
    description: "A website that allows users to create and share paid and free events.",
    technologies: ["TypeScript", "NextJS", "Tailwind CSS", "MongoDB", "Stripe", "Clerk"],
    siteUrl: "https://events.xsenny.dev"
  }
];

export default portfolios;
