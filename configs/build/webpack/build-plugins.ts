import CopyPlugin, { Pattern } from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import BundleAnalyzer from 'webpack-bundle-analyzer';

export function buildPlugins(
  htmlPath: string,
  copyPatterns: Pattern[],
  isDev: boolean,
  runAnalyzer?: boolean,
): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
    new CopyPlugin({
      patterns: copyPatterns,
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  if (runAnalyzer) {
    plugins.push(new BundleAnalyzer.BundleAnalyzerPlugin());
  }

  plugins.push(
    new DefinePlugin({
      'process.env.__IS_DEV__': JSON.stringify(isDev),
    }),
  );

  return plugins;
}
