export class CategoriesAndFiltersBeyApi {

    constructor(
        public data: {
            'age-categories': [
               {
                   id: number,
                   name: string,
                   slug: string
               }
            ],
            'current-language-categories': [
                {
                    id: number,
                    name: string,
                    slug: string,
                    relative: {}
                }
            ],
            'level-categories': [
                {
                    id: number,
                    name: string,
                    slug: string
                }
            ],
            'relative-language-categories': [
                {
                    id: number,
                    name: string,
                    slug: string
                }
            ]
        },
        public status: string
    ) {
    }
}
