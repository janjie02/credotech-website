declare module '@fortawesome/fontawesome-svg-core' {
  export interface IconProp {
    prefix: 'fas' | 'fab' | 'far' | 'fal' | 'fad';
    iconName: string;
  }

  export interface IconLookup {
    prefix: 'fas' | 'fab' | 'far' | 'fal' | 'fad';
    iconName: string;
  }

  export interface IconDefinition extends IconLookup {
    icon: [
      number, // width
      number, // height
      string[], // ligatures
      string, // unicode
      string | string[] // svg path data
    ];
  }
} 