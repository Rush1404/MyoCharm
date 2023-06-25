from flask import Flask, render_template, request
from tensorflow import keras
import tensorflow as tf
from PIL import Image
import io
from keras_preprocessing.image import load_img, img_to_array
from keras.applications.imagenet_utils import preprocess_input
from keras.applications.imagenet_utils import decode_predictions
from keras.models import load_model
import keras.backend as K
import numpy as np

app = Flask(__name__)

model = load_model('MyoCharm.h5')

@app.route('/', methods=['GET'])
def function():
    return render_template('myo.html')

@app.route('/', methods=['POST'])
def predict():
    def get_class_name(class_label):
        class_mapping = {
            0: 'class_0',
            1: 'class_1',
            2: 'class_2',
            3: 'class_3',
        }
        return class_mapping.get(class_label, 'Unknown')

    imagefile = request.files['imagefile']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)
    image = load_img(image_path, target_size=(256, 256))
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)  # Add an extra dimension for batch
    image = preprocess_input(image)
    yhat = model.predict(image)
    
    # Perform manual decoding
    class_indices = np.argmax(yhat, axis=1)
    class_label = class_indices[0]  
    class_name = get_class_name(class_label)  

    return render_template('myo.html', prediction=class_name)

if __name__ == '__main__':
    app.run(port=3000, debug=True)