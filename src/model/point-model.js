import { points } from '../mock/points';
import { destinations } from '../mock/destinations';
import { offers } from '../mock/offers';

export default class PointModel {
  #points = null;
  #destinations = null;
  #offers = null;

  init() {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
