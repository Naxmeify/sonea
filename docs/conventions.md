Application Conventions
=====

# Bootorder

1. System
2. Plugins
3. mountable Applications
4. Main Application

# Filenames

## App
* Controller: <name>_controller.coffee
* Models: <Name>.coffee
* Views: <name>.html.eco (or if template: _<name>.html.eco)
* Services: <name>_service.coffee
* Helper: <name>_helper.coffee
* Hooks / Events: <name>_hook.coffee

## Assets

* JS: <anything>.js
* CSS: <anything>.css
* Coffee: <anything>.js.coffee (for scripts that will be compiled to js)
* LESS: <anything>.css.less (for styles that will be compiled to css)
* Stylus: <anything>.css.styl (for styles that will be compiled to css)

All other assets will be static with there paths (more in section Folders).

# Methods / Methodnames

## In controllers

* every method can be called through routes
* if a method is called through a route it will render the view for the method (except: if  the method self don't call the render method)
* each controller can call the configure method to configure the controller (e.g. to define before_action, layout, etc...)

## In models

* see mongoose schema methods / statics?

## In helpers

* Helper Methods will be populated to response.locals for use in views
* each method can be called through: <helper_namespace/helper_name>.<method_name>

e.g. (sonea default namespace is "s")

```
<%= s.link_to 'Home', root_path() %>
```

# Folders
# System Classes
# Wiring