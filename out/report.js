$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("multicart_user_accounts.feature");
formatter.feature({
  "line": 1,
  "name": "User My Account Activities",
  "description": "As a User I want to check all my accounts realtd options\nSO i can perform all activities",
  "id": "user-my-account-activities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 866753,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 2129113281,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1992061645,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 4425946892,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Sees individual account option",
  "description": "",
  "id": "user-my-account-activities;user-sees-individual-account-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to my Account page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I see options \"My Orders\" available",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I see options \"Profile\" available",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I see options \"My Return Requests\" available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see options \"Change Password\" available",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountSteps.i_navigate_to_my_Account_page()"
});
formatter.result({
  "duration": 1894414667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Orders",
      "offset": 15
    }
  ],
  "location": "MyAccountSteps.i_see_options_option(String)"
});
formatter.result({
  "duration": 575429146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 15
    }
  ],
  "location": "MyAccountSteps.i_see_options_option(String)"
});
formatter.result({
  "duration": 543535543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Return Requests",
      "offset": 15
    }
  ],
  "location": "MyAccountSteps.i_see_options_option(String)"
});
formatter.result({
  "duration": 541241201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 15
    }
  ],
  "location": "MyAccountSteps.i_see_options_option(String)"
});
formatter.result({
  "duration": 543236577,
  "status": "passed"
});
formatter.after({
  "duration": 133365016,
  "status": "passed"
});
formatter.before({
  "duration": 377610,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 1254769685,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 2130839769,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 4474865214,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Sees all Account Options",
  "description": "",
  "id": "user-my-account-activities;user-sees-all-account-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I navigate to my Account page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I see all aviable options below",
  "rows": [
    {
      "cells": [
        "My Orders"
      ],
      "line": 21
    },
    {
      "cells": [
        "Profile"
      ],
      "line": 22
    },
    {
      "cells": [
        "My Return Requests"
      ],
      "line": 23
    },
    {
      "cells": [
        "Change Password"
      ],
      "line": 24
    },
    {
      "cells": [
        "My Favorite Products"
      ],
      "line": 25
    },
    {
      "cells": [
        "My Favorite Sellers"
      ],
      "line": 26
    },
    {
      "cells": [
        "Seller Dashboard"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountSteps.i_navigate_to_my_Account_page()"
});
formatter.result({
  "duration": 2224938424,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.i_see_all_aviable_options_below(DataTable)"
});
formatter.result({
  "duration": 91311209,
  "status": "passed"
});
formatter.after({
  "duration": 158913558,
  "status": "passed"
});
formatter.uri("multicart_user_addCupon.feature");
formatter.feature({
  "line": 1,
  "name": "Add cupon for buyer",
  "description": "I want to add cupon for the buyer",
  "id": "add-cupon-for-buyer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 180977,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select seller dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 999254003,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 2027900577,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 4740858392,
  "status": "passed"
});
formatter.match({
  "location": "MyCatalogSteps.i_select_seller_dashboard()"
});
formatter.result({
  "duration": 3560682394,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Adding cupon to the cupon option",
  "description": "",
  "id": "add-cupon-for-buyer;adding-cupon-to-the-cupon-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I expect to land on seller page and click on Coupon Codes",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should be able to add coppon",
  "keyword": "And "
});
formatter.match({
  "location": "AddingCoupon.i_expect_to_land_on_seller_page_and_click_on_Coupon_Codes()"
});
formatter.result({
  "duration": 1920260114,
  "status": "passed"
});
formatter.match({
  "location": "AddingCoupon.i_should_be_able_to_add_coppon()"
});
formatter.result({
  "duration": 13082227596,
  "status": "passed"
});
formatter.after({
  "duration": 85696174,
  "status": "passed"
});
formatter.uri("multicart_user_login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nAs a User I want to perform a online login",
  "id": "user-login-mechanism",
  "keyword": "Feature"
});
formatter.before({
  "duration": 948901,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 922545502,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1523907713,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull login",
  "description": "",
  "id": "user-login-mechanism;successfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I complete login with James valid credentails",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect to seee profile Name as James Williams",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 4443007217,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_expect_to_seee_profile_Name_as_James_Williams()"
});
formatter.result({
  "duration": 549427261,
  "status": "passed"
});
formatter.after({
  "duration": 155227758,
  "status": "passed"
});
formatter.before({
  "duration": 243171,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 1005890847,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1363383109,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with blanc password",
  "description": "",
  "id": "user-login-mechanism;login-with-blanc-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I complete login with James No Password credentails",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I expect to seee no password error text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_No_Password_credentails()"
});
formatter.result({
  "duration": 4362295798,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_expect_to_seee_no_password_error_text()"
});
formatter.result({
  "duration": 541058957,
  "status": "passed"
});
formatter.after({
  "duration": 143417569,
  "status": "passed"
});
formatter.before({
  "duration": 593492,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 1023270915,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1678893920,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with blanc id",
  "description": "",
  "id": "user-login-mechanism;login-with-blanc-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I complete login with James No Id credentails",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I expect to seee enter user Name error text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_complete_login_with_James_No_Id_credentails()"
});
formatter.result({
  "duration": 4855097673,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_expect_to_seee_enter_user_Name_error_text()"
});
formatter.result({
  "duration": 540758461,
  "status": "passed"
});
formatter.after({
  "duration": 149205408,
  "status": "passed"
});
formatter.uri("multicart_user_mycatalog.feature");
formatter.feature({
  "line": 1,
  "name": "User MyCatalog Create post",
  "description": "I want post a new accessories",
  "id": "user-mycatalog-create-post",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1015274,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 958899612,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1505304403,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 4449437472,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should see all dashboard page options",
  "description": "",
  "id": "user-mycatalog-create-post;user-should-see-all-dashboard-page-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I select seller dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect to land on seller page and click on \"MyCatalog\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I slould be able click on \"Accessories\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to List items",
  "keyword": "And "
});
formatter.match({
  "location": "MyCatalogSteps.i_select_seller_dashboard()"
});
formatter.result({
  "duration": 2892685681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyCatalog",
      "offset": 46
    }
  ],
  "location": "MyCatalogSteps.i_expect_to_land_on_seller_page_and_click_on(String)"
});
formatter.result({
  "duration": 2629631514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accessories",
      "offset": 27
    }
  ],
  "location": "MyCatalogSteps.i_slould_be_able_click_on(String)"
});
formatter.result({
  "duration": 1921223876,
  "status": "passed"
});
formatter.match({
  "location": "MyCatalogSteps.i_should_be_able_to_List_items()"
});
formatter.result({
  "duration": 7745626516,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@id\u003d\u0027image_big[] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@id\u003d\u0027image_big[]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Mds-MBP-5\u0027, ip: \u00272604:2000:1201:42ce:c4cc:1059:5b1a:88cc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/h9/vgcld45d1h1...}, goog:chromeOptions: {debuggerAddress: localhost:62064}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e2de0454ac2e1a6627c4cef5e9984ca1\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027image_big[]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat multicard.pages.object.model.MasterPage.getWebElementBy(MasterPage.java:96)\n\tat multicard.pages.object.model.SellerDashboardPage.creatList(SellerDashboardPage.java:73)\n\tat multicard.steps.defination.MyCatalogSteps.i_should_be_able_to_List_items(MyCatalogSteps.java:45)\n\tat ✽.And I should be able to List items(multicart_user_mycatalog.feature:14)\n",
  "status": "failed"
});
formatter.after({
  "duration": 125945239,
  "status": "passed"
});
formatter.uri("multicart_user_order.feature");
formatter.feature({
  "line": 1,
  "name": "User Orders Mechanism",
  "description": "As a User I want to perform all orders related activity\n  So I can see my Orders , History, All those stuff",
  "id": "user-orders-mechanism",
  "keyword": "Feature"
});
formatter.before({
  "duration": 303000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 1095192882,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1747697648,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 4414291542,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Order Page Header Check",
  "description": "",
  "id": "user-orders-mechanism;order-page-header-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I navigate to order page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect Order page header is availablee",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_order_page()"
});
formatter.result({
  "duration": 5869022756,
  "status": "passed"
});
formatter.match({
  "location": "OrderStpes.I_expect_order_table_is_availablee()"
});
formatter.result({
  "duration": 550690514,
  "status": "passed"
});
formatter.after({
  "duration": 150310083,
  "status": "passed"
});
formatter.before({
  "duration": 220401,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 943925239,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 3436413618,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_complete_login_for_James_valid_credentails()"
});
formatter.result({
  "duration": 5570234320,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Order History Table Aviable",
  "description": "",
  "id": "user-orders-mechanism;order-history-table-aviable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I navigate to order page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I expect Order History Table Avaiable",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_order_page()"
});
formatter.result({
  "duration": 7313494286,
  "status": "passed"
});
formatter.match({
  "location": "OrderStpes.I_expect_Order_History_Table_Avaiable()"
});
formatter.result({
  "duration": 549005298,
  "status": "passed"
});
formatter.after({
  "duration": 115897783,
  "status": "passed"
});
});