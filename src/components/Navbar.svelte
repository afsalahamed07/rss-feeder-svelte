<script>
    import {createEventDispatcher} from 'svelte';

    let inputValue = '';
    const dispatch = createEventDispatcher();

    function updateFeed() {
        if (inputValue.trim() !== '') {
            dispatch('updateFeed', {rssUrl: inputValue.trim()});
        }
    }
</script>

<nav class="navbar">
    <a class="navbar-brand" href="#">RSS Reader</a>
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Enter RSS URL"
                   bind:value={inputValue} on:keyup.enter={updateFeed}>
        </div>
        <div class="col">
            <button class="btn btn-outline-primary" on:click={updateFeed}>Load Feed</button>
        </div>
    </div>
</nav>
