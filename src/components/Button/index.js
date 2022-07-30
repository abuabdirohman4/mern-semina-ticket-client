import React from 'react'
import Button from 'react-bootstrap/Button';
// export default function Button({ onClick, children }) {
//     return <button onClick={onClick}>{children}</button>
// }

export default function SButton({
    children,
    action,
    variant,
    size,
    loading,
    disabled,
    className
}) {
    return (
        <Button
            className={className}
            onClick={action}
            variant={variant}
            disabled={disabled}
            size={size}
        >
            {loading ? 'Loading...' : children}
        </Button>
    )
}