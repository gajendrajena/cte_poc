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

ActiveRecord::Schema.define(version: 20170105121702) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agents", force: :cascade do |t|
    t.string "admin_id"
    t.string "agency_name"
    t.string "accounting_name"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "agent_type"
    t.string "section_name"
    t.string "credit_limit"
    t.string "credit_value"
    t.string "credit_usage"
    t.string "credit_distribution"
    t.string "opening_balance"
    t.string "lead_time"
    t.string "address"
    t.string "city"
    t.string "pincode"
    t.string "country"
    t.string "time_zone_offset"
    t.string "enable_dst"
    t.string "phone"
    t.string "mobile"
    t.string "fax"
    t.string "email"
    t.string "username"
    t.string "password"
    t.string "designation"
    t.string "nature_of_business"
    t.string "logo"
    t.string "currency"
    t.string "credit_option"
    t.string "no_of_days"
    t.string "status"
    t.string "create_date"
    t.string "modify_date"
    t.string "parent_agent"
    t.string "debug"
    t.string "can_book"
    t.string "can_voucher"
    t.string "markup"
    t.string "branch_id"
    t.string "consultant_id"
    t.string "sales_manager_id"
    t.string "is_super_user"
    t.string "block_mail"
    t.string "allow_book_under_cancellation"
    t.string "updateflag"
    t.string "created_by"
    t.string "website"
    t.string "ukey"
    t.string "profile"
    t.string "account_email"
    t.string "send_sms"
    t.string "acc_name"
    t.string "acc_email"
    t.string "acc_phone"
    t.string "man_name"
    t.string "man_email"
    t.string "man_phone"
    t.string "res_name"
    t.string "res_email"
    t.string "res_phone"
    t.string "agency_email"
    t.string "payment_type"
    t.string "remarks"
    t.string "accounts_processed"
    t.string "site_id"
    t.string "wh_agent"
    t.string "wh_main_agent"
    t.string "last_login_date"
    t.string "apply_service_tax"
    t.string "allow_quotation"
    t.string "is_xmlout"
    t.string "ip_address"
  end

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

  create_table "ticket_vs_times", force: :cascade do |t|
    t.string  "branch_name"
    t.string  "fin_year"
    t.string  "month"
    t.integer "week"
    t.integer "day"
    t.integer "tickets_booked"
  end

  create_table "tkt_cnt_daywises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.string  "day"
    t.integer "tkt_count"
  end

  create_table "tkt_cnt_monthwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.integer "tkt_count"
  end

  create_table "tkt_cnt_weekwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.integer "tkt_count"
  end

  create_table "tkt_cnt_yearwises", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "tkt_count"
  end

  create_table "weekwise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.integer "booking_src_id"
    t.integer "tkt_count"
  end

  create_table "weekwise_peekday_weekdays", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.string  "month"
    t.string  "week"
    t.string  "day"
    t.integer "category_id"
    t.integer "tkt_count"
  end

  create_table "yearwise_booking_sources", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "booking_src_id"
    t.integer "tkt_count"
  end

  create_table "yearwise_peekday_weekdays", force: :cascade do |t|
    t.integer "branch_id"
    t.integer "fin_year"
    t.integer "category_id"
    t.string  "day"
    t.integer "tkt_count"
  end

end
