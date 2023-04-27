const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
})
function muestraError() {
    throw new Error('Ha ocurrido un error');
  }
  
  try {
    muestraError();
  } catch (e) {
    logger.log("error", e.toString());
  }
  

/*

logger.debug("Hola estoy saliendo por pantalla")
logger.info("Hola informacion")
logger.error("Hola soy un error")*/