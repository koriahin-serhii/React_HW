import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [
    { id: 1, text: 'Question 1?', correctAnswer: 'Option 1', selected: null },
    { id: 2, text: 'Question 2?', correctAnswer: 'Option 2', selected: null },
    { id: 3, text: 'Question 3?', correctAnswer: 'Option 1', selected: null },
    { id: 4, text: 'Question 4?', correctAnswer: 'Option 1', selected: null },
    { id: 5, text: 'Question 5?', correctAnswer: 'Option 2', selected: null },
  ],
  score: null,
}

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      if (question) {
        question.selected = answer
      }
    },
    submitAnswers: (state) => {
      let score = 0
      state.questions.forEach((q) => {
        if (q.selected === q.correctAnswer) score++
      })
      state.score = score
    },
  },
})

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions
export default questionnaireSlice.reducer
