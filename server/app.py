'''server/app.py - main api app declaration'''
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from flask import request

'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='../build')
CORS(app)

##
# API route
##

@app.route('/api', methods=['POST'])
def process():
  msg=request.args['msg']
  print("MESSAGE: ", msg)
  return msg
	
