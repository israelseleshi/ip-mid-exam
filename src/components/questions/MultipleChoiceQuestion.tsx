import { useState, useEffect } from 'react';
import { Question } from '../../types';
import { useExam } from '../../context/ExamContext';

interface MultipleChoiceQuestionProps {
  question: Question;
}

const MultipleChoiceQuestion = ({ question }: MultipleChoiceQuestionProps) => {
  const { submitAnswer, progress } = useExam();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check if the user has already answered this question
  useEffect(() => {
    const existingAnswer = progress.answers.find(a => a.questionId === question.id);
    if (existingAnswer) {
      setSelectedOption(existingAnswer.answer);
      setIsSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  }, [question.id, progress.answers]);
  
  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };
  
  const handleSubmit = () => {
    if (!selectedOption) return;
    
    submitAnswer(selectedOption);
    setIsSubmitted(true);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Question {question.id}
        </h3>
        <p className="text-gray-700">{question.text}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        {question.options?.map((option, index) => {
          const isCorrect = option === question.correctAnswer;
          const isSelected = option === selectedOption;
          
          return (
            <div
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`p-4 rounded-md border cursor-pointer transition-all duration-200 
                ${!isSubmitted 
                  ? isSelected
                    ? 'border-blue-400 bg-blue-50 shadow-sm'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  : isSelected
                    ? isCorrect
                      ? 'border-green-400 bg-green-50'
                      : 'border-red-400 bg-red-50'
                    : isCorrect
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-200 opacity-70'
                }`}
            >
              <div className="flex items-start">
                <div className={`h-5 w-5 rounded-full border flex-shrink-0 flex items-center justify-center mt-0.5
                  ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
                >
                  {isSelected && <div className="h-2 w-2 rounded-full bg-white"></div>}
                </div>
                <span className="ml-3 text-gray-700">{option}</span>
              </div>
              
              {isSubmitted && isSelected && !isCorrect && (
                <p className="text-red-600 text-sm mt-2 pl-8">
                  Your answer is incorrect.
                </p>
              )}
              
              {isSubmitted && isCorrect && (
                <p className="text-green-600 text-sm mt-2 pl-8">
                  This is the correct answer.
                </p>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-between items-center mt-6">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200
              ${selectedOption
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
          >
            Submit Answer
          </button>
        ) : (
          <div className="text-sm text-gray-600">
            {selectedOption === question.correctAnswer
              ? '✓ Correct! Well done.'
              : '✗ Incorrect. The correct answer is shown above.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;