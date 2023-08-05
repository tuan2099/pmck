import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material'

function Fillter({ handleChangeCategory, handleChange, checkIncludeCategory, courseCategories, expanded }: any) {
  return (
    <>
      <Accordion expanded={expanded.panel1} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          }
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '70%', flexShrink: 0 }}>Danh mục khóa học</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={checkIncludeCategory('all')} />}
              label='Tất cả khóa học'
              value='all'
              onChange={(_, checked) => {
                handleChangeCategory(checked, 'all')
              }}
            />
            {courseCategories?.data.data.map((item: any) => (
              <FormControlLabel
                key={item.id}
                required
                control={<Checkbox checked={checkIncludeCategory(item.attributes.name)} />}
                label={item.attributes.title}
                onChange={(_, checked) => {
                  handleChangeCategory(checked, item.attributes.name)
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Fillter
