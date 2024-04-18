<script>
    import {onMount} from 'svelte';
    import {Feed} from './domain/Feed';
    import {fetchFeedData} from './services/ApiService';
    import Entry from "./Entry.svelte";

    let rssUrl = 'https://www.newswire.lk/feed';
    let feed = null;
    let error = null;

    async function fetchFeed() {
        try {
            const feedData = await fetchFeedData(`http://127.0.0.1:8080/fetch_feed?rss=${encodeURIComponent(rssUrl)}`);
            feed = new Feed(feedData);
        } catch (e) {
            error = e.message;
            feed = null;
        }
    }

    onMount(fetchFeed);
</script>

<main>
    <h1>RSS Feed Reader</h1>
    <input type="text" bind:value={rssUrl}/>
    <button on:click={fetchFeed}>Fetch Feed</button>

    {#if feed}
        <div>
            <h2>{feed.title}</h2>
            {#each feed.entries as entry}
                <Entry
                        title={entry.title},
                        link={entry.link},
                        description={entry.description},
                        publishedDate={entry.publishedDate},
                        author={entry.author}

                />
            {/each}
        </div>
    {/if}
</main>
  