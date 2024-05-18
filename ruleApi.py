import pymysql
from app import app
from dbConfig import mysql
from flask import jsonify
from flask import flash, request
		
@app.route('/add', methods=['POST'])
def add_user():
	try:
		_json = request.json
		_first_field = _json['field_1']
		_second_field = _json['field_2']
		_operator = _json['operator']
		_recommendation = _json['recommendation']
		_reason = _json['reason']
		_priority = _json['priority']
		_payee_id = 20
        
		if request.method == 'POST':
			sql = "INSERT INTO rules(first_field, second_field, operator, recommendation, reason, priority, payee_id) VALUES(%s, %s, %s, %s, %s, %s, %s)"
			data = (_first_field, _second_field, _operator, _recommendation, _reason, _priority, _payee_id)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sql, data)
			conn.commit()
			resp = jsonify('Rule added successfully!')
			resp.status_code = 200
			return resp
		else:
			return not_found()
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.route('/rules')
def users():
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM rules")
		rows = cursor.fetchall()
		resp = jsonify(rows)
		resp.status_code = 200
		return resp
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.route('/update', methods=['POST'])
def update_user():
	try:

		_json = request.json
		_id = _json['id']
		_first_field = _json['field_1']
		_second_field = _json['field_2']
		_operator = _json['operator']
		_recommendation = _json['recommendation']
		_reason = _json['reason']
		_priority = _json['priority']
		_payee_id = 20
        
		if request.method == 'POST':
			sql = "UPDATE rules SET first_field=%s, second_field=%s, operator=%s, recommendation=%s, reason=%s, priority=%s WHERE id=%s"
			data = (_first_field, _second_field, _operator, _recommendation, _reason, _priority, _id,)
			conn = mysql.connect()
			sql = "UPDATE tbl_user SET user_name=%s, user_email=%s, user_password=%s WHERE user_id=%s"
			data = (_name, _email, _hashed_password, _id,)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sql, data)
			conn.commit()
			resp = jsonify('Rule updated successfully!')
			resp.status_code = 200
			return resp
		else:
			return not_found()
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.route('/delete/<int:id>')
def delete_user(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM rules WHERE id=%s", (id,))
		conn.commit()
		resp = jsonify('Rule deleted successfully!')
		resp.status_code = 200
		return resp
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp
		
print(1)
app.run()