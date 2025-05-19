import React from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type IconPosition = "left" | "right";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    iconPosition?: IconPosition;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    title?: string;
    ariaLabel?: string;
    loading?: boolean;
    loadingText?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    activeBackgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    alwaysShowText?: boolean;
}

const sizeMap = {
    sm: {
        height: 32,
        fontSize: 14,
        padding: "0 8px",
        iconSize: 16,
    },
    md: {
        height: 40,
        fontSize: 16,
        padding: "0 12px",
        iconSize: 20,
    },
    lg: {
        height: 48,
        fontSize: 18,
        padding: "0 16px",
        iconSize: 24,
    },
};

const variantMap = {
    primary: {
        backgroundColor: "crimson",
        color: "white",
        border: "none",
        hoverBg: "#d10034",
        activeBg: "#a00030",
    },
    secondary: {
        backgroundColor: "#666666",
        color: "white",
        border: "none",
        hoverBg: "#555555",
        activeBg: "#444444",
    },
    outline: {
        backgroundColor: "transparent",
        color: "crimson",
        border: "1px solid crimson",
        hoverBg: "rgba(255, 0, 0, 0.1)",
        activeBg: "rgba(255, 0, 0, 0.2)",
    },
    ghost: {
        backgroundColor: "transparent",
        color: "crimson",
        border: "none",
        hoverBg: "rgba(255, 0, 0, 0.1)",
        activeBg: "rgba(255, 0, 0, 0.2)",
    },
    danger: {
        backgroundColor: "#FF4D4D",
        color: "white",
        border: "none",
        hoverBg: "#E60000",
        activeBg: "#CC0000",
    },
};

const LoadingSpinner: React.FC<{ size: number; color?: string }> = ({
    size,
    color = "white",
}) => {
    const spinnerStyle: React.CSSProperties = {
        display: "inline-block",
        width: `${size}px`,
        height: `${size}px`,
        border: `${Math.max(2, size / 8)}px solid rgba(${color === "white" ? "255, 255, 255" : "0, 0, 0"
            }, 0.3)`,
        borderRadius: "50%",
        borderTopColor: color,
        animation: "spin 1s linear infinite",
    };

    return (
        <>
            <style>
                {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
            </style>
            <span style={spinnerStyle}></span>
        </>
    );
};

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    icon,
    size = "md",
    variant = "primary",
    iconPosition = "left",
    fullWidth = false,
    disabled = false,
    className = "",
    title,
    ariaLabel,
    loading = false,
    loadingText,
    backgroundColor,
    hoverBackgroundColor,
    activeBackgroundColor,
    textColor,
    borderColor,
    alwaysShowText = false,
}) => {
    const [hovered, setHovered] = React.useState(false);
    const [active, setActive] = React.useState(false);

    const temIcone = !!icon;

    const sizeStyle = sizeMap[size];
    const variantStyle = variantMap[variant];

    const finalColors = {
        background: backgroundColor || variantStyle.backgroundColor,
        hover: hoverBackgroundColor || variantStyle.hoverBg,
        active: activeBackgroundColor || variantStyle.activeBg,
        text: textColor || variantStyle.color,
        border: borderColor ? `1px solid ${borderColor}` : variantStyle.border,
    };

    const spinnerSize = {
        sm: 12,
        md: 16,
        lg: 20,
    }[size];

    const buttonStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: temIcone ? (hovered ? "flex-start" : "center") : "center",
        paddingRight: temIcone
            ? hovered
                ? sizeStyle.padding.split(" ")[1]
                : sizeStyle.height / 3.8
            : sizeStyle.padding.split(" ")[1],
        paddingLeft: temIcone
            ? hovered
                ? sizeStyle.padding.split(" ")[1]
                : sizeStyle.height / 3.8
            : sizeStyle.padding.split(" ")[1],
        height: sizeStyle.height,
        fontSize: sizeStyle.fontSize,
        color: finalColors.text,
        backgroundColor: active
            ? finalColors.active
            : hovered
                ? finalColors.hover
                : finalColors.background,
        border: finalColors.border,
        borderRadius: 5,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        overflow: "hidden",
        transition: "all 0.2s ease",
        width: fullWidth ? "100%" : "auto",
        opacity: disabled ? 0.6 : 1,
        position: "relative",
        gap: temIcone ? 0 : 8,
    };

    const iconContainerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: sizeStyle.height / 2,
        order: iconPosition === "right" ? 2 : 0,
        fontSize: sizeStyle.iconSize,
    };

    const renderIcon = () => {
        if (!icon) return null;

        if (React.isValidElement(icon)) {
            const iconElement = icon as React.ReactElement<any>;
            return React.cloneElement(iconElement, {
                ...iconElement.props,
                size: sizeStyle.iconSize,
                width: sizeStyle.iconSize,
                height: sizeStyle.iconSize,
                fontSize: sizeStyle.iconSize,
                style: {
                    ...(iconElement.props.style || {}),
                    width: sizeStyle.iconSize,
                    height: sizeStyle.iconSize,
                    fontSize: sizeStyle.iconSize,
                },
            });
        }

        return icon;
    };

    const textStyle: React.CSSProperties = {
        whiteSpace: "nowrap",
        opacity: alwaysShowText
            ? 1
            : temIcone
                ? (hovered ? 1 : 0)
                : 1,
        maxWidth: alwaysShowText
            ? "100%"
            : temIcone
                ? (hovered ? 200 : 0)
                : "100%",
        overflow: "hidden",
        marginLeft: temIcone && iconPosition === "left" ? (hovered || alwaysShowText ? 8 : 0) : 0,
        marginRight: temIcone && iconPosition === "right" ? (hovered || alwaysShowText ? 8 : 0) : 0,
        transition: "all 0.2s ease",
    };

    const handleClick = () => {
        if (!disabled && !loading && onClick) {
            onClick();
        }
    };

    const renderContent = () => {
        if (loading) {
            return (
                <>
                    <LoadingSpinner size={spinnerSize} color={finalColors.text} />
                    {loadingText && <span style={textStyle}>{loadingText}</span>}
                </>
            );
        }

        return (
            <>
                {temIcone && iconPosition === "left" && (
                    <span style={iconContainerStyle}>{renderIcon()}</span>
                )}
                <span style={textStyle}>{children}</span>
                {temIcone && iconPosition === "right" && (
                    <span style={iconContainerStyle}>{renderIcon()}</span>
                )}
            </>
        );
    };

    return (
        <button
            onClick={handleClick}
            style={buttonStyle}
            className={className}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onBlur={() => {
                setHovered(false);
                setActive(false);
            }}
            disabled={disabled || loading}
            title={title}
            aria-label={
                ariaLabel || (typeof children === "string" ? children : undefined)
            }
            aria-disabled={disabled || loading}
        >
            {renderContent()}
        </button>
    );
};
