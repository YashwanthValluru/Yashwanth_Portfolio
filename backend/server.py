from fastapi import FastAPI, APIRouter, HTTPException, status # Import status for HTTP status codes
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import uuid
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

# --- Email related imports ---
import smtplib
import ssl
from email.message import EmailMessage
# For SendGrid (if you choose this, uncomment below)
# import sendgrid
# from sendgrid.helpers.mail import Mail

# Define ROOT_DIR and load .env
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# --- MongoDB connection ---
try:
    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME') # Get DB_NAME from .env

    if not mongo_url:
        raise ValueError("MONGO_URL environment variable not set.")
    if not db_name:
        raise ValueError("DB_NAME environment variable not set.")

    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name] # Use DB_NAME from .env
    logging.info(f"Successfully connected to MongoDB: {mongo_url}, Database: {db_name}")
except Exception as e:
    logging.error(f"Error connecting to MongoDB: {e}")
    raise # Re-raise to prevent server from starting without DB connection

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    sender_name: str
    sender_email: EmailStr
    subject: str
    content: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_encoders = {
            datetime: lambda dt: dt.isoformat(),
            uuid.UUID: lambda u: str(u),
        }

class ContactMessageCreate(BaseModel):
    sender_name: str
    sender_email: EmailStr
    subject: str
    content: str

# --- Email Sending Function ---
async def send_notification_email(message_data: dict):
    # Get email credentials from environment variables
    email_user = os.environ.get("EMAIL_HOST_USER")
    email_pass = os.environ.get("EMAIL_HOST_PASSWORD")
    email_recipient = os.environ.get("EMAIL_RECIPIENT")

    if not email_user or not email_pass or not email_recipient:
        logging.warning("Email credentials or recipient not fully set in .env. Skipping email notification.")
        return

    # Create the email content
    msg = EmailMessage()
    msg['Subject'] = f"New Portfolio Contact: {message_data.get('subject', 'No Subject')}"
    msg['From'] = email_user
    msg['To'] = email_recipient
    
    html_content = f"""
    <html>
    <body>
        <h2>New Contact Message Received!</h2>
        <p>You have received a new message from your portfolio website:</p>
        <ul>
            <li><b>Name:</b> {message_data.get('sender_name')}</li>
            <li><b>Email:</b> {message_data.get('sender_email')}</li>
            <li><b>Subject:</b> {message_data.get('subject')}</li>
        </ul>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap; border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">{message_data.get('content')}</p>
        <p><i>Sent at: {datetime.utcnow().isoformat()} UTC</i></p>
    </body>
    </html>
    """
    msg.add_alternative(html_content, subtype='html')

    try:
        # Connect to Gmail's SMTP server
        # For other providers, you'd change the host and port
        smtp_server = "smtp.gmail.com"
        smtp_port = 587 # For STARTTLS

        context = ssl.create_default_context() # Use default SSL context for security

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.ehlo() # Can be omitted
            server.starttls(context=context) # Secure the connection
            server.ehlo() # Can be omitted
            server.login(email_user, email_pass) # Login with your credentials
            server.send_message(msg) # Send the email
        
        logging.info(f"Email notification sent successfully to {email_recipient}.")
    except Exception as e:
        logging.error(f"Failed to send email notification: {e}", exc_info=True) # exc_info=True prints full traceback

# --- Uncomment this block to use SendGrid instead (requires 'sendgrid' and 'python-dotenv' installed) ---
# async def send_notification_email_sendgrid(message_data: dict):
#     sendgrid_api_key = os.environ.get('SENDGRID_API_KEY')
#     sendgrid_sender_email = os.environ.get('SENDGRID_SENDER_EMAIL')
#     email_recipient = os.environ.get("EMAIL_RECIPIENT")

#     if not sendgrid_api_key or not sendgrid_sender_email or not email_recipient:
#         logging.warning("SendGrid API key, sender email, or recipient not set. Skipping SendGrid email notification.")
#         return

