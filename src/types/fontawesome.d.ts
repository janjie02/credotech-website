declare module '@fortawesome/react-fontawesome' {
  import { IconDefinition, IconLookup, IconProp } from '@fortawesome/fontawesome-svg-core';
  import * as React from 'react';

  export interface FontAwesomeIconProps extends React.SVGAttributes<SVGSVGElement> {
    icon: IconDefinition | IconLookup | IconProp;
    mask?: IconDefinition | IconLookup | IconProp;
    className?: string;
    color?: string;
    spin?: boolean;
    pulse?: boolean;
    border?: boolean;
    fixedWidth?: boolean;
    inverse?: boolean;
    listItem?: boolean;
    flip?: 'horizontal' | 'vertical' | 'both';
    size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    pull?: 'right' | 'left';
    rotation?: 90 | 180 | 270;
    transform?: string | object;
    symbol?: boolean | string;
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    swapOpacity?: boolean;
  }

  export const FontAwesomeIcon: React.FC<FontAwesomeIconProps>;
}

declare module '@fortawesome/free-solid-svg-icons' {
  import { IconDefinition, IconLookup, IconProp } from '@fortawesome/fontawesome-svg-core';
  
  export const faArrowRight: IconDefinition;
  export const faPhone: IconDefinition;
  export const faServer: IconDefinition;
  export const faCloud: IconDefinition;
  export const faCode: IconDefinition;
  export const faMapMarkerAlt: IconDefinition;
  export const faPhoneAlt: IconDefinition;
  export const faEnvelope: IconDefinition;
}

declare module '@fortawesome/free-brands-svg-icons' {
  import { IconDefinition, IconLookup, IconProp } from '@fortawesome/fontawesome-svg-core';
  
  export const faFacebookF: IconDefinition;
  export const faTwitter: IconDefinition;
  export const faLinkedinIn: IconDefinition;
  export const faInstagram: IconDefinition;
} 