import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const FormSection = styled.section`
  padding: 40px 0;
  max-width: 600px;
`

export const Title = styled.h2`
  font-size: 24px;
  color: ${cores.rosa};
  margin-bottom: 24px;
`

export const FieldGroup = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${cores.cinzaClaro};
  border-radius: 8px;
`

export const Button = styled.button`
  margin-top: 24px;
  padding: 12px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`

export const SuccessMessage = styled.div`
  text-align: center;

  h2 {
    color: ${cores.rosa};
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: ${cores.cinza};
  }
`
