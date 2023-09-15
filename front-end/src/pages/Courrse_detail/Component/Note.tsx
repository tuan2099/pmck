import { useState } from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Textarea from '@mui/joy/Textarea'
import IconButton from '@mui/joy/IconButton'
import Menu from '@mui/joy/Menu'
import MenuItem from '@mui/joy/MenuItem'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import { FaBold, FaItalic, FaCheck, FaChevronDown } from 'react-icons/fa'

function Note() {
  const [italic, setItalic] = useState(false)
  const [fontWeight, setFontWeight] = useState('normal')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  return (
    <>
      <Textarea
        placeholder='Type something here…'
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto'
            }}
          >
            <IconButton variant='plain' color='neutral' onClick={(event) => setAnchorEl(event.currentTarget)}>
              <FaBold />
              <FaChevronDown fontSize='md' />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size='sm'
              placement='bottom-start'
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight)
                    setAnchorEl(null)
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>{fontWeight === weight && <FaCheck fontSize='sm' />}</ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FaItalic />
            </IconButton>
            <Button sx={{ ml: 'auto' }}>Send</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial'
        }}
      />
    </>
  )
}

export default Note
