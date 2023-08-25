import { styled, alpha } from '@mui/material/styles'
import { Menu, MenuProps } from '@mui/material'

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    left: '50% !important',
    transform: 'translateX(-50%) !important',
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 1296,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow: 'none',
    '& .MuiMenu-list': {
      padding: '5px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}))
