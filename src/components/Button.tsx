import React, { type ReactNode } from 'react'

const Button = ({ disabled, children, onClick }: { disabled: boolean, children: ReactNode, onClick: () => void }) => {
    return (
        <button disabled={disabled} style={{ backgroundColor: disabled ? 'gray' : 'green' }} onClick={onClick}>{children}</button>
    )
}

export default Button