<script lang="ts">
  import { formatDate } from '@/lib/utils/date';
  import { getLangFlag } from '@/lib/utils/lang';
  import PostCover from './PostCover.svelte';

  interface Props {
    post: {
      id: string;
      body?: string;
      data: {
        title: string;
        description: string;
        pubDate: Date;
        tags: string[];
        featured?: boolean;
        draft?: boolean;
        lang?: string;
        cover?: string;
        coverAlt?: string;
      };
    };
    readTime: string;
    slug: string;
  }

  let { post, readTime, slug }: Props = $props();
</script>

<article
  class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
  data-post-lang={post.data.lang || 'pt'}
>
  <!-- Cover -->
  <div class="relative aspect-[16/9] overflow-hidden bg-secondary">
    <PostCover
      id={post.id}
      tags={post.data.tags}
      cover={post.data.cover}
      alt={post.data.coverAlt || post.data.title}
      class="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />

    <div class="absolute left-3 top-3 flex flex-wrap items-center gap-2">
      {#if post.data.featured}
        <span
          class="inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          Destaque
        </span>
      {/if}

      {#if post.data.draft}
        <span
          class="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-950"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Rascunho
        </span>
      {/if}
    </div>

    {#if post.data.lang && post.data.lang !== 'pt'}
      <span
        class="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm"
        title={`Idioma: ${post.data.lang}`}
      >
        <span class="text-xs leading-none">{getLangFlag(post.data.lang)}</span>
        {post.data.lang}
      </span>
    {/if}
  </div>

  <!-- Body -->
  <div class="flex flex-1 flex-col p-5">
    <div
      class="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
    >
      <time datetime={post.data.pubDate.toISOString()} class="tabular-nums">
        {formatDate(post.data.pubDate)}
      </time>
      <span class="text-border">•</span>
      <span class="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {readTime}
      </span>
    </div>

    <h2 class="mt-2.5 text-lg font-black leading-tight tracking-tight sm:text-xl">
      <a href={`/posts/${slug}`} class="no-underline">
        <span class="absolute inset-0 z-10"></span>
        <span class="relative text-foreground transition-colors group-hover:text-primary">
          {post.data.title}
        </span>
      </a>
    </h2>

    <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
      {post.data.description}
    </p>

    {#if post.data.tags?.length}
      <div class="mt-auto flex flex-wrap gap-1.5 pt-4">
        {#each post.data.tags.slice(0, 3) as tag (tag)}
          <a
            href={`/posts/tag/${tag}`}
            class="relative z-20 inline-flex items-center rounded-md border border-border bg-background px-2 py-1 text-[11px] font-medium text-muted-foreground no-underline transition-colors hover:border-primary/50 hover:text-primary"
          >
            #{tag}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</article>
