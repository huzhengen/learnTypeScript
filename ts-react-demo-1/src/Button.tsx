import React from 'react'
import './Button.css'

interface IProps {
  size?: string;
  children?: string | JSX.Element | JSX.Element[];
}

// type Props = { size: string | undefined }

export default function Button(props: IProps) {
  return <div className={`button ${props.size}`}>{props.children}</div>
}