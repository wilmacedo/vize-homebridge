const Service, Characteristic

module.exports = homebridge => {
  console.log('Homebridge API version: ' + homebridge.version)

  Service = homebridge.hap.Service
  Characteristic = homebridge.hap.Characteristic
  homebridge.registerAccessory('homebridge-vize', 'VizeWs', Platform)
}

function Platform(log, config) {
  let platform = this
  
  this.log = log
  this.config = config
  this.protocol = protocol

  if (!this.config['host']) throw new Error('Erro de configuracao: host nao definido')

  this.host = config['host']
}

Platform.prototype.accessories = callback => {
  var that = this
}