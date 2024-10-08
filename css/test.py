import urllib.request

url = "https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=cb8e940c-ea68-4a3d-803c-d8d7164c2d2d&limit=5&q=title:jones"
fileobj = urllib.request.urlopen(url)
print(fileobj.read())
