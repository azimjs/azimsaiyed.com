import { useState } from 'react';

// Issue 1: Generic Props name instead of TestComponentProps
interface Props {
    userId: string;
    onUpdate: (value: string) => void;
}

export default function TestComponent({ userId, onUpdate }: Props) {
    const [value, setValue] = useState('');

    // Issue 2: Hardcoded colors instead of using theme/CSS variables
    const buttonStyle = {
        backgroundColor: '#3B82F6',
        color: '#FFFFFF',
        padding: '12px 24px',
        borderRadius: '8px',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onUpdate(e.target.value);
    };

    return (
        <div>
            <h2>User: {userId}</h2>
            <input type="text" value={value} onChange={handleChange} />
            <button style={buttonStyle} onClick={() => onUpdate(value)}>
                Submit
            </button>
        </div>
    );
}
