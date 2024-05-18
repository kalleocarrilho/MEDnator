from app import app
from flask_mysqldb import MySQL
mysql = MySQL()
 
# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'heimdall'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)