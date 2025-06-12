# Customer Pages Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Frontend Architecture](#frontend-architecture)
4. [Component Documentation](#component-documentation)
5. [State Management](#state-management)
6. [API Integration Points](#api-integration-points)
7. [Backend Requirements](#backend-requirements)
8. [Setup and Installation](#setup-and-installation)
9. [Development Guidelines](#development-guidelines)
10. [Deployment and Infrastructure](#deployment-and-infrastructure)

## Project Overview
This is a comprehensive customer-facing web application built with React and TypeScript. The application provides various features including user settings, dispute management, wallet functionality, event management, and more.

## Project Structure
```
src/
├── components/
│   ├── Settings/
│   ├── Dispute/
│   ├── Work-Package/
│   ├── Wallet/
│   ├── Event/
│   ├── ui/
│   ├── templates/
│   ├── software/
│   ├── products/
│   ├── layout/
│   ├── lawyer/
│   ├── events/
│   ├── courses/
│   ├── common/
│   ├── Profile/
│   ├── Orders/
│   ├── Home/
│   ├── Help-and-Support/
│   └── Contacts/
├── pages/
├── types/
├── lib/
├── hooks/
└── main.tsx
```

## Frontend Architecture

### Core Technologies
- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- Vite 4+
- Shadcn UI Components
- React Query for data fetching
- Zustand for state management
- React Router for navigation
- Socket.io for real-time features

### UI Components Library
The project uses a comprehensive set of UI components built with Shadcn UI:

#### Layout Components
- `Header`: Main navigation header with user profile
- `Sidebar`: Navigation sidebar with collapsible menu
- `ProfileDropdown`: User profile dropdown menu

#### Form Components
- `Input`: Text input fields
- `Textarea`: Multi-line text input
- `Select`: Dropdown selection
- `Checkbox`: Checkbox inputs
- `RadioGroup`: Radio button groups
- `Switch`: Toggle switches
- `Form`: Form wrapper with validation

#### Navigation Components
- `Tabs`: Tabbed navigation
- `Breadcrumb`: Navigation breadcrumbs
- `NavigationMenu`: Dropdown navigation menu
- `Command`: Command palette interface
- `Menubar`: Application menu bar

#### Feedback Components
- `Alert`: Information alerts
- `Toast`: Notification toasts
- `Dialog`: Modal dialogs
- `AlertDialog`: Confirmation dialogs
- `Progress`: Progress indicators
- `Skeleton`: Loading skeletons

#### Data Display
- `Table`: Data tables with sorting and pagination
- `Card`: Content cards
- `Avatar`: User avatars
- `Badge`: Status badges
- `Calendar`: Date picker calendar
- `Chart`: Data visualization charts

#### Interactive Components
- `Button`: Action buttons
- `DropdownMenu`: Context menus
- `Popover`: Popover menus
- `Tooltip`: Information tooltips
- `HoverCard`: Hover information cards
- `ContextMenu`: Right-click context menus

#### Layout Components
- `Sheet`: Slide-out panels
- `Drawer`: Side drawers
- `Collapsible`: Collapsible sections
- `ScrollArea`: Custom scrollable areas
- `Resizable`: Resizable panels
- `AspectRatio`: Fixed aspect ratio containers

### Key Features
1. User Settings Management
2. Dispute Resolution System
3. Wallet Management
4. Event Management
5. Order Processing
6. Profile Management
7. Help & Support System

## Component Documentation

### Settings Module
The Settings module (`src/components/Settings/`) includes the following components:

#### Components Structure:
- `ProfileSettings`: User profile management
- `SecuritySettings`: Security configuration
- `NotificationSettings`: Notification preferences
- `SecurityQuestionSettings`: Security questions management
- `TwoFactorSettings`: 2FA configuration
- `DeactivateModal`: Account deactivation confirmation

### Dispute Module
The Dispute module (`src/components/Dispute/`) handles all dispute-related functionality:

#### Components Structure:
- `DisputeList`: Displays all active disputes
- `DisputeDetails`: Shows detailed information about a specific dispute
- `DisputeForm`: Form for creating new disputes
- `DisputeChat`: Real-time chat component for dispute communication
- `DisputeTimeline`: Shows the history and progress of disputes

### Wallet Module
The Wallet module (`src/components/Wallet/`) manages user's financial transactions and balance:

#### Components Structure:
- `WalletBalance`: Displays current balance and transaction history
- `TransactionList`: Shows all transactions
- `PaymentMethods`: Manages payment methods
- `WithdrawalForm`: Handles withdrawal requests
- `DepositForm`: Processes deposits

### Event Module
The Event module (`src/components/Event/`) manages event-related functionality:

#### Components Structure:
- `EventList`: Displays upcoming and past events
- `EventDetails`: Shows detailed event information
- `EventRegistration`: Handles event registration
- `EventCalendar`: Calendar view of events
- `EventSearch`: Search and filter events

### Orders Module
The Orders module (`src/components/Orders/`) manages all order-related functionality:

#### Components Structure:
- `OrderList`: Displays all orders with filtering and sorting
- `OrderDetails`: Shows detailed order information
- `OrderTracking`: Real-time order tracking
- `OrderHistory`: Order history and analytics
- `OrderActions`: Order management actions

### Profile Module
The Profile module (`src/components/Profile/`) handles user profile management:

#### Components Structure:
- `ProfileView`: Main profile view
- `ProfileEdit`: Profile editing form
- `ProfileSettings`: Profile-specific settings
- `ProfileActivity`: User activity history
- `ProfilePreferences`: User preferences

### Help and Support Module
The Help and Support module (`src/components/Help-and-Support/`) provides customer support functionality:

#### Components Structure:
- `SupportTickets`: Ticket management
- `KnowledgeBase`: Help articles and documentation
- `LiveChat`: Real-time support chat
- `FAQ`: Frequently asked questions
- `ContactForm`: Support contact form

## State Management
The application uses React's built-in state management with hooks:

### Common State Interfaces
```typescript
interface BaseState {
  loading: boolean;
  error: string | null;
}

interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

interface FilterState {
  search: string;
  sort: string;
  filters: Record<string, any>;
}
```

### Module-Specific State
```typescript
interface UserState extends BaseState {
  profile: UserProfile;
  preferences: UserPreferences;
  activity: UserActivity[];
}

interface OrderState extends BaseState {
  orders: Order[];
  selectedOrder: Order | null;
  filters: OrderFilters;
  pagination: PaginationState;
  orderStats: OrderStatistics;
}

interface WalletState extends BaseState {
  balance: number;
  transactions: Transaction[];
  paymentMethods: PaymentMethod[];
  selectedCurrency: string;
}

interface SupportState extends BaseState {
  tickets: SupportTicket[];
  activeTicket: SupportTicket | null;
  knowledgeBase: Article[];
  chatStatus: 'online' | 'offline' | 'away';
}
```

### Global State (Zustand)
```typescript
interface GlobalState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
  settings: UserSettings;
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  addNotification: (notification: Notification) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
}
```

### Data Fetching

#### React Query Configuration
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

#### API Client Setup
```typescript
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Real-time Features

#### WebSocket Configuration
```typescript
const socket = io(process.env.REACT_APP_WS_URL, {
  auth: {
    token: localStorage.getItem('token'),
  },
  transports: ['websocket'],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
```

#### Real-time Events
- Chat messages
- Order status updates
- Dispute notifications
- Live support
- System notifications

### Error Handling

#### Global Error Boundary
```typescript
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

#### API Error Handling
```typescript
const handleApiError = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // Handle unauthorized
        break;
      case 403:
        // Handle forbidden
        break;
      case 404:
        // Handle not found
        break;
      case 500:
        // Handle server error
        break;
    }
  }
  return Promise.reject(error);
};
```

### Performance Optimization

#### Code Splitting
```typescript
const SettingsPage = React.lazy(() => import('./pages/Settings'));
const DisputePage = React.lazy(() => import('./pages/Dispute'));
const WalletPage = React.lazy(() => import('./pages/Wallet'));
```

#### Image Optimization
```typescript
const ImageLoader = ({ src, width, quality }) => {
  return `${process.env.REACT_APP_CDN_URL}/images/${src}?w=${width}&q=${quality || 75}`;
};
```

#### Caching Strategy
- Browser caching for static assets
- Service worker for offline support
- React Query for API response caching
- Local storage for user preferences

### Testing Strategy

#### Unit Tests
- Component testing with React Testing Library
- Hook testing with @testing-library/react-hooks
- Utility function testing with Jest

#### Integration Tests
- Page flow testing with Cypress
- API integration testing
- Real-time feature testing

#### E2E Tests
- User journey testing
- Critical path testing
- Cross-browser testing

## API Integration Points

### Common API Structure
All API endpoints follow RESTful conventions and include:
- Authentication via JWT
- Rate limiting
- Error handling
- Response pagination
- Filtering and sorting

### Module-Specific Endpoints

#### Settings Module
- GET /api/user/profile
- PUT /api/user/profile
- PATCH /api/user/profile
- GET /api/user/security
- PUT /api/user/security
- POST /api/user/security/verify
- GET /api/user/notifications
- PUT /api/user/notifications
- POST /api/user/2fa/enable
- POST /api/user/2fa/disable
- POST /api/user/deactivate

#### Dispute Module
- GET /api/disputes
- GET /api/disputes/:id
- POST /api/disputes
- PUT /api/disputes/:id
- DELETE /api/disputes/:id
- GET /api/disputes/:id/messages
- POST /api/disputes/:id/messages
- PUT /api/disputes/:id/messages/:messageId
- POST /api/disputes/:id/resolve
- POST /api/disputes/:id/escalate
- POST /api/disputes/:id/close

#### Wallet Module
- GET /api/wallet/balance
- GET /api/wallet/transactions
- POST /api/wallet/deposit
- POST /api/wallet/withdraw
- GET /api/wallet/payment-methods
- POST /api/wallet/payment-methods
- DELETE /api/wallet/payment-methods/:id
- GET /api/wallet/transactions/:id
- POST /api/wallet/transactions/verify

#### Event Module
- GET /api/events
- GET /api/events/:id
- POST /api/events
- PUT /api/events/:id
- DELETE /api/events/:id
- POST /api/events/:id/register
- GET /api/events/:id/registrations
- PUT /api/events/:id/registrations/:registrationId

#### Orders Module
- GET /api/orders
- GET /api/orders/:id
- POST /api/orders
- PUT /api/orders/:id
- DELETE /api/orders/:id
- GET /api/orders/:id/tracking
- PUT /api/orders/:id/tracking
- POST /api/orders/:id/tracking/update
- GET /api/orders/analytics
- GET /api/orders/statistics
- GET /api/orders/reports

#### Profile Module
- GET /api/profile
- PUT /api/profile
- PATCH /api/profile
- DELETE /api/profile
- GET /api/profile/preferences
- PUT /api/profile/preferences
- POST /api/profile/preferences/reset

#### Support Module
- GET /api/support/tickets
- POST /api/support/tickets
- PUT /api/support/tickets/:id
- GET /api/support/tickets/:id
- GET /api/support/knowledge-base
- GET /api/support/knowledge-base/:id
- POST /api/support/knowledge-base
- PUT /api/support/knowledge-base/:id
- POST /api/support/chat/start
- POST /api/support/chat/message
- GET /api/support/chat/history

## Backend Requirements

### Data Models

#### User Model
```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  phoneNumber?: string;
  securityQuestions: SecurityQuestion[];
  twoFactorEnabled: boolean;
  notificationPreferences: NotificationPreferences;
  accountStatus: 'active' | 'deactivated';
  createdAt: Date;
  updatedAt: Date;
}
```

#### SecurityQuestion Model
```typescript
interface SecurityQuestion {
  id: string;
  question: string;
  answer: string; // Hashed
  userId: string;
}
```

#### NotificationPreferences Model
```typescript
interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  marketing: boolean;
  security: boolean;
  updates: boolean;
}
```

#### Dispute Model
```typescript
interface Dispute {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  category: string;
  createdAt: Date;
  updatedAt: Date;
  messages: DisputeMessage[];
  attachments: Attachment[];
  assignedTo?: string;
}
```

#### Wallet Model
```typescript
interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: string;
  transactions: Transaction[];
  paymentMethods: PaymentMethod[];
  createdAt: Date;
  updatedAt: Date;
}

interface Transaction {
  id: string;
  walletId: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  currency: string;
  createdAt: Date;
  metadata: Record<string, any>;
}
```

#### Event Model
```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  capacity: number;
  price: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  organizer: string;
  categories: string[];
  registrations: EventRegistration[];
}
```

### Security Requirements
- JWT-based authentication
- Role-based access control
- Session management
- Secure password hashing
- Rate limiting
- PCI DSS compliance
- GDPR compliance
- Data encryption at rest and in transit
- Regular security audits
- Data backup and recovery
- Access control and audit logging

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation Steps
1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Start development server

## Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write meaningful comments
- Follow the established folder structure

### Testing
- Write unit tests for components
- Implement integration tests
- Use proper test coverage tools

### Security Best Practices
- Implement proper input validation
- Use secure authentication methods
- Follow OWASP security guidelines
- Implement proper error handling
- Use environment variables for sensitive data

### Performance Optimization
- Implement proper code splitting
- Use lazy loading where appropriate
- Optimize images and assets
- Implement proper caching strategies

## Deployment and Infrastructure

### Infrastructure Components

#### Frontend Deployment
- **Hosting**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **Environment Variables**:
  ```env
  REACT_APP_API_URL=https://api.example.com
  REACT_APP_WS_URL=wss://ws.example.com
  REACT_APP_ENV=production
  ```

#### Backend Deployment
- **Server**: AWS EC2 or ECS
- **Database**: AWS RDS (PostgreSQL)
- **Cache**: Redis
- **Message Queue**: AWS SQS
- **Storage**: AWS S3

### Deployment Architecture
```
[Client] → [CloudFront] → [S3]
                    ↓
[API Gateway] → [Lambda] → [RDS]
                    ↓
[WebSocket] → [API Gateway] → [Lambda]
```

### Scaling Requirements
- **Horizontal Scaling**:
  - Auto-scaling groups
  - Load balancers
  - Database read replicas
- **Vertical Scaling**:
  - Instance type upgrades
  - Database optimization

### Monitoring and Logging
- **Application Monitoring**:
  - New Relic
  - Datadog
  - AWS CloudWatch
- **Log Management**:
  - ELK Stack
  - CloudWatch Logs
- **Error Tracking**:
  - Sentry
  - Rollbar

### Backup and Recovery
- **Database Backups**:
  - Daily automated backups
  - Point-in-time recovery
  - Cross-region replication
- **Application Backups**:
  - S3 versioning
  - EBS snapshots
  - Configuration backups

### Performance Optimization
- **Caching Strategy**:
  - CDN caching
  - Application caching
  - Database caching
- **Load Testing**:
  - JMeter
  - k6
  - Artillery

### Disaster Recovery
- **Recovery Plan**:
  - RTO: 4 hours
  - RPO: 1 hour
- **Failover Strategy**:
  - Multi-region deployment
  - Automated failover
  - Data replication

## Development Workflow

### Git Workflow
1. Feature branches from develop
2. Pull request reviews
3. Automated testing
4. Staging deployment
5. Production deployment

### CI/CD Pipeline
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: npm run deploy
```

### Code Quality Tools
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript for type checking
- Jest for testing
- Cypress for E2E testing

## Contributing
1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request