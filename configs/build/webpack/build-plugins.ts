import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import BundleAnalyzer from 'webpack-bundle-analyzer';

export function buildPlugins(htmlPath: string, isDev: boolean): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(
      new BundleAnalyzer.BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: 'static' }),
    );
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  plugins.push(
    new DefinePlugin({
      'process.env.__IS_DEV__': JSON.stringify(isDev),
    }),
  );

  return plugins;
}
