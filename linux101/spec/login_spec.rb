require 'spec_helper'

feature "Login", %q{
  I want to login to my virtualbox
  So that I can play with it
} do
  background do
    # fire up the box
    puts "Starting up box"
    puts `vagrant up`
  end

  context "ssh" do
    scenario "logs me in as the vagrant user" do
      `vagrant ssh -c 'whoami'`.strip.should == 'vagrant'
    end
  end

  context "nginx" do
    scenario "should be installed" do
      `vagrant ssh -c 'which nginx'`.strip.should_not be_empty
    end
  end

  context "node" do
    scenario "npm should be installed" do
      `vagrant ssh -c 'which npm'`.strip.should_not be_empty
    end
  end
end
