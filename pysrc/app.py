#!/usr/bin/env python
# coding: utf-8

# In[1]:


from flask import jsonify
from flask_cors import CORS
from twilio.twiml.messaging_response import MessagingResponse
from flask import request
from flask import Flask
import twilio
import requests
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
import numpy as np
import random
import string  # to process standard python strings

# In[2]:


f = open('c:/Users/Alexandra/Desktop/tech-together-hack/pysrc/ppd.txt',
         'r', errors='ignore')
raw = f.read()
raw = raw.lower()  # converts to lowercase


# In[3]:

# nltk.download('punkt')  # first-time use only
# nltk.download('wordnet')  # first-time use only


# In[4]:


sent_tokens = nltk.sent_tokenize(raw)  # converts to list of sentences
word_tokens = nltk.word_tokenize(raw)  # converts to list of words


# In[5]:


lemmer = nltk.stem.WordNetLemmatizer()
# WordNet is a semantically-oriented dictionary of English included in NLTK.


def LemTokens(tokens):
    return [lemmer.lemmatize(token) for token in tokens]


remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)


def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))


# In[6]:


GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up", "hey",)
GREETING_RESPONSES = ["hi", "hey", "*nods*", "hi there",
                      "hello", "I am glad! You are talking to me"]
SURVEY_INIT = ("anxious", "depression", "depressive", "anxiety", "depressed")
SURVEY_QUESTIONS = ("I have'nt been able to laugh and see the funny side of things?",
                    "I have'nt been able to look forward to things with enjoyment?",
                    "I have blamed myself unnecessarily when things  went wrong?",
                    "I have been anxious or worried for no good reason?",
                    "I have felt scared or panicky for no very good reason?",
                    "Things have been getting on top of me?",
                    "I have been so unhappy that I have had difficulty sleeping?",
                    "I have felt sad or miserable?",
                    "I have been so unhappy that I have been crying?",
                    "The thought of harming myself has occurred to me?")
SUGGESTIONS = ["Relax", "take a walk",
               "Exercise", "take a walk", "Read a Book"]
SURVEY_ANSWERS = {'yes': 3, 'no': 0}


def greeting(sentence):
    for word in sentence.split():
        if word.lower() in GREETING_INPUTS:
            return random.choice(GREETING_RESPONSES)


def survey(sentence):
    print(sentence)
    for word in sentence.split():
        if word.lower() in SURVEY_INIT:
            return ("would you mind if I ask you a couple of questions..")


def suggestions():
    return random.choice(SUGGESTIONS)


# In[7]:


# In[8]:


def response(user_response):
    robo_response = ''
    sent_tokens.append(user_response)
    TfidfVec = TfidfVectorizer(tokenizer=LemNormalize)
    tfidf = TfidfVec.fit_transform(sent_tokens)
    vals = cosine_similarity(tfidf[-1], tfidf)
    idx = vals.argsort()[0][-2]
    flat = vals.flatten()
    flat.sort()
    req_tfidf = flat[-2]
    if(req_tfidf == 0):
        robo_response = robo_response+"I am sorry! I don't understand you"
        return robo_response
    else:
        robo_response = robo_response+sent_tokens[idx]
        return robo_response


# In[10]:


app = Flask(__name__)
CORS(app)


@app.route('/bot', methods=['POST'])
def bot():
    epds_count = []
    # print("ROBO: My name is Robo. I will answer your queries about Postpartum depression. If you want to exit, type Bye!")
    user_response = request.args['message']
    user_response = user_response.lower()
    robo_response = MessagingResponse()
    msg_1 = robo_response.message()
    if(user_response != 'bye'):
        if(user_response == 'thanks' or user_response == 'thank you'):
            msg_1.body("ROBO: You are welcome..")
        elif(survey(user_response) != ''):
            return jsonify({"data": "In order for us to help you better, we would like to ask you a few question.\nPlease answer it with a yes or a no based on how you have felt in the past 7 days:"})
            for item in SURVEY_QUESTIONS:
                msg_1.body(item)
                survey_response = request.args['message']
                while(survey_response != 'no' and survey_response != 'yes'):
                    msg_1.body("Please enter a valid input:")
                    survey_response = request.args['message']
                epds_count.append(SURVEY_ANSWERS[survey_response])
            if(sum(epds_count) > 13):
                msg_1.body(
                    "Dont worry! You are not alone. At this time I recommend you seek medical advice from a general Physician.")
            else:
                msg_1.body(
                    "Don't worry just take some time out for yourself and " + suggestions() + "!")
        else:
            if(greeting(user_response) != ''):
                msg_1.body("ROBO: "+greeting(user_response))
            else:
                msg_1.body("ROBO: ", end="")
                msg_1.body(response(user_response))
                sent_tokens.remove(user_response)
    else:
        msg_1.body("ROBO: Bye! take care..")
    return jsonify({"data": str(robo_response)})
