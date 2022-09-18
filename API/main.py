
# -*- coding: utf-8 -*-

import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api')
def GetURL():
    source = request.args.get('source')
    url = source
    UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
    url = url.split('/')
    user, id = url[3], url[5][0:19]
    urls = f"https://www.tiktok.com/node/share/video/{user}/{id}"
    r = requests.get(url=urls, headers={"User-Agent": UserAgent})
    data = r.json()

    return jsonify({"link": data["itemInfo"]["itemStruct"]["video"]["downloadAddr"]})

