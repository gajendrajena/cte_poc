namespace :wonderla do
  desc "CREATE_ADMIN_USER"
  task create_admin_user: :environment do
  	User.create :email => "admin_user@ctepl.com", :password => "wonderla123"
  end

end
