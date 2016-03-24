__version__ = '0.1'
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.httpauth import HTTPBasicAuth

#init
app = Flask('dashboard')
app.config['SECRET_KEY'] = 'very secret key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.debug = True

#extensions
db = SQLAlchemy(app)
auth = HTTPBasicAuth()

#imports
from dashboard.controllers import *
