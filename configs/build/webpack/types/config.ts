import { Pattern } from 'copy-webpack-plugin';

export type TBuildMode = 'production' | 'development';
export type TBuildPaths = {
  entry: string;
  output: string;
  html: string;
  modules: string[];
  copyPatterns: Pattern[];
};

export type TBuildOptions = {
  mode: TBuildMode;
  paths: TBuildPaths;
  isDev: boolean;
  port: number;
  runAnalyzer?: boolean;
};

export type TBuildEnv = {
  mode?: TBuildMode;
  port?: number;
  runAnalyzer?: boolean;
};

export type TBuildArgv = {
  mode?: TBuildMode;
  [key: string]: unknown;
};
