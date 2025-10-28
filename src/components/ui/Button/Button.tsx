import React from 'react'

interface ButtonProps {
    text: string
    onClick?: () => void
    disabled?: boolean
    color?: string
}

const Footer: React.FC<ButtonProps> = ({ text, onClick = () => {}, disabled = false, color = '#2c9de9ff'}) => {
    return (
        <button
            type='button'
            onClick={onClick}
            disabled={disabled}
            style={{ backgroundColor: color, color: 'white' }}
            className='btn w-100'
        >
            <strong>{text}</strong>
        </button>
    )
}

export default Footer