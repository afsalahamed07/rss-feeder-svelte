<script>
    export let thumbnail;
    export let title;
    export let link;
    export let description;
    export let publishedDate;
    export let author;
</script>

<div class="row g-4 m-5" style="height: 250px">
    <div class="col-md-4 entry-thumbnail overflow-hidden rounded">
        <img src="{thumbnail}" alt="{title}" class="img-fluid rounded"/>
    </div>
    <div class="col-md-8 d-flex flex-column mb-3">
        <div>
            <h4 class="multi-line-truncate">{title}</h4>
            <p class="text-muted">{author}</p>
        </div>
        <div class="flex-grow-1">
            <p class="multi-line-truncate">{description}</p>
        </div>
        <div class="d-flex justify-content-between align-items-end">
            <a href="{link}" target="_blank">Read more</a>
            <div class="text-secondary text-end"><small>{publishedDate}</small></div>
        </div>
    </div>
</div>



