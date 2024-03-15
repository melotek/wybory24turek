import React from 'react'
import { Button, ButtonProps, useTheme } from '@mui/material'

type MyCustomProps = {
  isRounded?: boolean   
} & ButtonProps

const MyButton = ({isRounded= false, ...rest}: MyCustomProps) => 
{
    const theme = useTheme()
  return (
    <Button { ...rest} sx={{
        borderRadius: isRounded ? "30rem" : "0",
        padding: theme.spacing(2.5) + " " + theme.spacing(5.5),

    }}/>
  )
}

export default MyButton