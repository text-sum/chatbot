from flask import Flask, render_template, request
from transformers import pipeline

app = Flask(__name__)

# Use a pipeline for text summarization with the Facebook BART model
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    if request.method == 'POST':
        input_text = request.form['input_text']
        
        # Perform text summarization using the BART pipeline
        summarized_text = summarizer(input_text, max_length=150, min_length=30, do_sample=False)[0]['summary_text']

        return render_template('summarize_result.html', input_text=input_text, summarized_text=summarized_text)

if __name__ == '__main__':
    app.run(debug=True)