# coding: utf-8
from selenium import webdriver
import time
import random
from selenium.webdriver.common.keys import Keys


users = ["wyp1@gmail.com","wyp2@gmail.com"]
browser  = webdriver.Chrome("/Users/admin/git/whatsyourpoint/bot/chromedriver")
time.sleep(2)
#home.page
try:
    while True:
        browser.get("http://localhost:3000")
        login_button = browser.find_element_by_partial_link_text("ogin")
        login_button.click()
        time.sleep(1)

        # login page:
        inputs =  browser.find_elements_by_tag_name("input")
        time.sleep(1)
        inputs[0].clear()
        inputs[0].send_keys(users[random.randint(0,1)])

        time.sleep(1)
        inputs[1].clear()
        inputs[1].send_keys("Wypwyp12") 

        time.sleep(2)
        login_button = browser.find_element_by_id("login")
        
        time.sleep(2)
        login_button.click()

        time.sleep(2)
        home_button = browser.find_element_by_partial_link_text("ome")
        home_button.click()

        # views
        peep_buttons = browser.find_elements_by_css_selector(".peep")
        peep_buttons[random.randint(0,1)].click()
        time.sleep(2)
        home_button.click()
        time.sleep(2)

        # views
        chat_buttons = browser.find_elements_by_css_selector(".onechat")
        chat_buttons[random.randint(0,1)].click()
        time.sleep(2)

        new_message = browser.find_elements_by_css_selector(".new_message")[0]
        time.sleep(2)
        lines = []

        with open("quotes.txt",'r') as f:
            lines = f.read().split("\n")

        new_message.clear()
        new_message.send_keys(lines[random.randint(1,1500)])
        new_message.send_keys(Keys.ENTER)


        time.sleep(2)
except Exception as e:
    browser.close()
    raise e
browser.close()