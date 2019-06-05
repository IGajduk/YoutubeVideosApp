export class PlaylistBeyApi {

    constructor(
        public data: {
            posts: [
                {
                    height: number,
                    id: number,
                    thumb: string,
                    title: string,
                    type: string,
                    url: string,
                    video_id: string,
                    width: number
                }
            ]
        },
        public status: string
    ) {
    }
}
