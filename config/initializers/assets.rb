# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path
# Enable the asset pipeline
	Rails.application.config.assets.enabled = true
	Rails.application.config.assets.paths << "/assets/fonts"
	Rails.application.config.assets.precompile += %w(reports/wonderla/wonderla.js reports/red_apple/red_apple.js)

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
