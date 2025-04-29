import { createContext, ReactNode, useContext, useState } from 'react';
import { Question, UserAnswer, ExamProgress, Chapter } from '../types';
import { chapters, allQuestions } from '../data/questions';

interface ExamContextType {
  progress: ExamProgress;
  chapters: Chapter[];
  allQuestions: Question[];
  currentQuestion: Question | null;
  setCurrentChapter: (chapterId: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  submitAnswer: (answer: string) => void;
  getScore: () => { correct: number; total: number; percentage: number };
  resetExam: () => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const useExam = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};

interface ExamProviderProps {
  children: ReactNode;
}

export const ExamProvider = ({ children }: ExamProviderProps) => {
  const [progress, setProgress] = useState<ExamProgress>({
    answers: [],
    currentChapter: 1,
    currentQuestionIndex: 0
  });

  const currentChapterQuestions = chapters.find(c => c.id === progress.currentChapter)?.questions || [];
  const currentQuestion = currentChapterQuestions[progress.currentQuestionIndex] || null;

  const setCurrentChapter = (chapterId: number) => {
    setProgress(prev => ({
      ...prev,
      currentChapter: chapterId,
      currentQuestionIndex: 0
    }));
  };

  const setCurrentQuestionIndex = (index: number) => {
    setProgress(prev => ({
      ...prev,
      currentQuestionIndex: index
    }));
  };

  const submitAnswer = (answer: string) => {
    if (!currentQuestion) return;
    
    const isCorrect = currentQuestion.correctAnswer === answer;
    
    setProgress(prev => {
      // Check if we already have an answer for this question
      const existingAnswerIndex = prev.answers.findIndex(a => a.questionId === currentQuestion.id);
      
      let newAnswers = [...prev.answers];
      
      if (existingAnswerIndex >= 0) {
        // Update existing answer
        newAnswers[existingAnswerIndex] = {
          questionId: currentQuestion.id,
          answer,
          isCorrect
        };
      } else {
        // Add new answer
        newAnswers.push({
          questionId: currentQuestion.id,
          answer,
          isCorrect
        });
      }
      
      return {
        ...prev,
        answers: newAnswers
      };
    });
  };

  const getScore = () => {
    const correct = progress.answers.filter(a => a.isCorrect).length;
    const total = progress.answers.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    return { correct, total, percentage };
  };

  const resetExam = () => {
    setProgress({
      answers: [],
      currentChapter: 1,
      currentQuestionIndex: 0
    });
  };

  const nextQuestion = () => {
    if (progress.currentQuestionIndex < currentChapterQuestions.length - 1) {
      setProgress(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else if (progress.currentChapter < chapters.length) {
      // Move to the next chapter
      setProgress(prev => ({
        ...prev,
        currentChapter: prev.currentChapter + 1,
        currentQuestionIndex: 0
      }));
    }
  };

  const previousQuestion = () => {
    if (progress.currentQuestionIndex > 0) {
      setProgress(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    } else if (progress.currentChapter > 1) {
      // Move to the previous chapter
      const prevChapterQuestions = chapters.find(c => c.id === progress.currentChapter - 1)?.questions || [];
      setProgress(prev => ({
        ...prev,
        currentChapter: prev.currentChapter - 1,
        currentQuestionIndex: prevChapterQuestions.length - 1
      }));
    }
  };

  const value = {
    progress,
    chapters,
    allQuestions,
    currentQuestion,
    setCurrentChapter,
    setCurrentQuestionIndex,
    submitAnswer,
    getScore,
    resetExam,
    nextQuestion,
    previousQuestion
  };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
};