import React from 'react';

import './LearningOptions.css';

const LearningOptions = (props) => {
  const options = [
    { text: 'Game of Life', handler: () => {}, id: 1 },
    { text: 'Choosing a bank', handler: () => {}, id: 2 },
    { text: 'Credit score', handler: () => {}, id: 3 },
    {
      text: 'Investing',
      handler: props.actionProvider.handleInvestingList,
      id: 4,
    },
    { text: 'Mock interviews', handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
