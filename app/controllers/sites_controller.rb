class SitesController < ApplicationController
  def index
  end
  def info
    render 'info'
  end
  def gallery
    render 'gallery'
  end
  def packages
    render 'packages'
  end
end
