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
}

function Custombutton({
  fullWidth,
  urlButton,
  bgcolor,
  lineHeight,
  borderColor,
  textSize,
  textColor,
  hoverBgColor,
  variant,
  children,
  hoverBorderColor,
  hoverBoxShadow,
  activeBoxShadowColor,
  activeBackgroundColor,
  activeBorderColor,
  focusBoxShadowColor,
  startIcon,
  endIcon,
  padding,
  border,
  urlButtonLink
}: CustombuttonType) {
  const StyleCustomButton = styled(Button)({
    color: textColor || 'black',
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: '50px',
    fontSize: textSize || 16,
    padding: padding || '6px 12px',
    border: border || '1px solid',
    lineHeight: lineHeight || 1.5,
    backgroundColor: variant === 'text' && 'outline' ? '' : bgcolor || '#f2be05',
    borderColor: borderColor || 'none',
    '&:hover': {
      backgroundColor: hoverBgColor || '',
      borderColor: hoverBorderColor || '',
      boxShadow: hoverBoxShadow || 'none'
    },
    '&:active': {
      boxShadow: activeBoxShadowColor || 'none',
      backgroundColor: activeBackgroundColor || '',
      borderColor: activeBorderColor || ''
    },
    '&:focus': {
      boxShadow: focusBoxShadowColor || ''
    }
  })

  let resultButton

  switch (true) {
    case urlButton:
      resultButton = (
        <>
          <Link to={`${urlButtonLink}`}>
            <StyleCustomButton fullWidth={fullWidth} variant={variant} startIcon={startIcon} endIcon={endIcon}>
              {children}
            </StyleCustomButton>
          </Link>
        </>
      )
      break
    default:
      resultButton = (
        <>
          <StyleCustomButton fullWidth={fullWidth} variant={variant} startIcon={startIcon} endIcon={endIcon}>
            {children}
          </StyleCustomButton>
        </>
      )
      break
  }

  return <>{resultButton}</>
}

export default Custombutton
