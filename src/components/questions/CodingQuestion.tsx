import { useState, useEffect } from 'react';
import { Question } from '../../types';
import { useExam } from '../../context/ExamContext';

interface CodingQuestionProps {
  question: Question;
}

const CodingQuestion = ({ question }: CodingQuestionProps) => {
  const { submitAnswer, progress } = useExam();
  const [code, setCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check if the user has already answered this question
  useEffect(() => {
    const existingAnswer = progress.answers.find(a => a.questionId === question.id);
    if (existingAnswer) {
      setCode(existingAnswer.answer);
      setIsSubmitted(true);
    } else {
      setCode('');
      setIsSubmitted(false);
    }
  }, [question.id, progress.answers]);
  
  const handleSubmit = () => {
    if (!code.trim()) return;
    
    submitAnswer(code);
    setIsSubmitted(true);
  };

  const showSolution = isSubmitted;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Question {question.id}
        </h3>
        <p className="text-gray-700 whitespace-pre-line">{question.text}</p>
      </div>
      
      <div className="mb-6">
        <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
          Your Code:
        </label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={isSubmitted}
          rows={8}
          className="w-full p-3 border border-gray-300 rounded-md font-mono bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your PHP code here..."
        />
      </div>
      
      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          disabled={!code.trim()}
          className={`px-6 py-2 rounded-md font-medium transition-all duration-200
            ${code.trim()
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
        >
          Submit Code
        </button>
      )}
      
      {showSolution && (
        <div className="mt-8 border-t pt-6">
          <h4 className="font-medium text-gray-800 mb-3">Reference Solution:</h4>
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <pre className="text-sm font-mono">{question.correctAnswer}</pre>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: There may be multiple valid solutions to this problem. Use this reference solution to check your approach.
          </p>
        </div>
      )}
    </div>
  );
};

export default CodingQuestion;