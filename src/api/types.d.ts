export interface IRecommended {
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

export interface IActiveRecommended {
  poster: string
  title: string
  type: string[]
  shortDescription: string
  longDescription: string
}

export interface ITrending {
  _id: string
  title: string
  poster: string
}
