import React from 'react'
import './Button.css'

interface IProps {
  size?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<IProps> = (props) => {
  return <div className={`button ${props.size}`} onClick={props.onClick}>{props.children}</div>
}

export default Button

// type Props = { size: string | undefined }

// export default function Button(props: IProps) {
//   return <div className={`button ${props.size}`}>{props.children}</div>
// }