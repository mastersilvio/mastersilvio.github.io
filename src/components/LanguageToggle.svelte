<script lang="ts">
  import { langFilter } from '@/lib/lang.svelte';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isOpen = $state(false);
  let dropdownRef: HTMLDivElement;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }

  function setLang(newLang: 'all' | 'pt' | 'en') {
    langFilter.set(newLang);
    closeDropdown();
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
      closeDropdown();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const labels: Record<string, string> = {
    all: '🌐',
    pt: '🇧🇷',
    en: '🇺🇸',
  };
</script>

<div class="relative" bind:this={dropdownRef}>
  <button
    onclick={toggleDropdown}
    class="p-2 rounded-md hover:bg-accent transition-all opacity-70 hover:opacity-100 text-muted-foreground hover:text-primary"
    aria-label="Filtrar idioma"
    aria-expanded={isOpen}
    aria-haspopup="true"
  >
    <span class="text-base leading-none">{labels[langFilter.current]}</span>
  </button>

  {#if isOpen}
    <div
      transition:slide={{ duration: 200 }}
      class="absolute right-0 mt-2 w-40 rounded-md border bg-popover text-popover-foreground shadow-lg focus:outline-none z-50 overflow-hidden"
    >
      <div class="p-1">
        <button
          onclick={() => setLang('all')}
          class="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground {langFilter.current ===
          'all'
            ? 'bg-accent'
            : ''}"
        >
          <span class="mr-2 text-base">🌐</span>
          Todos os idiomas
        </button>
        <button
          onclick={() => setLang('pt')}
          class="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground {langFilter.current ===
          'pt'
            ? 'bg-accent'
            : ''}"
        >
          <span class="mr-2 text-base">🇧🇷</span>
          Português
        </button>
        <button
          onclick={() => setLang('en')}
          class="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground {langFilter.current ===
          'en'
            ? 'bg-accent'
            : ''}"
        >
          <span class="mr-2 text-base">🇺🇸</span>
          English
        </button>
      </div>
    </div>
  {/if}
</div>
