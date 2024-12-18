import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:1338/graphql",
  documents: ["./src/**/*.ts", "./src/**/*.graphql"],
  emitLegacyCommonJSImports: false,
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-apollo-angular', 'typescript-operations', 'typescript-resolvers'],
      config: {
        addExplicitOverride: true
      }
    }
  }
};

export default config;
