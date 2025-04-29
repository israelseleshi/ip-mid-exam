import { useExam } from '../context/ExamContext';
import { BookOpen } from 'lucide-react';

const ExamHeader = () => {
  const { chapters, progress, resetExam } = useExam();
  const currentChapter = chapters.find(c => c.id === progress.currentChapter);
  
  return (
    <header className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-8">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Web Development Exam</h1>
              {currentChapter && (
                <p className="text-slate-500 mt-1">
                  {currentChapter.title}
                </p>
              )}
            </div>
          </div>
          
          <button
            onClick={resetExam}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all duration-200 font-medium text-sm"
          >
            Reset Progress
          </button>
        </div>
      </div>
    </header>
  );
};

export default ExamHeader;