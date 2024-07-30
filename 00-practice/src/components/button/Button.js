import styled from 'styled-components'

const ButtonContainer = ({ className, width, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export const Button = styled(ButtonContainer)`
  font-size: 16px;
  padding: 5px;
  width: ${({ width = '100px' }) => width};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }
`
