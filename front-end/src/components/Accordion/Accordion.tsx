import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { FaAngleRight } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

function Accordion({ item }) {
  const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
      borderRadius: '10px',
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '&:before': {
        display: 'none'
      },
      '&:hover': {
        backgroundColor: '#fafafa',
        transition: 0.5
      }
    })
  )
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<FaAngleRight sx={{ fontSize: '0.9rem' }} />} {...props} />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
    }
  }))

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2)
  }))

  const [expanded, setExpanded] = React.useState<string | false>('')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <div className='font-semibold'>{item.attributes.question}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className='pl-6 text-sm'>
          <ReactMarkdown>{item.attributes.answer}</ReactMarkdown>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Accordion
