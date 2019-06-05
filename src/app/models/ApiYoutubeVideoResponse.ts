export class ApiYoutubeVideoResponse {
    constructor(
        public kind: string,
        public etag: string,
        public pageInfo: {
            totalResults: number,
            resultsPerPage: number,
        },
        public items: [
                {
                    kind: string,
                    etag: string,
                    id: string,
                    snippet: {
                        publishedAt: string,
                        channelId: string,
                        title: string,
                        description: string,
                        thumbnails: {
                            standart: {
                                url: string,
                                width: number,
                                height: number
                            },
                            thumbnails: {
                                url: string,
                                width: number,
                                height: number
                            },
                            medium: {
                                url: string,
                                width: number,
                                height: number
                            },
                            high: {
                                url: string,
                                width: number,
                                height: number
                            },
                            maxres: {
                                url: string,
                                width: number,
                                height: number
                            },
                        },
                    }
            }
        ],
        public channelTitle: string,
        public tags: string[],
        public categoryId: string,
        public liveBroadcastContent: string = '',
        public localized: {
            title: string,
            description: string,
        },
    ) {
    }

}
