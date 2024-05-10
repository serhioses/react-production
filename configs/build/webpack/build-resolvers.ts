import { ResolveOptions } from 'webpack';

export function buildResolvers(modulesPath: string[]): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: modulesPath,
  };
}
