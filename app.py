from flask import Flask, render_template, request, jsonify, redirect, url_for
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        # Get form data
        name = request.form.get('name')
        email = request.form.get('email')
        company = request.form.get('company')
        message = request.form.get('message')
        
        # Basic validation
        if not all([name, email, company, message]):
            return jsonify({'status': 'error', 'message': 'All fields are required'}), 400
        
        # In a real application, you would send an email here
        # For demo purposes, we'll just log the submission
        print(f"Contact form submission:")
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Company: {company}")
        print(f"Message: {message}")
        print(f"Timestamp: {datetime.now()}")
        
        # Simulate email sending (replace with actual email logic)
        try:
            # send_email(name, email, company, message)
            return jsonify({
                'status': 'success', 
                'message': 'Thank you for your interest! Our team will contact you within 24 hours.'
            })
        except Exception as e:
            return jsonify({
                'status': 'error', 
                'message': 'There was an error sending your message. Please try again.'
            }), 500

def send_email(name, email, company, message):
    """
    Function to send email notifications
    Configure with your SMTP settings
    """
    # Email configuration (replace with your settings)
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "your-email@company.com"
    sender_password = "your-app-password"
    recipient_email = "sales@lineintel.com"
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = f"New Contact Form Submission from {company}"
    
    body = f"""
    New contact form submission:
    
    Name: {name}
    Email: {email}
    Company: {company}
    Message: {message}
    
    Submitted at: {datetime.now()}
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    # Send email
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(sender_email, sender_password)
    text = msg.as_string()
    server.sendmail(sender_email, recipient_email, text)
    server.quit()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