#     message = Mail(
#         from_email=sendgrid_sender_email,
#         to_emails=email_recipient,
#         subject=f"New Portfolio Contact: {message_data.get('subject', 'No Subject')}",
#         html_content=f"""
#             <p>You have received a new message from your portfolio website:</p>
#             <p><b>Name:</b> {message_data.get('sender_name')}</p>
#             <p><b>Email:</b> {message_data.get('sender_email')}</p>
#             <p><b>Subject:</b> {message_data.get('subject')}</p>
#             <p><b>Message:</b><br>{message_data.get('content')}</p>
#             <p><i>Sent at: {datetime.utcnow().isoformat()} UTC</i></p>
#         """
#     )
#     try:
#         sendgrid_client = sendgrid.SendGridAPIClient(sendgrid_api_key)
#         response = sendgrid_client.send(message)
#         logging.info(f"SendGrid email sent. Status Code: {response.status_code}, Body: {response.body}, Headers: {response.headers}")
#     except Exception as e:
#         logging.error(f"Error sending SendGrid email: {e}", exc_info=True)


# Add your routes to the router instead of directly to app
@app.get("/")
async def root_app_endpoint():
    return {"message": "Welcome to the FastAPI Backend! Use /api for API endpoints."}

@api_router.get("/")
async def root_api_router_endpoint():
    return {"message": "Hello from the API router! This is the base for your API routes."}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    try:
        status_obj = StatusCheck(client_name=input.client_name)
        status_data_for_mongo = status_obj.dict(by_alias=True)
        status_data_for_mongo['_id'] = status_data_for_mongo.pop('id')

        result = await db.status_checks.insert_one(status_data_for_mongo)
        if not result.acknowledged:
            raise HTTPException(status_code=500, detail="Failed to save status check to database.")
        logging.info(f"Status check saved for client: {status_obj.client_name} with ID: {status_obj.id}")
        return status_obj
    except Exception as e:
        logging.error(f"Error saving status check: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal server error: {e}")

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    try:
        status_checks_cursor = db.status_checks.find({})
        status_checks_list = await status_checks_cursor.to_list(1000)
        return [StatusCheck(id=str(sc.get('_id', uuid.uuid4())), **{k: v for k, v in sc.items() if k != '_id'}) for sc in status_checks_list]
    except Exception as e:
        logging.error(f"Error retrieving status checks: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal server error: {e}")


# NEW API ENDPOINT: Handle Contact Form Submission
@api_router.post("/contact-messages", response_model=ContactMessage, status_code=status.HTTP_201_CREATED) # Set default status code
async def submit_contact_message(input: ContactMessageCreate):
    """
    Receives a contact message from the frontend, saves it to MongoDB, and sends an email notification.
    """
    logging.info(f"Received contact message request from: {input.sender_email}")

    try:
        contact_message_obj = ContactMessage(
            sender_name=input.sender_name,
            sender_email=input.sender_email,
            subject=input.subject,
            content=input.content
        )

        message_data_for_mongo = contact_message_obj.dict(by_alias=True)
        
        result = await db.contact_submissions.insert_one(message_data_for_mongo)

        if not result.acknowledged:
            logging.error(f"Failed to save contact message to database: Insertion not acknowledged.")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to save contact message to database.")

        logging.info(f"Contact message from '{input.sender_name}' ({input.sender_email}) saved with MongoDB _id: {result.inserted_id}")
        
        # --- Send Email Notification AFTER successful database save ---
        await send_notification_email(message_data_for_mongo)
        # Or if using SendGrid:
        # await send_notification_email_sendgrid(message_data_for_mongo)

        return contact_message_obj
    except HTTPException: # Re-raise HTTPExceptions directly
        raise
    except Exception as e:
        logging.error(f"Error processing contact message: {e}", exc_info=True)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal server error: {e}")

# Include the router in the main app
app.include_router(api_router)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["http://localhost:3000"], # Your frontend URL, keep specific for production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    if client:
        client.close()
        logging.info("MongoDB client closed.")