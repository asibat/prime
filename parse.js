module.exports = {
  parseInput(input) {
    const args = input.split(' ')
    try {
      return {
        start: parseInt(args[0]),
        end: parseInt(args[1])
      }
    } catch(e) {
      throw e
    }

  }
}
