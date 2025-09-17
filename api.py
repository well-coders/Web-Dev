# import requests

# url = "https://api.freeapi.app/api/v1/public/randomjokes"

# querystring = {"limit":"1","query":"science","inc":"categories%2Cid%2Ccontent","page":"1"}

# headers = {"accept": "application/json"}

# response = requests.get(url, headers=headers, params=querystring)

# data = response.json()

# print(data['data']['data'][0]["content"])

# sk-3267a58c8f8943a2b02b3052bb1c6328

import requests

# ✅ The real DeepSeek API endpoint
url = "https://api.deepseek.com/chat/completions"

# ✅ API key goes in headers, not in URL
headers = {
    "Authorization": "Bearer sk-efe6f90b60974bc69612b1135221ff10",  # <-- your key here
    "Content-Type": "application/json"
}

# ✅ JSON payload with model and messages
payload = {
    "model": "deepseek-chat",
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me a short programming joke."}
    ]
}

response = requests.post(url, headers=headers, json=payload)

print("Status:", response.status_code)
print("Response:", response.json())
