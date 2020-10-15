# coding: utf-8
from selenium import webdriver
import time
import random
from selenium.webdriver.common.keys import Keys

interval = 10

users = ["wyp1@gmail.com","wyp2@gmail.com"]
browser = webdriver.Chrome("/Users/admin/git/whatsyourpoint/bot/chromedriver")
time.sleep(2)
browser.get("https://whatsyourpoint.vercel.app/")
#home.page
user = 0
def home():
    home_button = browser.find_element_by_partial_link_text("ome")
    home_button.click()
    time.sleep(2)

while True:
    home()
    
    user = abs(user-1)
    # login page:
    login_button = browser.find_element_by_id("loginnav")
    login_button.click()
    time.sleep(2)
    
    inputs =  browser.find_elements_by_tag_name("input")
    time.sleep(1)
    inputs[0].clear()
    inputs[0].send_keys(users[user])
    time.sleep(2)

    inputs[1].clear()
    inputs[1].send_keys("Wypwyp12") 
    time.sleep(1)
    login_button = browser.find_element_by_id("login")
    login_button.click()
    time.sleep(2)
    


    home()

    # views
    peep_buttons = browser.find_elements_by_css_selector(".peep")
    peep_buttons[random.randint(0,1)].click()
    time.sleep(2)

    home()

    # fight
    chat_buttons = browser.find_elements_by_css_selector(".onechat")
    chat_buttons[random.randint(0,1)].click()
    time.sleep(1)
    new_message = browser.find_elements_by_css_selector(".new_message")[0]
    time.sleep(1)
    lines = []
    with open("quotes.txt",'r') as f:
        lines = f.read().split("\n")
    new_message.clear()
    new_message.send_keys(lines[random.randint(1,1500)])
    time.sleep(1)
    new_message.send_keys(Keys.ENTER)

    home()

    #logout
    time.sleep(2)
    logout_button = browser.find_element_by_id("logout")
    logout_button.click()


    time.sleep(interval)
browser.close()
