/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.scss' {
  interface IStyles {
    [className: string]: string;
  }

  const styles: IStyles;
  export = styles;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export = content;
}
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare const __IS_DEV__: boolean;
