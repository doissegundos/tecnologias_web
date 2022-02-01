from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    users = ["Rosalia"]
    return render_template('t3.html', title='Welcome', members=users)

app.run(host='0.0.0.0', port=81)