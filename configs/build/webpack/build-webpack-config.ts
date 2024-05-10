import { Configuration } from 'webpack';

import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { TBuildOptions } from './types/config';

export function buildWebpackConfig(options: TBuildOptions): Configuration {
  const { mode, paths, port, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths.modules),
    plugins: buildPlugins(paths.html, isDev),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
}
