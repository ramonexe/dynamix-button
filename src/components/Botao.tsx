import React from 'react';

interface BotaoProps {
    onClick?: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const baseButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0 12px',
    height: 40,
    fontSize: 16,
    color: 'white',
    backgroundColor: '#FF0000',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.2s ease',
};

const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
};

export const Botao: React.FC<BotaoProps> = ({ onClick, children, icon }) => {
    const temIcone = !!icon;
    const [hovered, setHovered] = React.useState(false);

    const buttonStyle: React.CSSProperties = {
        ...baseButtonStyle,
        justifyContent: temIcone ? (hovered ? 'flex-start' : 'center') : 'flex-start',
        paddingRight: temIcone ? (hovered ? 12 : 0) : 12,
        paddingLeft: temIcone ? (hovered ? 12 : 0) : 12,
        gap: temIcone ? 0 : 8,
    };

    const textStyle: React.CSSProperties = {
        whiteSpace: 'nowrap',
        opacity: temIcone ? (hovered ? 1 : 0) : 1,
        maxWidth: temIcone ? (hovered ? 200 : 0) : '100%',
        overflow: 'hidden',
        marginLeft: temIcone ? (hovered ? 8 : 0) : 0,
        transition: 'all 0.2s ease',
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {temIcone && <span style={iconContainerStyle}>{icon}</span>}
            <span style={textStyle}>{children ?? ''}</span>
        </button>
    );
};