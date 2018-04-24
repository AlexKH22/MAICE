from bs4 import BeautifulSoup
import pandas as pd
import re
import time
import urllib.request


def get_urls():
    url = "https://www.alexa.com/topsites/category"

    r = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(r, "lxml")
    subcategories = soup.find_all("ul", class_="subcategories span3")
    categories = []
    for category in subcategories:
        cat = category.find_all("li")
        matches = re.findall(r'\"(.+?)\"', str(cat))
        for s in matches:
            categories.append(s)

    urls = ["https://www.alexa.com" + cat for cat in categories]
    time.sleep(3)
    return urls


# DO WE NEED MORE CATEGORIES?
def dive_deeply(url):
    r = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(r, "lxml")
    subcategories = soup.find_all("ul", class_="subcategories span3")
    suburls = []
    for category in subcategories:
        cat = category.find_all("li")
        num_websites = re.findall(r'\(([^\)]+)\)', str(cat))

        indices_to_ignore = []
        for i, num in enumerate(num_websites):
            if int(num.replace(",", "")) < 50:
                indices_to_ignore.append(i)

        matches = re.findall(r'\"/(.+?)\"', str(cat))
        for i, s in enumerate(matches):
            if i not in indices_to_ignore:
                suburls.append(s)

    suburls = ["https://www.alexa.com/" + cat for cat in suburls]
    time.sleep(3)

    return suburls


def scrap_url(url):
    r = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(r, "lxml")
    sites = soup.find_all("div", class_="td DescriptionCell")

    webs = []
    for site in sites:
        ls = site.find_all("a")[0].next.split("://")
        if len(ls)>1:
            element = ls[1].split("/")[0]
        else:
            element = ls[0].split("/")[0]
        webs.append(element.replace("www.", ""))
    time.sleep(3)
    return webs


if __name__ == "__main__":
    deep = False
    if deep:
        urls = get_urls()[1:5]
        urls = {url.split("/")[-1]: dive_deeply(url) for url in urls}
        websites = {}
        for category, subcategories in urls.items():
            for subcat in subcategories:
                name = subcat.split("/")
                websites[name[-2] + "_" + name[-1]] = scrap_url(subcat)
        pd.DataFrame(websites).to_csv("websites_deep.csv",
                                      index=False)
    else:
        urls = get_urls()[1:-1]

        websites = {}
        for url in urls:
            websites[url.split("/")[-1]] = scrap_url(url)
        pd.DataFrame(websites).to_csv("websites.csv",
                                      index=False)
