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

ActiveRecord::Schema.define(version: 20170116121723) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groupwise_monthwise_tkt_cnts", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "group_id"
    t.string  "month"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_groupwise_monthwise_tkt_cnts_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_groupwise_monthwise_tkt_cnts_on_fin_year", using: :btree
    t.index ["group_id"], name: "index_groupwise_monthwise_tkt_cnts_on_group_id", using: :btree
  end

  create_table "groupwise_yearwise_tkt_cnts", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "group_id"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_groupwise_yearwise_tkt_cnts_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_groupwise_yearwise_tkt_cnts_on_fin_year", using: :btree
    t.index ["group_id"], name: "index_groupwise_yearwise_tkt_cnts_on_group_id", using: :btree
  end

  create_table "monthwise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.integer "booking_src_id"
    t.integer "tkt_count"
    t.index ["booking_src_id"], name: "index_monthwise_booking_sources_on_booking_src_id", using: :btree
    t.index ["branch_id"], name: "index_monthwise_booking_sources_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_monthwise_booking_sources_on_fin_year", using: :btree
  end

  create_table "monthwise_peekday_weekdays", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.integer "day"
    t.integer "category_id"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_monthwise_peekday_weekdays_on_branch_id", using: :btree
    t.index ["category_id"], name: "index_monthwise_peekday_weekdays_on_category_id", using: :btree
    t.index ["day"], name: "index_monthwise_peekday_weekdays_on_day", using: :btree
    t.index ["fin_year"], name: "index_monthwise_peekday_weekdays_on_fin_year", using: :btree
  end

  create_table "tkt_cnt_monthwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_tkt_cnt_monthwises_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_tkt_cnt_monthwises_on_fin_year", using: :btree
  end

  create_table "tkt_cnt_yearwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_tkt_cnt_yearwises_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_tkt_cnt_yearwises_on_fin_year", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "yearwise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "booking_src_id"
    t.integer "tkt_count"
    t.index ["booking_src_id"], name: "index_yearwise_booking_sources_on_booking_src_id", using: :btree
    t.index ["branch_id"], name: "index_yearwise_booking_sources_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_yearwise_booking_sources_on_fin_year", using: :btree
  end

  create_table "yearwise_peekday_weekdays", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "category_id"
    t.integer "day"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_yearwise_peekday_weekdays_on_branch_id", using: :btree
    t.index ["category_id"], name: "index_yearwise_peekday_weekdays_on_category_id", using: :btree
    t.index ["day"], name: "index_yearwise_peekday_weekdays_on_day", using: :btree
    t.index ["fin_year"], name: "index_yearwise_peekday_weekdays_on_fin_year", using: :btree
  end

end
