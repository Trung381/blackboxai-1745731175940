import React from 'react';
import { Button } from 'antd';

interface CardIntroductionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  shadow?: boolean;
  position?: 'left' | 'right';
  styles?: React.CSSProperties;
}

const CardIntroduction: React.FC<CardIntroductionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundColor = '#fff',
  textColor = '#000',
  shadow = true,
  position = 'left',
  styles,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: shadow ? '0 4px 8px rgba(0,0,0,0.1)' : undefined,
    display: 'flex',
    flexDirection: position === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: 8,
    ...styles,
  };

  return (
    <div style={containerStyle}>
      <div style={{ flex: 1, padding: '1rem' }}>
        {title && <h2 style={{ marginBottom: '1rem' }}>{title}</h2>}
        {description && <p style={{ marginBottom: '1rem' }}>{description}</p>}
        {buttonText && buttonLink && (
          <Button type="primary" href={buttonLink}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardIntroduction;
