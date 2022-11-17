import { Client, EmbedBuilder, APIEmbedField, GatewayIntentBits, TextChannel } from 'discord.js';
import { readFile } from 'fs/promises';
import { marked } from 'marked';
require('dotenv').config()
export default class DiscordBot extends Client {

    private destinationChannelId = process.env.DISCORD_CHANNEL_ID!;
    constructor() {
        super({
            presence: {
                status: "online"
            },
            intents: [GatewayIntentBits.GuildMessages]
        });
        this.on('ready', this.onReady);
        this.login(process.env.DISCORD_TOKEN);
    }

    async onReady() {
        const readme = await this.parseReadme();

        const communityResSplit = readme.communityResources.flatMap(resource => {
            if (resource.items.length <= 1024) {
                return [{
                    name: resource.category,
                    value: resource.items
                }]
            }

            return resource.items.split('\n').reduce((acc, curr) => {
                if (acc[acc.length - 1].length + curr.length > 1024) {
                    return [...acc, curr];
                }
                acc[acc.length - 1] += ("\n" + curr);
                return acc;
            }, [""] as string[]).map((value, index) => {
                return {
                    name: resource.category + (index === 0 ? '' : ` (Cont.)`),
                    value
                }
            });

        }) as APIEmbedField[];

        const reverifyEmbed = new EmbedBuilder()
            .setTitle('Reverify if you changed your username')
            .setURL('https://oth.mirai.gg')
            .setColor(0x00ff5d)

        const officialResourcesEmbed = new EmbedBuilder()
            .setColor('#ff66aa')
            .setTimestamp(new Date())
            .addFields([
                { name: "Official Resources", value: readme.officialResources }
            ])
            .setFooter({ text: "Last updated: " })

        const communityResourcesEmbed = new EmbedBuilder()
            .setTitle("Community Resources")
            .setColor('#0099ff')
            .setAuthor({ name: "Contribute to this list by filing a PR", url: "https://github.com/MiraiSubject/awesome-osu-tournaments" })
            .setTimestamp(new Date())
            .addFields(communityResSplit)
            .setFooter({ text: "Last updated: " });
        await this.channels.fetch(this.destinationChannelId);

        const channel = this.channels.cache.get(this.destinationChannelId) as TextChannel;
        channel.bulkDelete(100);
        await channel.send({
            embeds: [reverifyEmbed, officialResourcesEmbed, communityResourcesEmbed]
        });
        console.log("Sucessfully updated embeds in the discord channel");
        process.exit(0);
    }

    private async parseReadme(): Promise<IParsedResult> {
        const readmeFile = await readFile('README.md', 'utf8');
        const lexed = marked.lexer(readmeFile);
        let currentHeading: ResourceCategory = ResourceCategory.Official
        const parsedResult: IParsedResult = {
            officialResources: '',
            communityResources: []
        }
        // console.log(lexed);
        for (const token of lexed) {
            if (token.type === 'heading') {
                if (token.depth === 2) {
                    currentHeading = token.text as ResourceCategory;
                    continue;
                }
                if (token.depth === 3) {
                    parsedResult.communityResources.push({
                        category: token.text,
                        items: ''
                    });

                    continue;
                }
            }
            if (token.type === 'list') {
                switch (currentHeading) {
                    case ResourceCategory.Official:
                        parsedResult.officialResources = token.raw;
                        break;
                    case ResourceCategory.Community:
                        parsedResult.communityResources[parsedResult.communityResources.length - 1].items = token.raw;
                        break;
                }
            }
        }

        return parsedResult;
    }
}

enum ResourceCategory {
    Official = 'Official Resources',
    Community = 'Community Resources'
}

interface IParsedResult {
    officialResources: string;
    communityResources: {
        category: string;
        items: string;
    }[];
}

new DiscordBot();
