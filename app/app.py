from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample data for initial habits
initial_habits = [
    {'name': 'Exercise', 'Sun': 'Yes', 'Mon': '', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat':  ''},
    {'name': 'Read', 'Sun': '10', 'Mon': '', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat': ''},
    {'name': 'Meditate', 'Sun': '', 'Mon': 'No', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat': ''}
]

@app.route('/')
def index():
    return render_template('index.html', habits=initial_habits)

@app.route('/add_habit', methods=['POST'])
def add_habit():
    habit_name = request.form['habitName']
    completion_status = request.form['completionStatus']
    quantitative_data = request.form['quantitativeData']

    # Add the new habit to the data (you may want to store this in a database)
    new_habit = {'name': habit_name, 'Sun': '', 'Mon': '', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat': ''}
    new_habit[completion_status] = quantitative_data

    initial_habits.append(new_habit)

    return jsonify(success=True)

if __name__ == '__main__':
    app.run(debug=True)
