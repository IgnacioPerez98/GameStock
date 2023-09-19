export class GameResponseModel {
  count: number
  next: string
  previous: string
  results: Games[]
}

export class Games {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: Ratings
  ratings_count: number
  reviews_text_count: string
  added: number
  added_by_status: AddedByStatus
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  esrb_rating: EsrbRating
  platforms: Platform[]
}

export class Ratings {}

export class AddedByStatus {}

export class EsrbRating {
  id: number
  slug: string
  name: string
}

export class Platform {
  platform: Platform2
  released_at: string
  requirements: Requirements
}

export class Platform2 {
  id: number
  slug: string
  name: string
}

export class Requirements {
  minimum: string
  recommended: string
}
