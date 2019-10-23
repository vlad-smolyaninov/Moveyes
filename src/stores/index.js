import React from "react"
import GenresStore from "./genres"

const storesContext = React.createContext({
  genres: GenresStore.create()
})

export default storesContext
