import path from 'path';

import { buildWebpackConfig } from './configs/build/webpack/build-webpack-config';
import { TBuildArgv, TBuildEnv, TBuildOptions } from './configs/build/webpack/types/config';

export default (env: TBuildEnv, argv: TBuildArgv) => {
  const mode = argv.mode ?? 'development';
  const isDev = mode === 'development';
  const port = env.port ?? 3004;

  const options: TBuildOptions = {
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      copyPatterns: [
        {
          from: path.resolve(__dirname, 'public', 'locales'),
          to: path.resolve(__dirname, 'build', 'locales'),
        },
      ],
    },
    isDev,
    port,
    runAnalyzer: env.runAnalyzer,
  };

  const config = buildWebpackConfig(options);

  return config;
};
