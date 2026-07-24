<script lang="ts">
  import { getCover } from '@/lib/utils/cover';

  interface Props {
    /** Post id, used as the seed so the art is stable per post. */
    id: string;
    tags?: string[];
    /** Optional real image (frontmatter `cover`): a path in site/assets or a URL. */
    cover?: string;
    alt?: string;
    /** Icon size, in the 400x225 viewBox. */
    iconSize?: number;
    class?: string;
  }

  let { id, tags = [], cover, alt = '', iconSize = 84, class: className = '' }: Props = $props();

  const art = $derived(getCover({ id, tags, cover }));
  const scale = $derived(iconSize / 24);
</script>

{#if art.image}
  <img
    src={art.image}
    {alt}
    loading="lazy"
    decoding="async"
    class="h-full w-full object-cover {className}"
  />
{:else}
  <svg
    viewBox="0 0 400 225"
    preserveAspectRatio="xMidYMid slice"
    class="h-full w-full {className}"
    style="filter: hue-rotate({art.hue}deg)"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="grad-{art.uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color={art.theme.from} />
        <stop offset="55%" stop-color={art.theme.via} />
        <stop offset="100%" stop-color={art.theme.to} />
      </linearGradient>

      <linearGradient id="shade-{art.uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000000" stop-opacity="0" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.28" />
      </linearGradient>

      {#if art.pattern === 0}
        <pattern id="pat-{art.uid}" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.6" fill="#ffffff" fill-opacity="0.35" />
        </pattern>
      {:else if art.pattern === 1}
        <pattern id="pat-{art.uid}" width="26" height="26" patternUnits="userSpaceOnUse">
          <path
            d="M26 0H0v26"
            fill="none"
            stroke="#ffffff"
            stroke-opacity="0.22"
            stroke-width="1"
          />
        </pattern>
      {:else if art.pattern === 2}
        <pattern
          id="pat-{art.uid}"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0v18" fill="none" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2" />
        </pattern>
      {:else}
        <pattern id="pat-{art.uid}" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle
            cx="24"
            cy="24"
            r="15"
            fill="none"
            stroke="#ffffff"
            stroke-opacity="0.18"
            stroke-width="1.5"
          />
        </pattern>
      {/if}
    </defs>

    <rect width="400" height="225" fill="url(#grad-{art.uid})" />

    {#each art.blobs as blob (blob.cx)}
      <circle cx={blob.cx} cy={blob.cy} r={blob.r} fill="#ffffff" fill-opacity="0.07" />
    {/each}

    <rect width="400" height="225" fill="url(#pat-{art.uid})" />
    <rect width="400" height="225" fill="url(#shade-{art.uid})" />

    <g transform="translate({200 - iconSize / 2} {112 - iconSize / 2}) scale({scale})">
      <g
        fill="none"
        stroke="#ffffff"
        stroke-opacity="0.95"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {#each art.theme.icon as d (d)}
          <path {d} />
        {/each}
      </g>
    </g>
  </svg>
{/if}
