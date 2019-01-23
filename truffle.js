module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ci: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
    // Add additional deployment envoironments here
    // e.g. Ropsten might look like
    // ropsten:  {
    //   network_id: 3,
    //   host: "localhost",
    //   port:  8545,
    //   gas:   2900000
    // }
  },
  compilers: {
    solc: {
      version: "0.4.25",   // Change this to whatever you need
    }
  }
};
