export class Entry {
    constructor(entryData) {
        this.title = entryData.title;
        this.link = entryData.link;
        this.description = entryData.description;
        this.publishedDate = new Date(entryData.pubDate);
        this.author = entryData.author;
    }

    get summary() {
        return `${this.title} - Published on ${this.publishedDate.toLocaleDateString()}`;
    }
}
