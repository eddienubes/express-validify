import type { Config } from '@jest/types';
import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.ts'],
    roots: ['<rootDir>/test'],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    coverageDirectory: '<rootDir>/jest/coverage',
    coverageReporters: ['json-summary', 'text', 'lcov']
};

export default config;
