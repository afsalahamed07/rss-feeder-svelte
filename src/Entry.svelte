<script>
    export let image;
    export let title;
    export let link;
    export let description;
    export let publishedDate;
    export let author;
</script>

<div>
    <div class="entry columns">
        <div class="entryImage column is-4">
            <img src={image} alt={title}/>
        </div>
        <div class="column">
            <div class="entryTitleBox">
                <h2 class="entryTitle">{title}</h2>
                <p class="entryAuthor">{author}</p>
            </div>
            <div class="entryDesBox">
                <p class="entryDescription">{description}</p>
                <p class="entryPublishDate">{publishedDate}</p>
                <a class="entryLink" href={link} target="_blank">Read more</a>
            </div>
        </div>
    </div>
</div>