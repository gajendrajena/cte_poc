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

ActiveRecord::Schema.define(version: 20170109075224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "daywise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.string  "day"
    t.integer "booking_src_id"
    t.integer "tkt_count"
  end

  create_table "monthwise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.integer "booking_src_id"
    t.integer "tkt_count"
  end

  create_table "monthwise_peekday_weekdays", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "day"
    t.integer "category_id"
    t.integer "tkt_count"
  end

  create_table "tkt_cnt_daywises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.string  "day"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_tkt_cnt_daywises_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_tkt_cnt_daywises_on_fin_year", using: :btree
  end

  create_table "tkt_cnt_monthwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_tkt_cnt_monthwises_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_tkt_cnt_monthwises_on_fin_year", using: :btree
  end

  create_table "tkt_cnt_weekwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_tkt_cnt_weekwises_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_tkt_cnt_weekwises_on_fin_year", using: :btree
  end

  create_table "tkt_cnt_yearwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_tkt_cnt_yearwises_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_tkt_cnt_yearwises_on_fin_year", using: :btree
  end

  create_table "weekwise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.integer "booking_src_id"
    t.integer "tkt_count"
    t.index ["booking_src_id"], name: "index_weekwise_booking_sources_on_booking_src_id", using: :btree
    t.index ["branch_id"], name: "index_weekwise_booking_sources_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_weekwise_booking_sources_on_fin_year", using: :btree
  end

  create_table "weekwise_peekday_weekdays", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.string  "day"
    t.integer "category_id"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_weekwise_peekday_weekdays_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_weekwise_peekday_weekdays_on_fin_year", using: :btree
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
    t.string  "day"
    t.integer "tkt_count"
    t.index ["branch_id"], name: "index_yearwise_peekday_weekdays_on_branch_id", using: :btree
    t.index ["fin_year"], name: "index_yearwise_peekday_weekdays_on_fin_year", using: :btree
  end

end
