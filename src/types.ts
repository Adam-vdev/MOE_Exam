export interface Question {
  id: string | number;
  pdfNumber: string | number;
  text: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  page: string;
  section?: string;
}

export interface ExamState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string | number, string>;
  isFinished: false;
  timeRemaining: number;
}
