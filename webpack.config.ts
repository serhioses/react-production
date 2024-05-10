import path from 'path';

import { buildWebpackConfig } from './configs/build/webpack/build-webpack-config';
import { TBuildEnv, TBuildOptions } from './configs/build/webpack/types/config';

export default (env: TBuildEnv) => {
  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';
  const port = env.port ?? 3004;

  const options: TBuildOptions = {
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    isDev,
    port,
  };

  const config = buildWebpackConfig(options);

  return config;
};
