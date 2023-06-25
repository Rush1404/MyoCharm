from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
import tensorflow as tf
from keras import preprocessing
import numpy as np
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras.applications.vgg16 import preprocess_input
import os
from tensorflow.keras.preprocessing import image

app = Flask(__name__)
model = load_model('C:\Users\rusha\OneDrive\Documents\Coding\Hackathons\Wafflehacks\Wafflehacks_2023\MODEL_BACKEND\imageclassifier.h5')
target_img = os.path.join(os.getcwd() , 'static/images')
