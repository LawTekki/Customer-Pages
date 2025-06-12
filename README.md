# Customer Pages Application Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
   - [Root Configuration](#root-configuration-files)
   - [Source Code](#source-code)
   - [Components](#components-directory)
5. [Core Features](#core-features)
   - [Routing System](#routing-system)
   - [State Management](#state-management)
   - [Mobile Responsiveness](#mobile-responsiveness)
6. [Backend Integration](#backend-integration)
   - [API Endpoints](#api-endpoints)
   - [Data Flow](#data-flow)
7. [Development Guidelines](#development-guidelines)
8. [Deployment](#deployment)
9. [Additional Notes](#additional-notes)

## Project Overview
This is a React-based web application built with TypeScript, Vite, and Tailwind CSS. The application appears to be a comprehensive platform for managing various services including courses, events, legal services, and more.

## Tech Stack
- React 18+ with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- ESLint for code quality
- PostCSS for CSS processing
- React Router for navigation
- Custom hooks for state management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation
1. Clone the repository:
   git clone [repository-url]

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

4. Build for production:
   npm run build

5. Run tests:
   npm test

## Project Structure

### Root Configuration Files
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration with strict mode enabled
- `tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `vite.config.ts` - Vite bundler configuration with path aliases
- `eslint.config.js` - ESLint configuration with TypeScript support
- `postcss.config.js` - PostCSS configuration for Tailwind
- `vercel.json` - Vercel deployment configuration

### Source Code (`src/`)
- `App.tsx` - Main application component with routing setup
- `main.tsx` - Application entry point with React 18 features
- `App.css` - Global application styles
- `index.css` - Base styles and Tailwind imports

### Components Directory (`src/components/`)

#### Core Modules

1. **Courses Module**
   - [CourseCard.tsx](#coursecard)
   - [CourseFilters.tsx](#coursefilters)
   - [CourseGrid.tsx](#coursegrid)
   - [CoursesFilters.tsx](#coursesfilters)
   - [VirtualBadge.tsx](#virtualbadge)

2. **Common Components** (`common/`)
   - Shared components
   - Design system elements
   - UI patterns

3. **Layout** (`layout/`)
   - Navigation
   - Header/Footer
   - Sidebar

#### Feature Modules

1. **Contacts** (`Contacts/`)
   - Contact management
   - Search/Filter
   - Contact forms

2. **Events** (`Event/` and `events/`)
   - Event management
   - Calendar integration
   - Registration system

3. **Orders** (`Orders/`)
   - Order tracking
   - History view
   - Status updates

4. **Wallet** (`Wallet/`)
   - Payment system
   - Transaction history
   - Balance management

5. **Work Package** (`Work-Package/`)
   - Project management
   - Task tracking
   - Resource allocation

#### Support Modules

1. **Help and Support** (`Help-and-Support/`)
   - Ticket system
   - FAQ management
   - Knowledge base

2. **Settings** (`Settings/`)
   - User preferences
   - Notification settings
   - Security settings

3. **Profile** (`Profile/`)
   - User management
   - Activity history
   - Preferences

## Detailed File Structure

### Root Configuration Files

#### `package.json`
- Manages project dependencies and scripts
- Defines build, test, and development commands
- Specifies project metadata and versioning
- Configures npm/yarn package settings

#### `tsconfig.json`
- TypeScript configuration with strict mode
- Path aliases for cleaner imports
- Compiler options for type checking
- Module resolution settings

#### `tailwind.config.ts`
- Tailwind CSS theme customization
- Color palette definitions
- Responsive breakpoints
- Custom component styles

#### `vite.config.ts`
- Vite bundler configuration
- Development server settings
- Build optimization options
- Plugin configurations

### Source Code Structure

#### `src/App.tsx`
- Main application component
- Route definitions and navigation
- Global state providers
- Layout wrapper

#### `src/main.tsx`
- Application entry point
- React 18 initialization
- Global style imports
- Root component mounting

### Component Modules

#### Courses Module (`src/components/courses/`)
1. **CourseCard.tsx**
   - Displays individual course information
   - Handles grid/list view modes
   - Manages course image and details
   - Implements responsive design

2. **CourseFilters.tsx**
   - Advanced filtering system
   - Tag-based filtering
   - Price range selection
   - Category filtering

3. **CourseGrid.tsx**
   - Grid layout management
   - Responsive course arrangement
   - View mode switching
   - Pagination handling

4. **CoursesFilters.tsx**
   - Main filter interface
   - Filter state management
   - Search functionality
   - Filter combination logic

5. **VirtualBadge.tsx**
   - Virtual course indicators
   - Badge styling
   - Status display

#### Common Components (`src/components/common/`)
- Reusable UI elements
- Shared functionality
- Design system components
- Utility components

#### Layout Components (`src/components/layout/`)
1. **Header**
   - Navigation menu
   - User profile
   - Search bar
   - Notifications

2. **Sidebar**
   - Main navigation
   - Category filters
   - Quick actions
   - User menu

3. **Footer**
   - Links and resources
   - Social media
   - Contact information
   - Legal information

### Feature Modules

#### Contacts Module (`src/components/Contacts/`)
- Contact list management
- Contact details view
- Search and filtering
- Contact form handling

#### Events Module (`src/components/Event/` and `events/`)
- Event calendar
- Registration system
- Event details
- Status management

#### Orders Module (`src/components/Orders/`)
- Order tracking
- Status updates
- History view
- Payment integration

#### Wallet Module (`src/components/Wallet/`)
- Balance management
- Transaction history
- Payment methods
- Billing information

### Support Modules

#### Help and Support (`src/components/Help-and-Support/`)
- Ticket system
- FAQ management
- Knowledge base
- Support chat

#### Settings (`src/components/Settings/`)
- User preferences
- Notification settings
- Security settings
- Account management

#### Profile (`src/components/Profile/`)
- User information
- Activity history
- Preferences
- Account settings

### Types and Utilities

#### Types (`src/types/`)
- TypeScript interfaces
- Type definitions
- API response types
- Component prop types

#### Hooks (`src/hooks/`)
1. **useIsMobile**
   const MOBILE_BREAKPOINT = 768;
   
   export function useIsMobile() {
     const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
   
     useEffect(() => {
       const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
       const onChange = () => {
         setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
       };
       mql.addEventListener("change", onChange);
       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
       return () => mql.removeEventListener("change", onChange);
     }, []);
   
     return !!isMobile;
   }

2. **useToast**
   function useToast() {
     const [state, setState] = useState<State>(memoryState);
   
     useEffect(() => {
       listeners.push(setState);
       return () => {
         const index = listeners.indexOf(setState);
         if (index > -1) {
           listeners.splice(index, 1);
         }
       };
     }, [state]);
   
     return {
       ...state,
       toast,
       dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
     };
   }

### Styles and Assets

#### Styles (`src/styles/`)
- Global styles
- Theme definitions
- Custom components
- Utility classes

#### Assets (`src/assets/`)
- Images
- Icons
- Fonts
- Static files

### API Integration

#### API Services (`src/services/`)
- API endpoints
- Data fetching
- Error handling
- Response processing

#### API Types (`src/types/api/`)
- Request interfaces
- Response types
- Error types
- API constants

### Testing

#### Tests (`src/tests/`)
- Unit tests
- Integration tests
- Component tests
- API tests

### Configuration

#### Environment (`src/config/`)
- Environment variables
- API configurations
- Feature flags
- Constants

## Core Features

### Routing System

#### Main Routes
```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/contacts" element={<Contacts />} />
  <Route path="/events" element={<Events />} />
  <Route path="/events/upcoming" element={<Events />} />
  <Route path="/events/pending" element={<Events />} />
  <Route path="/events/recurring" element={<Events />} />
  <Route path="/events/past" element={<Events />} />
  <Route path="/events/cancelled" element={<Events />} />
  <Route path="/home" element={<Home />} />
  <Route path="/wallet" element={<Wallet />} />
  <Route path="/work-package" element={<WorkPackage />} />
  <Route path="/work-package/PostWorkPackage" element={<JobForm />} />
  <Route path="/dispute" element={<Dispute />} />
  <Route path="/help-and-support" element={<HelpAndSupport />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/orders/Active" element={<Orders />} />
  <Route path="/orders/Received" element={<Orders />} />
  <Route path="/orders/Cancelled" element={<Orders />} />
  <Route path="/setting" element={<Settings />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

#### Route Features
- Dynamic routes with URL parameters
- Query parameters for filtering
- Nested routes for complex features
- Route guards for authentication
- Role-based access control

### State Management

#### React Hooks
1. **useState**
   const [state, setState] = useState<StateType>(initialValue);

2. **useEffect**
   useEffect(() => {
     // Side effects
     return () => {
       // Cleanup
     };
   }, [dependencies]);

3. **useRef**
   const ref = useRef<RefType>(initialValue);

#### Custom Hooks
1. **useIsMobile**
   const MOBILE_BREAKPOINT = 768;
   
   export function useIsMobile() {
     const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
   
     useEffect(() => {
       const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
       const onChange = () => {
         setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
       };
       mql.addEventListener("change", onChange);
       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
       return () => mql.removeEventListener("change", onChange);
     }, []);
   
     return !!isMobile;
   }

2. **useToast**
   function useToast() {
     const [state, setState] = useState<State>(memoryState);
   
     useEffect(() => {
       listeners.push(setState);
       return () => {
         const index = listeners.indexOf(setState);
         if (index > -1) {
           listeners.splice(index, 1);
         }
       };
     }, [state]);
   
     return {
       ...state,
       toast,
       dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
     };
   }

### Mobile Responsiveness

#### Breakpoints
const MOBILE_BREAKPOINT = 768;  // Mobile devices
const TABLET_BREAKPOINT = 1024; // Tablets
const DESKTOP_BREAKPOINT = 1280; // Desktop

#### Responsive Features
1. **Mobile-First Design**
   - Base styles for mobile
   - Media queries for larger screens
   - Progressive enhancement

2. **Responsive Components**
   const Component = () => {
     const isMobile = useIsMobile();
     
     return (
       <div className={`
         ${isMobile ? 'mobile-layout' : 'desktop-layout'}
         ${isMobile ? 'p-4' : 'p-8'}
       `}>
         {/* Component content */}
       </div>
     );
   };

## Backend Integration

### API Endpoints

#### Authentication
// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
}

// POST /api/auth/register
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

#### Core Features
1. **Courses**
   // GET /api/courses
   interface CourseResponse {
     id: string;
     title: string;
     description: string;
     price: number;
     instructor: string;
     duration: string;
     level: string;
     category: string;
     language: string;
   }

2. **Events**
   // GET /api/events
   interface EventResponse {
     id: string;
     title: string;
     date: string;
     location: string;
     status: 'upcoming' | 'pending' | 'recurring' | 'past' | 'cancelled';
   }

3. **Orders**
   // GET /api/orders
   interface OrderResponse {
     id: string;
     status: 'Active' | 'Received' | 'Cancelled';
     items: OrderItem[];
     total: number;
     date: string;
   }

### Data Flow

#### State Management
- React Query for server state
- Local state for UI
- Context for global state

#### Error Handling
try {
  const response = await api.get('/endpoint');
  // Handle success
} catch (error) {
  // Handle error
  toast.error('Operation failed');
}

#### Loading States
const { data, isLoading, error } = useQuery('key', fetchData);

if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;

## Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow ESLint configuration
- Use functional components with hooks
- Implement error boundaries

### Component Structure
- Follow component hierarchy
- Use proper prop typing
- Implement error handling
- Use Tailwind CSS

### State Management
- Use React hooks
- Implement state updates
- Handle loading states
- Manage error states

### Performance
- Implement memoization
- Use lazy loading
- Optimize images
- Implement caching

### Testing
- Write unit tests
- Implement integration tests
- Use test coverage
- Follow best practices

## Deployment
The application is configured for deployment on Vercel:
- Automatic deployments from main branch
- Preview deployments for pull requests
- Environment variable management
- Build optimization

## Additional Notes

### Architecture
- Modular architecture
- Feature-based organization
- Shared component library
- Type-safe development

### Security
- Input validation
- XSS prevention
- CSRF protection
- Secure authentication

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

### Internationalization
- Multi-language support
- RTL support
- Date formatting
- Number formatting

## Backend Integration Guide

### API Architecture

#### Base URL
- Development: `http://localhost:3000/api`
- Production: `https://api.yourdomain.com/api`
- Staging: `https://staging-api.yourdomain.com/api`

#### Authentication
1. **JWT Implementation**
   - Token-based authentication
   - Access token expiration: 1 hour
   - Refresh token expiration: 7 days
   - Token format: `Bearer <token>`

2. **Endpoints**
   ```
   POST /api/auth/login
   POST /api/auth/register
   POST /api/auth/refresh
   POST /api/auth/logout
   GET /api/auth/me
   ```

3. **Request/Response Format**
   ```typescript
   // Login Request
   interface LoginRequest {
     email: string;
     password: string;
   }

   // Login Response
   interface LoginResponse {
     accessToken: string;
     refreshToken: string;
     user: {
       id: string;
       email: string;
       name: string;
       role: 'user' | 'admin';
     };
   }
   ```

### Database Schema

#### Users
```typescript
interface User {
  id: string;
  email: string;
  password: string; // Hashed
  name: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}
```

#### Courses
```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  level: string;
  category: string;
  language: string;
  status: 'active' | 'draft' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}
```

#### Orders
```typescript
interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}
```

### API Endpoints

#### Courses API
1. **List Courses**
   ```
   GET /api/courses
   Query Parameters:
   - page: number
   - limit: number
   - category: string
   - level: string
   - price: number
   - search: string
   ```

2. **Get Course Details**
   ```
   GET /api/courses/:id
   ```

3. **Create Course**
   ```
   POST /api/courses
   Authorization: Required (Admin)
   ```

4. **Update Course**
   ```
   PUT /api/courses/:id
   Authorization: Required (Admin)
   ```

5. **Delete Course**
   ```
   DELETE /api/courses/:id
   Authorization: Required (Admin)
   ```

#### Orders API
1. **List Orders**
   ```
   GET /api/orders
   Query Parameters:
   - page: number
   - limit: number
   - status: string
   - dateFrom: string
   - dateTo: string
   ```

2. **Create Order**
   ```
   POST /api/orders
   Authorization: Required
   ```

3. **Update Order Status**
   ```
   PATCH /api/orders/:id/status
   Authorization: Required (Admin)
   ```

### Error Handling

#### Error Response Format
```typescript
interface ErrorResponse {
  status: number;
  message: string;
  errors?: {
    field: string;
    message: string;
  }[];
}
```

#### Common Error Codes
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 422: Validation Error
- 500: Internal Server Error

### Webhooks

#### Available Webhooks
1. **Order Status Change**
   ```
   POST /webhooks/order-status
   ```

2. **Payment Status**
   ```
   POST /webhooks/payment-status
   ```

#### Webhook Payload Format
```typescript
interface WebhookPayload {
  event: string;
  timestamp: number;
  data: any;
  signature: string;
}
```

### Rate Limiting

#### Limits
- Authentication endpoints: 5 requests per minute
- API endpoints: 100 requests per minute
- Webhook endpoints: 50 requests per minute

#### Headers
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1620000000
```

### Security Requirements

1. **API Security**
   - HTTPS required
   - CORS configuration
   - Rate limiting
   - Request validation

2. **Data Protection**
   - Password hashing (bcrypt)
   - Input sanitization
   - SQL injection prevention
   - XSS protection

3. **File Upload**
   - Maximum file size: 10MB
   - Allowed types: jpg, png, pdf
   - Virus scanning
   - Secure storage

### Testing

#### API Testing
1. **Unit Tests**
   - Controller tests
   - Service tests
   - Model tests

2. **Integration Tests**
   - API endpoint tests
   - Authentication tests
   - Database integration tests

3. **Load Testing**
   - Concurrent users: 1000
   - Response time: < 200ms
   - Error rate: < 1%

### Deployment

#### Environment Variables
```
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
API_KEY=
STRIPE_SECRET_KEY=
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
```

#### Health Check
```
GET /api/health
Response:
{
  status: 'healthy',
  version: '1.0.0',
  timestamp: '2024-03-14T12:00:00Z'
}
```

### Monitoring

#### Metrics
- Response time
- Error rate
- Request volume
- Resource usage

#### Logging
- Request logs
- Error logs
- Access logs
- Audit logs

### Backup and Recovery

#### Database Backup
- Frequency: Daily
- Retention: 30 days
- Type: Full backup

#### Recovery Procedures
1. Database restore
2. File system restore
3. Configuration restore