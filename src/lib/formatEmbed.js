/**
 * @name GitHub-Discord-Webhooks
 * @file Convert config.yml embed configuration to Discord embed and replace placeholders
 * @author ThisLightMan <light@corebot.dev>
 * @license MIT
 * @version 1.0
 */

const replacePlaceholders = require('./replacePlaceholders')

/**
 * Convert config.yml embed configuration to Discord embed and replace placeholders
 * @param {object} embed The Discord embed configuration
 * @param {object} placeholders An object with placeholders as keys and their values as values
 * @returns {object} The formatted Discord embed with placeholders replaced
 */
const formatEmbed = (embed, placeholders) => {
    const fields = embed?.Fields?.map(field => {
        return {
            name: replacePlaceholders(field?.Name, placeholders),
            value: replacePlaceholders(field?.Value, placeholders),
            inline: field?.Inline
        }
    })

    return {
        title: replacePlaceholders(embed?.Title, placeholders),
        description: replacePlaceholders(embed?.Description, placeholders),
        url: replacePlaceholders(embed?.URL, placeholders),
        color: parseInt(embed?.Color?.replace(/#/g, ''), 16),
        timestamp: embed?.Timestamp ? new Date().toISOString() : null,
        footer: {
            text: replacePlaceholders(embed?.Footer?.Text, placeholders),
            icon_url: replacePlaceholders(embed?.Footer?.Icon, placeholders)
        },
        thumbnail: replacePlaceholders(embed?.Thumbnail, placeholders),
        image: replacePlaceholders(embed?.Image, placeholders),
        author: {
            name: replacePlaceholders(embed?.Author?.Name, placeholders),
            url: replacePlaceholders(embed?.Author?.URL, placeholders),
            icon_url: replacePlaceholders(embed?.Author?.Icon, placeholders)
        },
        fields
    }
}

module.exports = formatEmbed
