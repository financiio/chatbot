//must includes initialMessages property
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from './components/LearningOptions/LearningOptions';
import LinkList from './components/LinkList/LinkList';

const config = {
  botName: 'Financiio ChatBot',
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: 'learningOptions',
    }),
  ],
  widgets: [
    {
      widgetName: 'learningOptions',
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: 'InvestingLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            id: 1,
            text: 'Investing 1',
            url: 'https://www.financiio.ca/',
          },
          {
            id: 2,
            text: 'Investing 2',
            url: 'https://www.financiio.ca/',
          },
          {
            id: 3,
            text: 'Investing 3',
            url: 'https://www.financiio.ca/',
          },
        ],
      },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#FFFFF',
    },
    chatButton: {
      backgroundColor: '#FFFFF',
    },
  },
};

export default config;
