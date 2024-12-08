<script lang="ts">
  import { onMount } from "svelte";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Tabs, TabsContent } from "$lib/components/ui/tabs";
  import Header from "$lib/components/Header.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  import StatusAlert from "$lib/components/StatusAlert.svelte";
  import UploadProgress from "$lib/components/UploadProgress.svelte";
  import GitHubSettings from "$lib/components/GitHubSettings.svelte";
  import NotBoltSite from "$lib/components/NotBoltSite.svelte";
  import { COFFEE_LINK, GITHUB_LINK, YOUTUBE_LINK } from "$lib/constants";
  import Footer from "$lib/components/Footer.svelte";

  let githubToken = "";
  let repoOwner = "";
  let repoName = "";
  let branch = "main";
  let status = "";
  let uploadProgress = 0;
  let uploadStatus = "idle";
  let uploadMessage = "";
  let isSettingsValid = false;
  let activeTab = "home";
  let currentUrl: string = '';
  let isBoltSite: boolean = false;
  
  onMount(async () => {
    // Add dark mode to the document
    document.documentElement.classList.add('dark');

    const result = await chrome.storage.sync.get([
      "githubToken",
      "repoOwner",
      "repoName",
      "branch",
    ]);

    githubToken = result.githubToken || "";
    repoOwner = result.repoOwner || "";
    repoName = result.repoName || "";
    branch = result.branch || "main";

    checkSettingsValidity();

    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "UPLOAD_STATUS") {
        uploadStatus = message.status;
        uploadProgress = message.progress || 0;
        uploadMessage = message.message || "";
      }
    });

    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]?.url) {
      currentUrl = tabs[0].url;
      isBoltSite = currentUrl.includes('bolt.new');
    }
  });

  function checkSettingsValidity() {
    isSettingsValid = Boolean(githubToken && repoOwner && repoName && branch);
  }

  async function saveSettings() {
    try {
      await chrome.storage.sync.set({
        githubToken,
        repoOwner,
        repoName,
        branch,
      });
      status = "Settings saved successfully!";
      checkSettingsValidity();
      setTimeout(() => {
        status = "";
      }, 3000);
    } catch (error) {
      status = "Error saving settings";
      console.error(error);
    }
  }

  function handleSwitchTab(event: CustomEvent<string>) {
    activeTab = event.detail;
  }
</script>

<main class="w-[400px] min-h-[400px] p-4 bg-slate-950 text-slate-50">
  {#if isBoltSite}
  <Tabs bind:value={activeTab} class="w-full">
    <Header />

    <TabsContent value="home">
      <Card class="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <img src="/assets/icons/icon48.png" alt="Bolt to GitHub" class="w-5 h-5" />
            Bolt to GitHub
          </CardTitle>
          <CardDescription class="text-slate-400">
            Upload and sync your Bolt projects directly to GitHub
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StatusAlert 
            {isSettingsValid} 
            on:switchTab={handleSwitchTab}
          />

          <div class="mt-6 space-y-4">
            <SocialLinks {GITHUB_LINK} {YOUTUBE_LINK} {COFFEE_LINK} />
          </div>
        </CardContent>
        <Footer />
      </Card>

      <UploadProgress {uploadStatus} {uploadProgress} {uploadMessage} />
    </TabsContent>

    <TabsContent value="settings">
      <Card class="border-slate-800 bg-slate-900">
        <CardHeader>
          <CardTitle>GitHub Settings</CardTitle>
          <CardDescription class="text-slate-400">
            Configure your GitHub repository settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GitHubSettings
            bind:githubToken
            bind:repoOwner
            bind:repoName
            bind:branch
            {status}
            {isSettingsValid}
            onSave={saveSettings}
            onInput={checkSettingsValidity}
          />
        </CardContent>
      </Card>
    </TabsContent>
    </Tabs>
  {:else}
  <Card class="border-slate-800 bg-slate-900">
    <CardContent>
      <NotBoltSite {currentUrl} />
    </CardContent>
    <Footer />
  </Card>
  {/if}
</main>

<style>
  :global(.lucide) {
    stroke-width: 1.5px;
  }
</style>
