import { useExam } from '../context/ExamContext';
import { Trophy, Target, Zap } from 'lucide-react';

const ExamProgress = () => {
  const { getScore, chapters, progress } = useExam();
  const { correct, total, percentage } = getScore();
  
  const currentChapter = chapters.find(c => c.id === progress.currentChapter);
  const questionsInChapter = currentChapter?.questions.length || 0;
  const answeredInChapter = progress.answers.filter(a => {
    const question = currentChapter?.questions.find(q => q.id === a.questionId);
    return question !== undefined;
  }).length;
  
  const chapterPercentage = questionsInChapter > 0 
    ? Math.round((answeredInChapter / questionsInChapter) * 100) 
    : 0;
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
          <Trophy size={20} />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Your Progress</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target size={16} className="text-blue-600" />
              <h3 className="text-sm font-medium text-slate-700">Overall Progress</h3>
            </div>
            <span className="text-sm font-semibold text-slate-900">{percentage}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {total} of {chapters.flatMap(c => c.questions).length} questions answered
          </p>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-purple-600" />
              <h3 className="text-sm font-medium text-slate-700">Chapter Progress</h3>
            </div>
            <span className="text-sm font-semibold text-slate-900">{chapterPercentage}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${chapterPercentage}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {answeredInChapter} of {questionsInChapter} in {currentChapter?.title.split(':')[0]}
          </p>
        </div>
        
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-700">Current Score</h3>
            <div className={`text-lg font-semibold ${
              percentage >= 70 ? 'text-green-600' : 
              percentage >= 50 ? 'text-yellow-600' : 
              'text-red-600'
            }`}>
              {correct}/{total} ({percentage}%)
            </div>
          </div>
          
          {total > 0 && (
            <p className={`mt-2 text-sm ${
              percentage >= 70 ? 'text-green-600' : 
              percentage >= 50 ? 'text-yellow-600' : 
              'text-red-600'
            }`}>
              {percentage >= 80 
                ? "Excellent! Keep up the great work! 🎉"
                : percentage >= 60
                  ? "Good progress! You're on the right track! 👍"
                  : percentage >= 40
                    ? "Keep studying, you're getting there! 💪"
                    : "Don't give up! Practice makes perfect! 📚"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamProgress;