from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Store the submitted form data in memory (you might want to use a database in a real application)
form_data = []

# Sample data for initial habits
initial_habits = [
    {'name': 'Exercise', 'Sun': 'Yes', 'Mon': '', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat':  ''},
    {'name': 'Read', 'Sun': '10', 'Mon': '', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat': ''},
    {'name': 'Meditate', 'Sun': '', 'Mon': 'No', 'Tue': '', 'Wed': '', 'Thu': '', 'Fri': '', 'Sat': ''}
]

@app.route('/')
def index():
    return render_template('index.html', habits=initial_habits)


@app.route('/submit_form', methods=['POST'])
def submit_form():
    # Extract form data
    date = request.form.get('date')
    # Extract other form fields as needed

    # Create a dictionary to represent the form data
    form_entry = {
        'date': date,
        # Add other form fields as needed
    }

    # Append the form data to the existing habit_data list
    form_data.append(form_entry)

    return render_template('index.html', habit_data=form_data)
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
