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

### Official Support
- [Official tournament support](https://osu.ppy.sh/wiki/en/Tournaments/Official_support) - Information about screening, badging and main-menu banners.
- [Official Tournament Support Updates](https://osu.ppy.sh/community/forums/topics/1715676?n=1) - A thread of all changes to the above wiki starting in February 2023.
- [Community Tournament Status Tracker](https://docs.google.com/spreadsheets/d/1bV5MyrJZI0F52Bx9EcYxdfRu8qGnhWRBKdXHK9uPbO0/edit?gid=1723005949#gid=1723005949) - A spreadsheet which tracks the status of tournaments requesting official support.

### Clients
- [osu!tourney](https://osu.ppy.sh/wiki/en/osu%21_tournament_client/osu%21tourney) - Information about the usage and setup osu!tourney (also referred to tourney client, stable tourney client, etc).
- [osu!tournament client](https://osu.ppy.sh/wiki/en/osu%21_tournament_client) - Information about the usage and setup of the tournament client in osu!lazer.

### Wiki/Forum
- [Tournaments](https://osu.ppy.sh/wiki/en/Tournaments) - List of official and community hosted osu! tournaments on the osu!wiki.
- [Tournaments sub-forum](https://osu.ppy.sh/community/forums/55) - Dedicated subforum for promoting and/or participating in osu! tournaments.

## Community Resources

### Automation/Bots

- [osu! Mappool Compliance Checker](https://github.com/hburn7/awesome-osu-tournaments/tree/master) (by Stage) - A Discord bot that checks a list of maps against osu!'s [content usage permissions](https://osu.ppy.sh/wiki/en/Rules/Content_usage_permissions) rules.
- [Player avatar download bulk tool](https://git.omkserver.nl/omkelderman/player-avatar-download-bulk-tool) (by oliebol) - Download osu! avatar images in bulk so you can use them in places like osu!lazer.
- [Tosurnament](https://github.com/SpartanPlume/Tosurnament) (by SpartanPlume) - Discord bot that automates most Discord/spreadsheet relationships.
- [osu! Lazer Tournament Client Bracket Generator CLI](https://github.com/DRCallaghan/osu-lazer-qualifier-results-bracket-generator) (by D I O) - Command-line interfacing program for automatically generating a complete bracket.json file for the osu! Lazer tournament client by taking qualifier results, player and team information, qualifier pool information, and tournament information.

### Databases

- Badged Tournaments:
  - Mappools:
    - [Badged tournaments (2019, 5 digit only)](https://docs.google.com/spreadsheets/d/1oaGrmsbHr9L60AgaKTz3_fuvJB7Sjxzxweakm_Uu3Y8) (by unknown)
    - [Badged tournaments (2020)](https://docs.google.com/spreadsheets/u/1/d/1nLhUJwHgb0ptksMqWIKRo01L0xiQ-xG7kTr3nhBldLI) (by DizzyH and Mirthille)
    - [Badged tournaments (2021)](https://docs.google.com/spreadsheets/u/1/d/1DWMoBsy8Sh39j65ix6OTs19qbZOzH_zSTgzFgqid7YQ) (by DizzyH)
    - [Badged tournaments (2022)](https://docs.google.com/spreadsheets/d/1IobdnWKVKcMD-kk7UpAk_diSf6HSI9GVwG500W-jdqY) (by DizzyH)
- [Maps listed by skillset](https://docs.google.com/spreadsheets/d/1wPkqXQoVZUATwWfkEbzPnk_Nr3NJ-FpIxFyjzPL11XA) (by unknown) - Ranges from 4* - 8* pools. Note that this doesn't mean a skillset shoud be confined to the slot given in the sheet.

### Development
- [bancho.js](https://bancho.js.org) (by ThePoon) - JS Library for interfacing with Bancho over IRC.
- [BanchoSharp](https://github.com/hburn7/banchosharp) (by Stage) - C# library that manages connecting to osu!Bancho and automatically manages multiplayer lobbies. Used by Brigitta and Bancho Multiplayer Bot.
- [passport-osu](https://github.com/MiraiSubject/passport-osu) (by MiraiSubject) - osu! authentication strategy for Passport and Node.js.
- [osu! provider for NextAuth.js](https://next-auth.js.org/providers/osu) (by NextAuth.js [Contributors](https://github.com/nextauthjs/next-auth/commits/main/packages/next-auth/src/providers/osu.ts)) - osu! authentication provider for NextAuth and Next.js
- [osu.js](https://osu-js.onrender.com) (by Mario564) - An unofficial Javascript and Typescript SDK for the browser-facing portion of osu! with type safety in mind.

### Spreadsheet Scripts/Tools

- [osu! api fetch stuff for google scripts](https://gist.github.com/omkelderman/037342ca6612140197d0bb6f19328884) (by oliebol) - Sample code to interface with the osu! api using Google Sheets

### Templates

- [BBCode generator for staff in forum posts](https://docs.google.com/spreadsheets/d/1giUT9wLzhI-VkM6zioNH6pVrMqGDvi0_iUsfRmGRhP8) (by Nathaniel) - Generate BBCode to nicely display your staff in the tournament forum post.
- [Mappool, qualifier and referee sheet templates](https://drive.google.com/drive/folders/1sIGjDR9_h-M8RgiJ5Nobml5DBdsulCWF) (by IceDynamix) - Sheets for mappool and referee management in the backend, as well as a sheet to organise qualifier results.
- [Referee sheets](https://drive.google.com/drive/folders/1sYTvq80pB1AESD-e_w6G-lrT02uzLO9O) (by RussianVaxei) - Includes templates for overseeing qualifiers and matches.
- [Team management templates](https://drive.google.com/drive/folders/1MrQc2fFx-OERCHFiezdtvaP3PrtXKg31) (by RussianVaxei) - Track your team's statistics and availability using this collection of sheet templates.
- [Dio and LeoFLT's tournament sheet templates](https://drive.google.com/drive/folders/1uB5uPs5__RcmuP0aHaUkUGHqeIUuObU7) (by Dio and LeoFLT) - Includes sheets for administration, mappooling, qualifiers, referees, statistics, tryouts, and team management.
- [HitomiChan's tournament sheet templates](https://drive.google.com/drive/folders/1o20TAh-EAKkd3X4RBFrcLVwunKd4yZCV) (by HitomiChan) - Includes templates for mappooling, reffing, statistics, and player administration.
- [Nathaniel's tournament sheet templates](https://drive.google.com/drive/u/1/folders/1OWK7WxQlVQQmeNdI3X7mxvGA8vywKDUB) (by Nathaniel) - Includes 1v1 templates for administration, mappooling, and reffing, as well as a BBCode forum post generator.
- [Team tournament template](https://docs.google.com/spreadsheets/d/106hHlF1rslZlCqdZ96T0oGWfqblxQIbSJ2VBR0QmbDE) (by Mario564) - Manage your team by keeping track of the team's availability, scores, lost and won maps and compare opponent's scores in previous rounds.
- [Player tournament history sheet template](https://docs.google.com/spreadsheets/d/18UWiooGGDMMkltJGm_Td1b72MVRnQQ5ceS21w2zm16U) (by Squink) - Display tournament history data in an organized manner with additional teammate data automatically updated on the side.
- [bracket.json Template](https://drive.google.com/drive/folders/1nQCujQAnoeCRQVSa4w6sEfwiNvt0USm2) (by BCraftMG) - Empty bracket.json for use with Lazer. Includes Ro64-Ro16 Single/Double Elimination

### Tools
- IRC:
    - [chat4osu!](https://osu.ppy.sh/community/forums/topics/879262) (by hallowatcher) - IRC chat client for referees and casual chatters.
    - [Brigitta](https://github.com/hburn7/Brigitta) (by Stage) - IRC client made specifically for tournament referees - primary attraction is detailed interactive display while reffing.
    - [Script chan](https://osu.ppy.sh/community/forums/topics/730734) (by shARPII) - Referee tool to create and manage lobbies.
    - [Bancho Multiplayer Bot](https://github.com/matte-ek/BanchoMultiplayerBot) (by matte-ek) - Tool for creating multiplayer lobbies and automating them.
- [gosumemory!](https://github.com/l3lackShark/gosumemory) (by l3lackShark) - Cross-Platform memory reader.
- [tosu](https://github.com/KotRikD/tosu) (by KotRikD) - Eponymous software for reading osu! memory, accounting for most of gosumemory's issues.
- [osu! Tourney Match Displayer](https://otmd.app) (by Akinari) - Software for showing current tournament multiplayer games in your livestream!

### Tutorials
- [Various Tournament Video Tutorials](https://www.youtube.com/playlist?list=PLTMORxHOcedL9Wpr1zdnjKh4KKopsHm4-) (by Dio) - A series of tournament video tutorials on a variety of topics, including the tournament client, the lazer client, streaming, reffing, sheeting, and more. Receives periodic updates with new videos.
- [Tournament Hosting Guide](https://docs.google.com/document/d/1aveFDrzwC9TiRrHAsDfRW0bVSKs3JY-v8TNmN0kB484/) (by Fairy Bread a.k.a. ill onion) - The longest plain-text guide on hosting and staffing osu! tournaments, covering basically every aspect for Standard tournaments and all aspects besides mappooling for other game mode tournaments.
- [Comprehensive Tournament Role Guide](https://docs.google.com/document/d/1ynEItqDBZYp9CVuFuJAJ6WBPLm20AacOrdiRGolUpEA/) (by Nathaniel) - A compregensive plain-text guide on almost, if not every, single role and aspect for Standard tournaments, with links and references to other resources like role-specific guides and templates.
- [Mappooling Guide](https://docs.google.com/document/d/1PERMOiwSI-mJ8s-hCsNVEG1FVeInMWyBC1eZv1iZ9SI/) (by dqwed) - A more modern mappooling guide as a counterpart to the more famous mappooling guides by [Dada](https://docs.google.com/document/d/e/2PACX-1vSEsDvb6MoutgXNY8j7-oiMMyVeJyNxISmmXPhxU0hzxNrxHl3TsuBv1FgLJgXqHGeUUlDgOWVTWnpj/pub) and [Smoothie World](https://docs.google.com/document/d/1lv_tW35cSZtqK4PtOJoatzfnin67TIBDIpeKVcHHlL8/pub).
  - [Dada's in-depth critique of slot pooling](https://docs.google.com/document/d/1X6XvEQX1JUyatRhFa3Xzs_SQeA_-KswbP4i8Zd8a4RY/edit#heading=h.kx5ip3nsx9r0)
- [Mappool video guide](https://www.youtube.com/watch?v=MBVaAffk4is) (by DigitalHypno) - A video guide on mappooling.
- [Pooling for 6 Digits](https://docs.google.com/document/d/10HMPaSnTgQ8OjedlzobFBCB_EyqDBayUqL1Us7iUC7I/) (by Quag) - A mappooling guide for the 6 digit rank range.
- [Refereeing Guide](https://docs.google.com/document/d/1CDZCOS1xHFFI6rotEJqPsYfnGBgjGlZk8FNxMDWzOmg/) (by Yazzehh) - A text guide on refereeing, including tournament client setup for live-spectating any match you happen to be reffing.
- [Regex for Discord Handles and osu! User IDs](https://gist.github.com/DRCallaghan/8d394d0b510f75fa58c2267cd1e4da32) (by Dio) - A text guide on using regular expressions to control registration form input.

### Website Templates
- [Cosette Lite](https://github.com/MiraiSubject/cosette-lite) (by MiraiSubject) - Verify players for your tournament and join them to your Tournament server securely!

### Tournament Overlay Templates
- VCL Tournament Overlay - Lazer edition (by Hoaq) - A template overlay compatible with Gosumemory / Tosu, made to simplify the trouble with setting up Lazer overlay. Supports both score and accuracy win conditions.
  - [Gosumemory version](https://github.com/vncommunityleague/vcl-tournament-overlay-gosumemory/) - deprecated
  - [Tosu version](https://github.com/vncommunityleague/vcl-tournament-overlay-tosu/) - recommended
