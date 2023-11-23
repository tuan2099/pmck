import React from 'react'
import { SideBarContainer } from '../StyleComponents'
import { logo } from '../../assets/images/index'
import { Accordion, Box, Typography, AccordionSummary, AccordionDetails } from '@mui/material'
import { FaAngleDown, FaCalendar, FaHome, FaTable } from 'react-icons/fa'

const SideBar = () => {
  return (
    <SideBarContainer>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <img src={logo} alt='' />
        <Typography fontSize={24} fontWeight={500}>
          Spire
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ textTransform: 'uppercase', paddingY: '18px', marginTop: '15px', marginBottom: '5px' }}
          fontSize={14}
        >
          Main
        </Typography>
        <Accordion sx={{ boxShadow: 'none', paddingY: '9px', marginTop: '8px' }}>
          <AccordionSummary expandIcon={<FaAngleDown />} sx={{ padding: '0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaHome />
              <Typography>Dashboard</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Dashboard1</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Dashboard2</Typography>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', paddingY: '9px', marginTop: '8px' }}>
          <FaTable />
          <Typography>Advance Table</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingY: '9px',
            marginTop: '8px',
            justifyContent: 'space-between'
          }}
        >
          <FaCalendar />
          <Typography sx={{ flex: 1 }}>Calendar</Typography>
          <Box
            sx={{ padding: '3px 6px', borderRadius: '15px', backgroundColor: '#2196f3', color: 'white' }}
            fontSize={12}
          >
            New
          </Box>
        </Box>
      </Box>
    </SideBarContainer>
  )
}

export default SideBar
