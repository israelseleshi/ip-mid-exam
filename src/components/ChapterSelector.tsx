import { useExam } from '../context/ExamContext';
import { BookOpen, CheckCircle } from 'lucide-react';

const ChapterSelector = () => {
  const { chapters, setCurrentChapter, progress } = useExam();
  
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Chapters</h2>
      <div className="grid grid-cols-1 gap-3">
        {chapters.map(chapter => {
          const chapterQuestions = chapter.questions.length;
          const answeredQuestions = progress.answers.filter(a => 
            chapter.questions.some(q => q.id === a.questionId)
          ).length;
          const completionPercentage = Math.round((answeredQuestions / chapterQuestions) * 100);
          
          return (
            <button
              key={chapter.id}
              onClick={() => setCurrentChapter(chapter.id)}
              className={`p-4 rounded-xl transition-all duration-300 text-left ${
                progress.currentChapter === chapter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 ${progress.currentChapter === chapter.id ? 'text-blue-200' : 'text-blue-600'}`}>
                  {completionPercentage === 100 ? <CheckCircle size={20} /> : <BookOpen size={20} />}
                </div>
                <div>
                  <h3 className="font-medium text-sm">{chapter.title.split(':')[0]}</h3>
                  <p className={`text-xs mt-1 ${
                    progress.currentChapter === chapter.id ? 'text-blue-200' : 'text-slate-500'
                  }`}>
                    {answeredQuestions} of {chapterQuestions} questions completed
                  </p>
                  <div className="mt-2 bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        progress.currentChapter === chapter.id
                          ? 'bg-white'
                          : 'bg-blue-600'
                      }`}
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterSelector;