# For 0.1.1

* make following available globally:
  * Sonea <- System
  * sonea <- current application
  * <ModelName> <- Models
  * <ServiceName> <- Services
  * <HelperName> <- Helpers

# For 0.1.0

* Target Structure in example - basic

```
Application (Root Folder)
```
```
- app
```
```
- - assets
- - - fonts
- - - images
- - - - favicon.ico
- - - styles
- - - scripts
```
```
- - controllers
- - - application_controller.coffee
```
```
- - helpers
- - - application_helper.coffee
```
```
- - hooks
```
```
- - models
```
```
- - public
- - - 400.html
- - - 500.html
```
```
- - services
```
```
- - vendor
- - - styles
- - - scripts
```
```
- - views
- - - layouts
- - - - application.html.eco
```
```
- bin
- - sonea (for cli actions)
```
```
- config
- - env
- - - development.coffee
- - - production.coffee
- - locales
- - - {**/(*.){en|de|fr|es|*}.coffee}
- - *.coffee
```
```
- db
- - migrations
- - schema.coffee (automatically created)
- - seed.coffee (seeding data here - for cli usage - or in config/bootstrap.coffee)
```
```
- lib
- - any_lib.coffee
- - any_other_lib.coffee
```
```
- spec
- - controllers
- - - controller_name_spec.coffee
- - models
- - - model_name_spec.coffee
- - fixtures
- - - model_name.coffee
- - spec_helper.coffee
```
```
- .gitignore
- .sonearc
- application.js
- package.json
- README.md
```
