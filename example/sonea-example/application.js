module.exports = {
    
    apps: [
        // if a string is not identified as path -> it will try to require it
        // like a dependency
        'sonea-admin', // will be exposed as SoneaAdmin
        
        // './sonea-example-app' -> will be exposed as SoneaExampleApp
        {
            app: './sonea-example-app', // relative from root or absolute
            as: 'ExampleApp' // default is capitalized camelcase name from manifest (package.json)
        }
    ],
    
    // extensions - like security
    extensions: [
        //'cors',
        //'csrf'
    ],
    
    // global middlewares - for all applications
    // every application can have their one
    
    // every application use this default order as base
    // do not forget - every middleware has event hooks - before and after
    // except errors -> has only a before hook - because errors are render
    // something whatever comes
    middlewares: [
        'cookie-parser',
        'express-session',
        'body-parser',
        'method-override',
        
        // custom global middlewares
        '$custom',
        
        // custom app specific middlewares
        '$app',
        
        // sonea favicon loader - favicon can be overwritten per app
        'favicon',
        
        // error handler
        'errors'
    ]
    
    // there are many more options...but not explained here
};