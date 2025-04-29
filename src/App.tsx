import React from 'react';
import { ExamProvider } from './context/ExamContext';
import ExamHeader from './components/ExamHeader';
import ChapterSelector from './components/ChapterSelector';
import QuestionNavigation from './components/QuestionNavigation';
import QuestionDisplay from './components/QuestionDisplay';
import ExamProgress from './components/ExamProgress';

function App() {
  return (
    <ExamProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <ExamHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <QuestionDisplay />
            </div>
            
            <div className="lg:col-span-4 space-y-6">
              <ExamProgress />
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
                <ChapterSelector />
                <div className="h-px bg-slate-100" />
                <QuestionNavigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExamProvider>
  );
}

export default App;