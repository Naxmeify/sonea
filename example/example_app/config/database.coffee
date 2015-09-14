module.exports = 
    connections:
        nosqldisk:
            adapter: 'nosqldisk'
            name: 'nosqldisk'
            
        sqlite:
            adapter: 'sqlite'
            name: 'sqlite'
            
        mysql:
            adapter: 'mysql'
            host: ''
            user: ''
            pass: ''
            name: 'mysqldb'
            
        test:
            adapter: 'memory'
    
    
    # how to handle unused migrations
    # 'ignore': - ignore open migrations...
    # 'check': - check it and print errors if exists
    migrate: 'check'
    
    models:
        # default connection of a model if not specified
        connection: 'nosqldisk'