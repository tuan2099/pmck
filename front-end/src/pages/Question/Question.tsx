import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useQuery } from '@tanstack/react-query'
import faqQuestionApi from 'src/apis/faqQuestion.api'

function Question() {
  const { data: faqQuestion } = useQuery({
    queryKey: ['FAQQuestion'],
    queryFn: () => {
      return faqQuestionApi.getFaqQuestions()
    }
  })
  console.log(faqQuestion, 'data FAQ')
  return <></>
}

export default Question
