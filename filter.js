function getShortMessages(messages) {
    return messages
        .filter(a => a.message.length < 50)
        .map(a => a.message);
}

module.exports = getShortMessages