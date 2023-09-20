export class ResponsePlatforms {
  count: number
  next: string
  previous: string
  results: ResultPlatform[]
}

export class ResultPlatform {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  image: string
  year_start: number
  year_end: number
}
