exports.config =
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/
    stylesheets:
      joinTo: 'stylesheets/app.css'
