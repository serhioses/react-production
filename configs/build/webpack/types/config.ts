export type TBuildMode = 'production' | 'development';
export type TBuildPaths = {
  entry: string;
  output: string;
  html: string;
  modules: string[];
};

export type TBuildOptions = {
  mode: TBuildMode;
  paths: TBuildPaths;
  isDev: boolean;
  port: number;
};

export type TBuildEnv = {
  mode?: TBuildMode;
  port?: number;
};
