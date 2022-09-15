/// <reference types="@sveltejs/kit" />

// https://github.com/storybookjs/storybook/issues/2883
declare module '*.md';

declare module '*&imagetools' {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out;
  export default out;
}

declare module '$lib/brands/*.svg' {
  import type { ComponentType } from 'svelte';

  const content: ComponentType;
  export default content;
}

declare module '*.svg?component' {
  import type { ComponentType } from 'svelte';

  const content: ComponentType;
  export default content;
}

declare module '*.svg?src' {
  const content: string;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
}
