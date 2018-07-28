module.exports = {
    mongoDB: 'mongodb://Admin:Boomerdog225@ds259001.mlab.com:59001/jane'
}

// figure out what set of credentials to return 

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
    }else{
    module.exports = require('./dev');
    }