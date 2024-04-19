<script>
    import { onMount } from 'svelte';
    import { Feed } from './domain/Feed';
    import { fetchFeedData } from './services/ApiService';
    import Entry from "./components/Entry.svelte";
    import Navbar from "./components/Navbar.svelte";

    let rssUrl = 'https://www.wired.com/feed/rss'; // Default RSS URL
    let feed = null;
    let error = null;

    async function fetchFeed(url = rssUrl) {
        try {
            const feedData = await fetchFeedData(`http://127.0.0.1:8080/fetch_feed?rss=${encodeURIComponent(url)}`);
            feed = new Feed(feedData);
        } catch (e) {
            error = e.message;
            feed = null;
        }
    }

    function handleUpdateFeed(event) {
        rssUrl = event.detail.rssUrl;
        fetchFeed(rssUrl);
    }

    onMount(() => fetchFeed(rssUrl));
</script>

<Navbar on:updateFeed={handleUpdateFeed}/>
<main class="container">
    {#if feed}
        {#each feed.entries as entry}
            <Entry
                    thumbnail={entry.thumbnail}
                    title={entry.title}
                    link={entry.link}
                    description={entry.description}
                    publishedDate={entry.publishedDate}
                    author={entry.author}
            />
        {/each}
    {:else if error}
        <p class="alert alert-danger">Error: {error}</p>
    {/if}
</main>
