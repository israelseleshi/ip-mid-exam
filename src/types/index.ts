export enum QuestionType {
  MultipleChoice = "multipleChoice",
  WriteOutput = "writeOutput",
  Coding = "coding"
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer: string;
  chapter: number;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

export interface ExamProgress {
  answers: UserAnswer[];
  currentChapter: number;
  currentQuestionIndex: number;
}