import { useExam } from '../context/ExamContext';

const QuestionNavigation = () => {
  const { 
    progress, 
    chapters, 
    setCurrentQuestionIndex,
  } = useExam();
  
  const currentChapter = chapters.find(c => c.id === progress.currentChapter);
  const currentChapterQuestions = currentChapter?.questions || [];
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {currentChapter?.title} - Questions
      </h2>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
        {currentChapterQuestions.map((_, index) => {
          // Check if the user has answered this question
          const questionId = currentChapterQuestions[index].id;
          const answer = progress.answers.find(a => a.questionId === questionId);
          
          return (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                ${progress.currentQuestionIndex === index 
                  ? 'bg-blue-600 text-white ring-2 ring-blue-300 ring-offset-2' 
                  : answer 
                    ? answer.isCorrect
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : 'bg-red-100 text-red-800 border border-red-300'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionNavigation;