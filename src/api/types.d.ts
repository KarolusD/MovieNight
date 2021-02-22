export type RecommendedT = {
  _id: string
  title: string
  recommended: {
    poster: string
    title: string
    type: string[]
    shortDescription: string
    longDescription: string
  }[]
}

export type ActiveRecommendedT = {
  poster: string
  title: string
  type: string[]
  shortDescription: string
  longDescription: string
}

export type TrendingT = {
  _id: string
  title: string
  poster: string
}
