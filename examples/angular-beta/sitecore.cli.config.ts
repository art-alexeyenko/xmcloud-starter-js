/**
 * Sitecore CLI configuration (Node / build-time only). This file is not part of the Angular
 * compiler `include` set and is only loaded by `sitecore-tools`.
 *
 * Note: Using a minimal config due to canary SDK limitations (dist-node folder not yet available)
 */
export default {
  componentMap: {
    paths: ['src/app/components'],
    exclude: ['**/*.spec.ts'],
  },
};
