import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import fishing from "../images/fishing.mp4"
import fishingThubnail from "../images/fishing-thumbnail.png"
import compiler from "../images/compiler.jpg"
import baseCreator from "../images/base-creator.png"
import baseVideo from "../images/base.mp4"
import sennybans from "../images/sennybans.png"
import discord from "../images/discord.png"
import discordVideo from "../images/discord-video.mp4"
const portfolios = [
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
];

export default portfolios;
