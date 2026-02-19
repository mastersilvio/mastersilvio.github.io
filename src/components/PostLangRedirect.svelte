<script lang="ts">
  import { langFilter } from '@/lib/lang.svelte';

  interface Props {
    currentLang: string;
    translations: Record<string, string>;
  }

  let { currentLang, translations }: Props = $props();
  let lastLang = $state(langFilter.current);

  $effect(() => {
    const newLang = langFilter.current;
    if (newLang === lastLang) return;
    lastLang = newLang;

    if (newLang === 'all' || newLang === currentLang) return;

    const targetSlug = translations[newLang];
    if (targetSlug) {
      window.location.href = `/posts/${targetSlug}`;
    }
  });
</script>
