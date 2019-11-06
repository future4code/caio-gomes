import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Container = styled.div`
  height: 100vh;
`

export const FormTripContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
` 
export const Title = styled.h1`
  margin: 0;
`
export const StyledTextField = styled(TextField)`
  margin: 10px;
  padding: 10px;
`