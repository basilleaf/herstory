import sys, re, csv
import urllib2
import csv
import json
from bs4 import BeautifulSoup

scraped_file = 'scrapings.csv'
base_url = 'http://www.nwhp.org/events/'
all_months = ['january','february','march','april','may','june','july','august','september','october','november','december']
output_file = 'scrapings.csv'

herstories = {}
for month in all_months:
    url = base_url + month

    soup = BeautifulSoup(urllib2.urlopen(url).read() ,"html.parser")

    highlights = soup.find("div", { "class" : "entry" }).find('ul')

    all_entries = highlights.find_all('li')
    for entry in all_entries:
        if entry.find('strong'):
            # this is an entry
            date = entry.find('strong').text
            story = entry.text.replace(date,'')[3:]
            herstories[date] = story

print json.dumps({'herstories':herstories}, indent=4)
