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

# Methods
# Folders
# System Classes
# Wiring