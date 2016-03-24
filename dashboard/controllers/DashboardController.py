from dashboard import app
from flask import render_template
from flask.ext.httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()

@app.route('/', methods=['GET', 'POST'])
#@auth.login_required
def index():
    return render_template('index.html')
