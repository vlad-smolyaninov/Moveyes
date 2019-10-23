import ApiService from "../services/api/api"
import { flow, types } from "mobx-state-tree"

const Genre = types.model({
  id: types.number,
  name: types.string
})

const GenresStore = types
  .model("genres", {
    isLoading: false,
    list: types.array(Genre)
  })
  .actions((self) => ({
    load: flow(function* load() {
      self.isLoading = true
      const { genres } = yield ApiService.get({ url: "fetchGenres" })
      self.list = genres
    })
  }))

export default GenresStore
