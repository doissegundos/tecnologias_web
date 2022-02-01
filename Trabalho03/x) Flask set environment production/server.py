from flask import Flask, jsonify

from config.init import load_config

config = load_config("TESTING")

app = Flask(__name__)

app.config.from_object(config)


@app.route('/', methods=['GET'])
def query_records():

    return jsonify({"ok": True})


if __name__ == "__main__":
    app.run(debug=True)