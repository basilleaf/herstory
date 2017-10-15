import sys, re, csv
import urllib2
import csv
import json
from datetime import datetime
from bs4 import BeautifulSoup

""" scrapes http://www.nwhp.org/events/, prints to stdout """

scraped_file = 'scrapings.csv'
base_url = 'http://www.nwhp.org/events/'
all_months = ['january','february','march','april','may','june','july','august','september','october','november','december']
output_file = 'scrapings.csv'

herstories = []
for month in all_months:
    url = base_url + month

    soup = BeautifulSoup(urllib2.urlopen(url).read() ,"html.parser")

    highlights = soup.find("div", { "class" : "entry" }).find('ul')

    all_entries = highlights.find_all('li')
    for entry in all_entries:
        if entry.find('strong'):
            # this is an entry
            date = entry.find('strong')
            date = date.text.encode('utf-8').replace('\xc2\xa0','').strip()
            story = entry.text.encode('utf-8').strip().replace(date,'').replace('\xc2\xa0\xe2\x80\x93','').replace('"', '\"').strip()

            # for a single text sentence, no separate date field
            output_template = "'On {}, {}',"  # what Alexa reads
            herstories.append(output_template.format(date, story))

            # for date with time as field
            # get the date and try to convert to ISO
            """
            output_template = '"On {}, {}"'  # what Alexa reads
            try:
                iso_date = datetime.strptime(date, '%B %d, %Y').isoformat()
            except ValueError:
                if 'Rachel Carson' in story:
                    date = date + ', 1962'
                try:
                    iso_date = datetime.strptime(date, '%B %d, %Y').isoformat()
                except ValueError:
                    if 'Nurses Week' in date:
                        continue

            iso_date_short = iso_date.split('T')[0]
            json_template = '{{ "date": "{}", "iso": "{}", "story": {} }}'  # something that looks like json
            herstories.append(json_template.format(date, iso_date_short, output_template.format(date, story)))
            """

    # break

for line in herstories:
    print line
