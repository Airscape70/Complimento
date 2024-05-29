import React, { useState } from 'react';

interface Props {
  question: string;
  options: string[];
  onSubmit: (answers: string[]) => void;
}

const QuizQuestion: React.FC<Props> = ({ question, options, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = () => {
    onSubmit(selectedOptions);
  };

  return (
    <div>
      <p>{question}</p>
      <form>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleSelectOption(option)}
            />
            {option}
          </label>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

