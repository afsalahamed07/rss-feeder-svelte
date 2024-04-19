export class Entry {
    constructor(entryData) {
        this.title = entryData.title;
        this.link = entryData.link;
        this.description = entryData.description;
        this.publishedDate = new Date(entryData.publishedDate);
        this.author = entryData.author;
        this.thumbnail = entryData.thumbnail;
    }

    get summary() {
        return `${this.title} - Published on ${this.publishedDate.toLocaleDateString()}`;
    }
}
