require 'test_helper'

class CostsheetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @costsheet = costsheets(:one)
  end

  test "should get index" do
    get costsheets_url
    assert_response :success
  end

  test "should get new" do
    get new_costsheet_url
    assert_response :success
  end

  test "should create costsheet" do
    assert_difference('Costsheet.count') do
      post costsheets_url, params: { costsheet: { agency_name: @costsheet.agency_name, agent_id: @costsheet.agent_id, booking_id: @costsheet.booking_id, cities: @costsheet.cities, create_date: @costsheet.create_date, discount: @costsheet.discount, final_rate: @costsheet.final_rate, noofadults: @costsheet.noofadults, noofchild: @costsheet.noofchild, noofrooms: @costsheet.noofrooms, original_rate: @costsheet.original_rate, package_id: @costsheet.package_id, package_type: @costsheet.package_type, packagename: @costsheet.packagename, pkg_end_date: @costsheet.pkg_end_date, pkg_start_date: @costsheet.pkg_start_date, ratings: @costsheet.ratings, sel_service: @costsheet.sel_service, stay_days: @costsheet.stay_days, total_rate: @costsheet.total_rate } }
    end

    assert_redirected_to costsheet_url(Costsheet.last)
  end

  test "should show costsheet" do
    get costsheet_url(@costsheet)
    assert_response :success
  end

  test "should get edit" do
    get edit_costsheet_url(@costsheet)
    assert_response :success
  end

  test "should update costsheet" do
    patch costsheet_url(@costsheet), params: { costsheet: { agency_name: @costsheet.agency_name, agent_id: @costsheet.agent_id, booking_id: @costsheet.booking_id, cities: @costsheet.cities, create_date: @costsheet.create_date, discount: @costsheet.discount, final_rate: @costsheet.final_rate, noofadults: @costsheet.noofadults, noofchild: @costsheet.noofchild, noofrooms: @costsheet.noofrooms, original_rate: @costsheet.original_rate, package_id: @costsheet.package_id, package_type: @costsheet.package_type, packagename: @costsheet.packagename, pkg_end_date: @costsheet.pkg_end_date, pkg_start_date: @costsheet.pkg_start_date, ratings: @costsheet.ratings, sel_service: @costsheet.sel_service, stay_days: @costsheet.stay_days, total_rate: @costsheet.total_rate } }
    assert_redirected_to costsheet_url(@costsheet)
  end

  test "should destroy costsheet" do
    assert_difference('Costsheet.count', -1) do
      delete costsheet_url(@costsheet)
    end

    assert_redirected_to costsheets_url
  end
end
