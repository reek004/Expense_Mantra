# Expense Mantra

A full-stack expense tracking application built with modern web technologies that helps users manage their financial transactions with an intuitive interface and real-time data visualization.

## Features

### User Authentication
- Secure signup and login functionality
- Password encryption using bcrypt
- Session-based authentication
- Gender-based avatar generation

### Transaction Management
- Create, read, update, and delete transactions
- Categorize transactions (Savings, Expenses, Investments)
- Filter transactions by payment type (Cash/Card)
- Location tracking for transactions
- Date-wise transaction organization

### Data Visualization
- Interactive pie charts showing expense distribution
- Category-wise statistics
- Real-time updates using Apollo Client

### UI/UX Features
- Responsive design for all screen sizes
- Dark/Light mode support
- Loading skeletons for better UX
- Toast notifications for user feedback
- Grid background with gradient effects

## Technology Stack

### Frontend
- **Aceternity UI** - UI library
- **Tailwind CSS** - Styling and UI components
- **Apollo Client** - GraphQL client and state management
- **React Router v7** - Navigation and routing
- **React Hot Toast** - Toast notifications
- **Chart.js** - Data visualization
- **React Icons** - Icon components
- **Vite** - Build tool and development server

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **GraphQL** - API query language
- **Apollo Server** - GraphQL server
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Passport.js** - Authentication middleware
- **Express Session** - Session management
- **Bcrypt** - Password hashing
- **Cron** - Scheduled tasks

## Project Structure

```
expense-mantra/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── GridBackground.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Cards.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── RadioButton.jsx
│   │   │   └── TransactionForm.jsx
│   │   ├── graphql/
│   │   │   ├── mutations/
│   │   │   └── queries/
│   │   └── utils/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   └── TransactionPage.jsx
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   │   ├── transaction.model.js
│   │   └── user.model.js
│   ├── resolvers/
│   │   ├── transaction.resolvers.js
│   │   └── user.resolvers.js
│   ├── typeDefs/
│   │   ├── transaction.typeDef.js
│   │   └── user.typeDef.js
│   ├── passport/
│   ├── db/
│   └── index.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/expense-mantra.git
cd expense-mantra
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Create environment variables
```bash
# In root directory
cp .env.example .env
```

Configure the following variables in `.env`:
```env
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
PORT=4000
```

### Running the Application

1. Start the backend server
```bash
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend/GraphQL Playground: http://localhost:4000/graphql

## API Documentation

### GraphQL Endpoints

#### Queries
- `authUser`: Get authenticated user details
- `transactions`: Get user's transactions
- `categoryStatistics`: Get transaction statistics by category

#### Mutations
- `signUp`: Create new user account
- `login`: Authenticate user
- `logout`: End user session
- `createTransaction`: Add new transaction
- `updateTransaction`: Modify existing transaction
- `deleteTransaction`: Remove transaction

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
