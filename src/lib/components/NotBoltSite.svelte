<script lang="ts">
    import { AlertCircle } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button";
  
    export let currentUrl: string = '';
  
    function openBolt() {
      chrome.tabs.create({ url: 'https://bolt.new' });
    }
  </script>
  
  <div class="flex flex-col items-center justify-center p-4 text-center space-y-6">
    <div class="rounded-full bg-slate-800 p-3">
      <AlertCircle class="w-6 h-6 text-slate-200" />
    </div>
    
    <div class="space-y-2">
      <h3 class="text-lg font-semibold text-slate-200">Not a Bolt Website</h3>
      <p class="text-sm text-slate-400">
        This extension only works with bolt.new websites.
        {#if currentUrl}
          <br/>Current site: <span class="text-slate-500">{currentUrl}</span>
        {/if}
      </p>
    </div>
  
    <Button 
      variant="outline" 
      class="border-slate-800 hover:bg-slate-800 text-slate-200"
      on:click={openBolt}
    >
      Go to bolt.new
    </Button>
  </div>
  