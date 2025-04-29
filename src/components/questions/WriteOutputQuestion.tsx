import { useState, useEffect } from 'react';
import { Question } from '../../types';
import { useExam } from '../../context/ExamContext';

interface WriteOutputQuestionProps {
  question: Question;
}

const WriteOutputQuestion = ({ question }: WriteOutputQuestionProps) => {
  const { submitAnswer, progress } = useExam();
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Split the question text to extract the code block
  const parts = question.text.split('```');
  const questionText = parts[0];
  const codeBlock = parts.length > 1 ? parts[1] : null;
  
  // Check if the user has already answered this question
  useEffect(() => {
    const existingAnswer = progress.answers.find(a => a.questionId === question.id);
    if (existingAnswer) {
      setAnswer(existingAnswer.answer);
      setIsSubmitted(true);
    } else {
      setAnswer('');
      setIsSubmitted(false);
    }
  }, [question.id, progress.answers]);
  
  const handleSubmit = () => {
    if (!answer.trim()) return;
    
    submitAnswer(answer.trim());
    setIsSubmitted(true);
  };
  
  const isCorrect = isSubmitted && answer.trim() === question.correctAnswer;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Question {question.id}
        </h3>
        <p className="text-gray-700 mb-4">{questionText}</p>
        
        {codeBlock && (
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <pre className="text-sm font-mono">{codeBlock}</pre>
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
          Your Answer:
        </label>
        <textarea
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={isSubmitted}
          rows={3}
          className={`w-full p-3 border rounded-md font-mono transition-colors
            ${isSubmitted
              ? isCorrect
                ? 'border-green-300 bg-green-50'
                : 'border-red-300 bg-red-50'
              : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          placeholder="Type your answer here..."
        />
      </div>
      
      {isSubmitted && (
        <div className={`p-4 rounded-md mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <h4 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </h4>
          <p className="text-sm mt-1">
            {isCorrect 
              ? 'Your answer matches the expected output.' 
              : 'The expected output is:'}
          </p>
          {!isCorrect && (
            <div className="bg-white p-3 rounded mt-2 border border-gray-200">
              <pre className="text-sm font-mono text-gray-800">{question.correctAnswer}</pre>
            </div>
          )}
        </div>
      )}
      
      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className={`px-6 py-2 rounded-md font-medium transition-all duration-200
            ${answer.trim()
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};

export default WriteOutputQuestion;