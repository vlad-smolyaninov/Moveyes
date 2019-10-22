import { observable, action, flow } from 'mobx'
import ApiService from '../../../services/api/api'
import { flowed } from '../../../services/utils/decorators';

interface Genre {
  id: number
  name: string
}

class GenreListStore {
  @observable genres: Genre[] = [];

  @flowed
  @action
  *load() {
    const { genres } = yield ApiService.get({ url: 'fetchGenres' })
    this.genres = genres
  }
}

export default new GenreListStore()
