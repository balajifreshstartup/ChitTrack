# ChitTrack Requirements

## 1. Project Overview

**ChitTrack** is a React Native mobile application designed to help users manage and track multiple chit savings in one place.

The application allows users to track chit details, monthly payments, savings, payment status, payment receipts, and upcoming payment dates.

**App Name:** ChitTrack

**Tagline:** Track Your Chits. Manage Your Savings.

**Powered by:** FreshStartup

---

## 2. Project Goals

The main goals of ChitTrack are:

- Track multiple chit groups in one application.
- Monitor monthly chit payments.
- Track total amount paid and amount saved.
- Track payment status.
- Store payment receipts.
- View chit progress.
- View upcoming payment due dates.
- Provide a simple and easy-to-use dashboard.
- Keep user data securely stored using Firebase.

---

## 3. Target User

The initial version of ChitTrack is intended for individuals who participate in one or more chit savings and want to manage their payments and savings digitally.

---

## 4. MVP Features

### 4.1 Authentication

- Google Sign-In
- Firebase Authentication
- User session management
- Logout

---

### 4.2 Dashboard

The dashboard should provide a quick overview of the user's chit activities.

Display:

- Number of active chits
- Total amount due for the current month
- Total amount paid
- Total amount saved
- Next upcoming payment
- Chit progress
- Quick access to chit details

---

### 4.3 Chit Management

Users should be able to:

- Add a new chit
- View all chits
- View ongoing chits
- View completed chits
- View chit details
- Track chit duration
- Track monthly payment amount
- Track payment due date

Chit information includes:

- Chit name
- Location
- Total chit amount
- Start date
- End date
- Monthly payment
- Payment due day

---

### 4.4 Payment Management

Users should be able to:

- Add monthly payment details
- View payment history
- Track payment status
- Record amount paid
- Record amount saved
- Record chit taken amount
- Record payment date
- Upload payment receipt

Payment statuses:

- Paid
- Pending
- Partial
- Overdue

---

### 4.5 Payment Receipt

Users should be able to:

- Upload a payment receipt.
- View the uploaded receipt.
- Associate the receipt with a specific payment.

Receipt files will be stored using Firebase Storage.

---

### 4.6 Calendar

The application should provide a calendar view for:

- Upcoming chit payment dates
- Monthly payment schedules
- Payment due dates

Google Calendar synchronization is planned for a future version.

---

### 4.7 Profile

Users should be able to:

- View profile information
- Manage account settings
- Configure payment reminders
- Configure Google Calendar synchronization
- Logout

---

## 5. MVP Screens

The initial MVP will contain:

1. Splash Screen
2. Login Screen
3. Dashboard
4. Chit List
5. Chit Details
6. Add Chit
7. Add Payment
8. Payment History
9. Payment Receipt
10. Calendar
11. Payment Reminders
12. Profile
13. Empty Chits State

---

## 6. Future Features

The following features are planned for future versions:

- Google Calendar synchronization
- Push notifications
- Payment reminders
- Advanced charts
- Savings reports
- Monthly and yearly reports
- PDF/Excel export
- Additional analytics

---

## 7. Technology

### Mobile Application

- React Native

### Authentication

- Firebase Authentication
- Google Sign-In

### Database

- Cloud Firestore

### File Storage

- Firebase Storage

---

## 8. Product Branding

All ChitTrack screens should follow the approved ChitTrack design system.

The application should display:

**ChitTrack**

*Track Your Chits. Manage Your Savings.*

**Powered by FreshStartup**