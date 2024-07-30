import smtplib
from email.message import EmailMessage
import requests
from datetime import date
today = date.today()
formatted = today.strftime("%d/%m")
print(formatted)

fetch = requests.get("http://localhost:3000/birthdays")
data = fetch.json()
for i in data:
    if i["date"] == formatted:
        sender = "" ######### Replace with your email
        receiver = i["email"]
        body = f"Happy Birthday {i['name']}\nHave an amazing day!\n\n From the Birthday Bot"

        msg = EmailMessage()

        msg["Subject"] = "Happy Birthday! 🎉"
        msg["From"] = "Birthday Bot"
        msg["To"] = receiver
        msg.set_content(body)

        with open("pass.txt", "r") as f:
            password = f.readline()


        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()

        server.login(sender, password)
        print("Logged IN!")

        try:
            server.send_message(msg)

        except smtplib.SMTPAuthenticationError:
            print("unable to sign in")

    else:
        print("no birthday")