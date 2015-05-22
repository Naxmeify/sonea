# define Sonea
Sonea = require "./Sonea"

SoneaBuilder = -> new Sonea()

# expose the builder
module.exports = SoneaBuilder

# bw comp -> singleton
single = SoneaBuilder()
SoneaBuilder.isValidApp = Sonea._.bind single.isValidApp, single