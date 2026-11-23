# Awesome osu! tournaments

This is a collection of useful tools and resources for managing an osu! tournament.

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Official Resources

### Development/API
- [AppsScript Documentation](https://developers.google.com/apps-script/reference) - Information about Google AppsScript.
- [Google Sheets Function Documentation](https://support.google.com/docs/table/25273?hl=en) - Information about every single Google Sheets function.
- [osu-api v1 Documentation](https://github.com/ppy/osu-api/wiki) - Information about interfacing with osu! API v1.
- [osu-api v2 Documentation](https://docs.ppy.sh) - Information about interfacing with osu! API v2.
- [Community Tournament Tracker API](https://github.com/Hiviexd/tournament-tracker/wiki/API-Documentation) - Information about interfacing with https://tcomm.hivie.tn/
- [Mappool Compliance API](https://github.com/Hiviexd/tournament-tracker/wiki/Compliance-API-Example-Usage) - Example for using Mappool Compliance API in Google Sheets

### Official Support
- [Oficial Community Tournament Tracker](https://tcomm.hivie.tn/) - The one-stop shop for all official osu! tournament correspondence and information.
- [Official tournament support](https://osu.ppy.sh/wiki/en/Tournaments/Official_support) - Information about screening, badging and main-menu banners.
- [Official Tournament Support Updates](https://osu.ppy.sh/community/forums/topics/1715676?n=1) - A thread of all changes to the above wiki starting in February 2023.
- [Community Tournament Status Tracker (deprecated as of early 2025)](https://docs.google.com/spreadsheets/d/1bV5MyrJZI0F52Bx9EcYxdfRu8qGnhWRBKdXHK9uPbO0/edit?gid=1723005949#gid=1723005949) - A spreadsheet which tracks the status of tournaments requesting official support.

### Clients
- [osu!tourney](https://osu.ppy.sh/wiki/en/osu%21_tournament_client/osu%21tourney) - Information about the usage and setup osu!tourney (also referred to tourney client, stable tourney client, etc).
- [osu!tournament client](https://osu.ppy.sh/wiki/en/osu%21_tournament_client) - Information about the usage and setup of the tournament client in osu!lazer.

### Wiki/Forum
- [Tournaments](https://osu.ppy.sh/wiki/en/Tournaments) - List of official and community hosted osu! tournaments on the osu!wiki.
- [Tournaments sub-forum](https://osu.ppy.sh/community/forums/55) - Dedicated subforum for promoting and/or participating in osu! tournaments.

## Community Resources

### Automation/Bots
- [osu! Mappool Compliance Checker](https://github.com/hburn7/mappool-compliance-checker) (by [Stage](https://osu.ppy.sh/users/8191845)) - A Discord bot that checks a list of maps against osu!'s [content usage permissions](https://osu.ppy.sh/wiki/en/Rules/Content_usage_permissions) rules.
- [Player avatar download bulk tool](https://git.omkserver.nl/omkelderman/player-avatar-download-bulk-tool) (by [oliebol](https://osu.ppy.sh/users/2756335)) - Download osu! avatar images in bulk so you can use them in places like osu!lazer.
- [Tosurnament](https://github.com/SpartanPlume/Tosurnament) (by [SpartanPlume](https://osu.ppy.sh/users/2553166)) - Discord bot that automates most Discord/spreadsheet relationships.
- [osu! Lazer Tournament Client Bracket Generator CLI](https://github.com/DRCallaghan/osu-lazer-qualifier-results-bracket-generator) (by [D I O](https://osu.ppy.sh/users/3958619)) - Command-line interfacing program for automatically generating a complete bracket.json file for the osu! Lazer tournament client by taking qualifier results, player and team information, qualifier pool information, and tournament information.
- [bracket.json Generator and Editor for osu! Lazer Tournament Client](https://github.com/rrailgun/bracket.json-generator) (by [rrailgun](https://osu.ppy.sh/users/10525148)) - Command-line program for generating and updating a bracket.json file for the osu!tournament client

### Databases
- Badged Tournaments:
  - Mappools:
    - [Badged tournaments (2019, 5 digit only)](https://docs.google.com/spreadsheets/d/1oaGrmsbHr9L60AgaKTz3_fuvJB7Sjxzxweakm_Uu3Y8) (by [Mirthille](https://osu.ppy.sh/users/7548517))
    - [Badged tournaments (2020)](https://docs.google.com/spreadsheets/u/1/d/1nLhUJwHgb0ptksMqWIKRo01L0xiQ-xG7kTr3nhBldLI) (by [DizzyH](https://osu.ppy.sh/users/9896172) and [Mirthille](https://osu.ppy.sh/users/7548517))
    - [Badged tournaments (2021)](https://docs.google.com/spreadsheets/u/1/d/1DWMoBsy8Sh39j65ix6OTs19qbZOzH_zSTgzFgqid7YQ) (by [DizzyH](https://osu.ppy.sh/users/9896172))
    - [Badged tournaments (2022)](https://docs.google.com/spreadsheets/d/1IobdnWKVKcMD-kk7UpAk_diSf6HSI9GVwG500W-jdqY) (by [DizzyH](https://osu.ppy.sh/users/9896172))
- [Maps listed by skillset](https://docs.google.com/spreadsheets/d/1wPkqXQoVZUATwWfkEbzPnk_Nr3NJ-FpIxFyjzPL11XA) (by [Voltronn](https://osu.ppy.sh/users/8779938)) - Ranges from 4* - 8* pools. Note that this doesn't mean a skillset shoud be confined to the slot given in the sheet.

### Development
- [bancho.js](https://bancho.js.org) (by [ThePoon](https://osu.ppy.sh/users/718454)) - JS Library for interfacing with Bancho over IRC.
- [BanchoSharp](https://github.com/hburn7/banchosharp) (by [Stage](https://osu.ppy.sh/users/8191845)) - C# library that manages connecting to osu!Bancho and automatically manages multiplayer lobbies. Used by Brigitta and Bancho Multiplayer Bot.
- [passport-osu](https://github.com/MiraiSubject/passport-osu) (by [MiraiSubject](https://osu.ppy.sh/users/5639709)) - osu! authentication strategy for Passport and Node.js.
- [osu! provider for NextAuth.js](https://next-auth.js.org/providers/osu) (by NextAuth.js [Contributors](https://github.com/nextauthjs/next-auth/commits/main/packages/next-auth/src/providers/osu.ts)) - osu! authentication provider for NextAuth and Next.js
- [osu.js](https://osu-js.onrender.com) (by [Mario564](https://osu.ppy.sh/users/14544646)) - An unofficial Javascript and Typescript SDK for the browser-facing portion of osu! with type safety in mind.

### Spreadsheet Scripts/Tools

- [osu! api fetch stuff for google scripts](https://gist.github.com/omkelderman/037342ca6612140197d0bb6f19328884) (by [oliebol](https://osu.ppy.sh/users/2756335)) - Sample code to interface with the osu! api using Google Sheets

### Google Sheets Templates
#### Tournaments
- [stat lord's tournament spreadsheet templates v1.0](https://drive.google.com/drive/folders/1FHG6tmSobGh_hXi48zIS1lYAyQVjjdOo?usp=drive_link) (by [stat lord](https://osu.ppy.sh/users/7844501) and [RussianVaxei](https://osu.ppy.sh/users/4999119)) - Backend Sheet Templates for Admin, Mappool, Referee, and Statistics.
- [Mappool, qualifier and referee sheet templates](https://drive.google.com/drive/folders/1sIGjDR9_h-M8RgiJ5Nobml5DBdsulCWF) (by [IceDynamix](https://osu.ppy.sh/users/8599070)) - Sheets for mappool and referee management in the backend, as well as a sheet to organise qualifier results.
- [Referee sheets](https://drive.google.com/drive/folders/1sYTvq80pB1AESD-e_w6G-lrT02uzLO9O) (by [RussianVaxei](https://osu.ppy.sh/users/4999119)) - Includes templates for overseeing qualifiers and matches.
- [emmy_'s Referee and Statistic sheet template](https://drive.google.com/drive/folders/1uAtzq6jmeE_4X5C7PuRe8THOkSzoQipf) (by [emmy_](https://osu.ppy.sh/users/33127943)) - Sheet for referee management and statistics.
- [Dio and LeoFLT's tournament sheet templates](https://drive.google.com/drive/folders/1uB5uPs5__RcmuP0aHaUkUGHqeIUuObU7) (by [D I O](https://osu.ppy.sh/users/3958619) and [LeoFLT](https://osu.ppy.sh/users/3668779)) - Includes sheets for administration, mappooling, qualifiers, referees, statistics, tryouts, and team management.
- [Spodai's Referee Sheet](https://osu.ppy.sh/community/forums/topics/1896849?n=1) (By [Spodai](https://osu.ppy.sh/users/12710965)) - Reworked from DIO and LeoLFT Sheets. Currently have Referee Sheet.
- [Copy of HitomiChan's tournament sheet templates](https://drive.google.com/drive/folders/1QUwwpA1Lt6lm_YnVI-IdQ24nzZX8XriM) (by HitomiChan) - Includes templates for mappooling, reffing, statistics, and player administration. (Copies by [BCraftMG](https://osu.ppy.sh/users/13456818))
- [Nathaniel's tournament sheet templates](https://drive.google.com/drive/u/1/folders/1OWK7WxQlVQQmeNdI3X7mxvGA8vywKDUB) (by Nathaniel) - Includes 1v1 templates for administration, mappooling, and reffing, as well as a BBCode forum post generator.
- [Behaviour Standards Template](https://osu.ppy.sh/community/forums/topics/2038646) (by [niat0004](https://osu.ppy.sh/users/10797776)) - A set of relatively detailed rules for participants in (badged) tournaments to abide by, and how these rules are enforced. Covers Discord and Twitch moderation in detail.

#### osu! API Proxy
- [nginx](https://github.com/osu-community-tournaments/osu-api-proxy) (by [KotRik](https://osu.ppy.sh/users/9472862)) - nginx config for running a proxy

#### Miscellaneous
- [BBCode generator for staff in forum posts](https://docs.google.com/spreadsheets/d/1giUT9wLzhI-VkM6zioNH6pVrMqGDvi0_iUsfRmGRhP8) (by [Nathaniel](https://osu.ppy.sh/users/6534748)) - Generate BBCode to nicely display your staff in the tournament forum post.
- [Team tournament template](https://docs.google.com/spreadsheets/d/106hHlF1rslZlCqdZ96T0oGWfqblxQIbSJ2VBR0QmbDE) (by [Mario564](https://osu.ppy.sh/users/14544646)) - Manage your team by keeping track of the team's availability, scores, lost and won maps and compare opponent's scores in previous rounds.
- [Team management templates](https://drive.google.com/drive/folders/1MrQc2fFx-OERCHFiezdtvaP3PrtXKg31) (by [RussianVaxei](https://osu.ppy.sh/users/4999119)) - Track your team's statistics and availability using this collection of sheet templates.
- [Player tournament history sheet template](https://docs.google.com/spreadsheets/d/18UWiooGGDMMkltJGm_Td1b72MVRnQQ5ceS21w2zm16U) (by [Squink](https://osu.ppy.sh/users/12058601)) - Display tournament history data in an organized manner with additional teammate data automatically updated on the side.
- [bracket.json Template](https://drive.google.com/drive/folders/1nQCujQAnoeCRQVSa4w6sEfwiNvt0USm2) (by [BCraftMG](https://osu.ppy.sh/users/13456818)) - Empty bracket.json for use with Lazer. Includes Ro64-Ro16 Single/Double Elimination

### Tools
- IRC:
    - [chat4osu!](https://osu.ppy.sh/community/forums/topics/879262) (by [hallowatcher](https://osu.ppy.sh/users/1874761)) - IRC chat client for referees and casual chatters.
    - [Brigitta](https://github.com/hburn7/Brigitta) (by [Stage](https://osu.ppy.sh/users/8191845)) - IRC client made specifically for tournament referees - primary attraction is detailed interactive display while reffing.
    - [Script chan](https://osu.ppy.sh/community/forums/topics/730734) (by [shARPII](https://osu.ppy.sh/users/776257)) - Referee tool to create and manage lobbies.
    - [Bancho Multiplayer Bot](https://github.com/matte-ek/BanchoMultiplayerBot) (by [matte](https://osu.ppy.sh/users/10826852)) - Tool for creating multiplayer lobbies and automating them.
- [tosu](https://github.com/KotRikD/tosu) (by [KotRik](https://osu.ppy.sh/users/9472862)) - Eponymous software for reading osu! memory, accounting for most of gosumemory's issues.
- [osu! Tourney Match Displayer](https://otmd.app) (by [Akinari](https://osu.ppy.sh/users/4001304)) - Software for showing current tournament multiplayer games in your livestream!
- Deprecated:
  - [gosumemory!](https://github.com/l3lackShark/gosumemory) (by [l3lackShark](https://osu.ppy.sh/users/9173653)) - Cross-Platform memory reader.

### Tutorials
- [Various Tournament Video Tutorials](https://www.youtube.com/playlist?list=PLTMORxHOcedL9Wpr1zdnjKh4KKopsHm4-) (by [D I O](https://osu.ppy.sh/users/3958619)) - A series of tournament video tutorials on a variety of topics, including the tournament client, the lazer client, streaming, reffing, sheeting, and more. Receives periodic updates with new videos.
- [Tournament Hosting Guide](https://docs.google.com/document/d/1aveFDrzwC9TiRrHAsDfRW0bVSKs3JY-v8TNmN0kB484/) (by [Fairy Bread](https://osu.ppy.sh/users/8306102) a.k.a. ill onion) - The longest plain-text guide on hosting and staffing osu! tournaments, covering basically every aspect for Standard tournaments and all aspects besides mappooling for other game mode tournaments.
- [Comprehensive Tournament Role Guide](https://docs.google.com/document/d/1ynEItqDBZYp9CVuFuJAJ6WBPLm20AacOrdiRGolUpEA/) (by [Nathaniel](https://osu.ppy.sh/users/6534748)) - A comprehensive plain-text guide on almost, if not every, single role and aspect for Standard tournaments, with links and references to other resources like role-specific guides and templates.
- [Mappooling Guide](https://docs.google.com/document/d/1PERMOiwSI-mJ8s-hCsNVEG1FVeInMWyBC1eZv1iZ9SI/) (by [dqwed](https://osu.ppy.sh/users/9977100)) - A more modern mappooling guide as a counterpart to the more famous mappooling guides by [Dada](https://docs.google.com/document/d/e/2PACX-1vSEsDvb6MoutgXNY8j7-oiMMyVeJyNxISmmXPhxU0hzxNrxHl3TsuBv1FgLJgXqHGeUUlDgOWVTWnpj/pub) and [Smoothie World](https://docs.google.com/document/d/1lv_tW35cSZtqK4PtOJoatzfnin67TIBDIpeKVcHHlL8/pub).
  - [Dada's in-depth critique of slot pooling](https://docs.google.com/document/d/1X6XvEQX1JUyatRhFa3Xzs_SQeA_-KswbP4i8Zd8a4RY/edit#heading=h.kx5ip3nsx9r0)
- [Mappool video guide](https://www.youtube.com/watch?v=MBVaAffk4is) (by [DigitalHypno](https://osu.ppy.sh/users/4384207)) - A video guide on mappooling.
- [Pooling for 6 Digits](https://docs.google.com/document/d/10HMPaSnTgQ8OjedlzobFBCB_EyqDBayUqL1Us7iUC7I/) (by [Quag](https://osu.ppy.sh/users/6535093)) - A mappooling guide for the 6 digit rank range.
- [Refereeing Guide](https://docs.google.com/document/d/1CDZCOS1xHFFI6rotEJqPsYfnGBgjGlZk8FNxMDWzOmg/) (by [Yazzehh](https://osu.ppy.sh/users/7068973)) - A text guide on refereeing, including tournament client setup for live-spectating any match you happen to be reffing.
- [Regex for Discord Handles and osu! User IDs](https://gist.github.com/DRCallaghan/8d394d0b510f75fa58c2267cd1e4da32) (by [D I O](https://osu.ppy.sh/users/3958619)) - A text guide on using regular expressions to control registration form input.

### Website Templates
- [Cosette Lite](https://github.com/MiraiSubject/cosette-lite) (by [MiraiSubject](https://osu.ppy.sh/users/5639709)) - Verify players for your tournament and join them to your Tournament server securely!

### Tournament Overlay Templates
- VCL Tournament Overlay - Lazer edition (by [Hoaq](https://osu.ppy.sh/users/7696512)) - A template overlay compatible with Gosumemory / Tosu, made to simplify the trouble with setting up Lazer overlay. Supports both score and accuracy win conditions.
  - [Tosu version - reworked](https://github.com/vncommunityleague/vcl-overlay)
  - [Tosu version](https://github.com/vncommunityleague/vcl-tournament-overlay-tosu/) - deprecated
  - [Gosumemory version](https://github.com/vncommunityleague/vcl-tournament-overlay-gosumemory/) - deprecated
