from PixConnect import PixConnect

with PixConnect(host='localhost:3306', user='root', password='abacate1', database='manager') as connection:
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM pix_transaction")
        rows = cursor.fetchall()
        for row in rows:
            print(row)