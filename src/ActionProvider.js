//Implements actions based on parsed message
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage('Hi, how may I help you?');
    this.addMessageToState(message);
  }

  handleInvestingList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Investing Topics:",
      {
        widget: 'InvestingLinks',
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
