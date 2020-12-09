//parses entered message the message
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase().trim();
    if (
      lowerCaseMessage.startsWith('hello') ||
      lowerCaseMessage.startsWith('hi')
    )
      this.actionProvider.greet();
  }
}

export default MessageParser;
