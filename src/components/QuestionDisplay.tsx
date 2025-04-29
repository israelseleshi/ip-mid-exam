import { useExam } from '../context/ExamContext';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion';
import WriteOutputQuestion from './questions/WriteOutputQuestion';
import CodingQuestion from './questions/CodingQuestion';
import { QuestionType } from '../types';

const QuestionDisplay = () => {
  const { currentQuestion, nextQuestion, previousQuestion } = useExam();
  
  if (!currentQuestion) {
    return <div className="text-center p-8 bg-white rounded-lg shadow">No question selected</div>;
  }
  
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case QuestionType.MultipleChoice:
        return <MultipleChoiceQuestion question={currentQuestion} />;
      case QuestionType.WriteOutput:
        return <WriteOutputQuestion question={currentQuestion} />;
      case QuestionType.Coding:
        return <CodingQuestion question={currentQuestion} />;
      default:
        return <div>Unknown question type</div>;
    }
  };
  
  return (
    <div className="mb-8">
      {renderQuestion()}
      
      <div className="flex justify-between mt-6">
        <button
          onClick={previousQuestion}
          className="px-5 py-2 rounded-md border border-gray-300 flex items-center space-x-2 hover:bg-gray-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Previous</span>
        </button>
        
        <button
          onClick={nextQuestion}
          className="px-5 py-2 rounded-md bg-blue-600 text-white flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <span>Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuestionDisplay;