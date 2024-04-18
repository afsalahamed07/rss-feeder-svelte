// src/domain/Feed.js
import {Entry} from "./Entry.js";

export class Feed {
    constructor(feedData) {
        this.title = feedData.title;
        this.description = feedData.description;
        this.link = feedData.link;
        this.feedType = feedData.feedType;
        this.link = feedData.link;
        this.entries = feedData.entries.map(entry => new Entry(entry));
    }
}

