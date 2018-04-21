import json
import requests

image_url = input('Provide ad image URL: ')



subscription_key = "SUBSCRIPTION_KEY"
assert subscription_key

vision_base_url = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/"

ocr_url = vision_base_url + "ocr"
#print(ocr_url)


headers  = {'Ocp-Apim-Subscription-Key': subscription_key}
params   = {'language': 'unk', 'detectOrientation ': 'true'}
data     = {'url': image_url}
response = requests.post(ocr_url, headers=headers, params=params, json=data)
response.raise_for_status()

analysis = response.json()

#print(analysis)



line_infos = [region["lines"] for region in analysis["regions"]]
word_infos = []
for line in line_infos:
    for word_metadata in line:
        for word_info in word_metadata["words"]:
            word_infos.append(word_info)

#print(word_infos)


wordList = []

for item in word_infos:
    wordList.append(item['text'])

print(wordList)
