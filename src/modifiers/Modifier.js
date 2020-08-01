/**
 * The base modifier class
 */
class Modifier {
  /**
   * Create a Modifier
   *
   * @throws {RequiredArgumentError} Notation is required
   */
  constructor() {
    // set the modifier's sort order
    this.order = 999;
  }

  /* eslint-disable class-methods-use-this */
  /**
   * Returns the name for the modifier
   *
   * @returns {string}
   */
  get name() {
    return 'modifier';
  }
  /* eslint-enable class-methods-use-this */

  /* eslint-disable class-methods-use-this */
  /**
   * Returns the modifier notation
   *
   * @returns {string}
   */
  get notation() {
    return '';
  }
  /* eslint-enable class-methods-use-this */

  /* eslint-disable class-methods-use-this */
  /**
   * The maximum number of iterations that the modifier can be applied to a single die roll
   *
   * @returns {number}
   */
  get maxIterations() {
    return 1000;
  }
  /* eslint-enable class-methods-use-this */

  /* eslint-disable class-methods-use-this */
  /**
   * Runs the modifier on the rolls
   *
   * @param {RollResults} results
   * @param {StandardDice} _dice
   *
   * @returns {RollResults}
   */
  run(results, _dice) {
    return results;
  }
  /* eslint-enable class-methods-use-this */

  /**
   * Returns an object for JSON serialising
   *
   * @returns {{}}
   */
  toJSON() {
    const { notation, name } = this;

    return {
      name,
      notation,
      type: 'modifier',
    };
  }

  /**
   * Returns the String representation of the object
   *
   * @returns {string}
   */
  toString() {
    return this.notation;
  }
}

export default Modifier;
