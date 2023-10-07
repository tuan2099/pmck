import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

interface CustombuttonType {
  fullWidth?: boolean
  bgcolor?: string
  lineHeight?: number
  borderColor?: string
  textSize?: number
  textColor?: string
  hoverBgColor?: string
  variant?: string | any
  children?: any
  hoverBorderColor?: string
  hoverBoxShadow?: string
  activeBoxShadowColor?: string
  activeBackgroundColor?: string
  activeBorderColor?: string
  focusBoxShadowColor?: string
  urlButton?: boolean
  loadingButton?: boolean
  startIcon?: any
  endIcon?: any
  borderRadius?: string
  padding?: string
  border?: string
  urlButtonLink?: any
  onClick?: () => void
}

function Custombutton({...props}: CustombuttonType) {
  const StyleCustomButton = styled(Button)({
    color: props.textColor || 'black',
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: '50px',
    fontSize: props.textSize || 16,
    padding: props.padding || '6px 12px',
    border: props.border || '1px solid',
    lineHeight: props.lineHeight || 1.5,
    backgroundColor: props.variant === 'text' && 'outline' ? '' : props.bgcolor || '#f2be05',
    borderColor: props.borderColor || 'none',
    '&:hover': {
      backgroundColor: props.hoverBgColor || '',
      borderColor: props.hoverBorderColor || '',
      boxShadow: props.hoverBoxShadow || 'none'
    },
    '&:active': {
      boxShadow: props.activeBoxShadowColor || 'none',
      backgroundColor: props.activeBackgroundColor || '',
      borderColor: props.activeBorderColor || ''
    },
    '&:focus': {
      boxShadow: props.focusBoxShadowColor || ''
    }
  })

  let resultButton

  switch (true) {
    case props.urlButton:
      resultButton = (
        <>
          <Link to={`${props.urlButtonLink}`}>
            <StyleCustomButton fullWidth={props.fullWidth} variant={props.variant} startIcon={props.startIcon} endIcon={props.endIcon}>
              {props.children}
            </StyleCustomButton>
          </Link>
        </>
      )
      break
    default:
      resultButton = (
        <>
          <StyleCustomButton
            fullWidth={props.fullWidth}
            variant={props.variant}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            onClick={props.onClick}
          >
            {props.children}
          </StyleCustomButton>
        </>
      )
      break
  }

  return <>{resultButton}</>
}

export default Custombutton
