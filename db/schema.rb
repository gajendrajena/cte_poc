# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161112102542) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "costsheets", force: :cascade do |t|
    t.integer "booking_id"
    t.string  "package_id"
    t.integer "agent_id"
    t.string  "packagename"
    t.string  "cities"
    t.string  "ratings"
    t.string  "stay_days"
    t.string  "pkg_start_date"
    t.string  "pkg_end_date"
    t.integer "noofrooms"
    t.integer "noofadults"
    t.integer "noofchild"
    t.string  "create_date"
    t.float   "total_rate"
    t.float   "original_rate"
    t.string  "discount"
    t.string  "sel_service"
    t.string  "package_type"
    t.float   "final_rate"
    t.string  "agency_name"
  end

end
