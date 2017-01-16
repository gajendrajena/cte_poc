namespace :wonderla do
  desc "TODO"
  task create_admin_user: :environment do
  	User.create :email => "admin_user@ctepl.com", :password => "wonderla123"
  end

end
