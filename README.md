# SnapPaisaWebsite

A modern, responsive React-based website for SnapPaisa, a financial services company offering instant loans and financial solutions.

## 🚀 Features

- **Instant Loan Application**: Multi-step loan application process with real-time validation
- **Loan Calculator**: Interactive EMI and interest calculator
- **User Dashboard**: Comprehensive dashboard for loan management and tracking
- **Document Upload**: Secure document upload system for KYC and verification
- **eKYC Integration**: Digital identity verification through DigiLocker
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Location-based Services**: City-specific loan services across major Indian cities
- **Payment Integration**: Secure payment processing with multiple gateways
- **Admin Panel**: Complete admin dashboard for loan management

## 🛠️ Technology Stack

- **Frontend**: React.js 18.x
- **Styling**: CSS3, Styled Components
- **State Management**: React Context API
- **Routing**: React Router v6
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Deployment**: AWS EC2, Jenkins CI/CD

## 📱 Key Components

### Core Components
- `Applay.jsx` - Main loan application component
- `MultiStepForm.jsx` - Multi-step form wizard
- `DashboardHeader.jsx` - Dashboard navigation header
- `LoanCalculator.jsx` - EMI and interest calculator
- `PictureUpload.jsx` - Document and image upload system

### Pages
- **Home**: Landing page with loan features and benefits
- **About**: Company information and mission
- **Contact**: Contact form and location details
- **Dashboard**: User loan management interface
- **Loan History**: Complete loan transaction history
- **Location Pages**: City-specific loan services

### Features
- **Advanced Background Remover**: AI-powered image processing
- **Real-time Chatbot**: Customer support integration
- **Progress Tracking**: Visual progress indicators
- **Responsive Navigation**: Mobile-optimized navigation
- **Form Validation**: Client-side and server-side validation

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components and routing
├── Context/            # React Context for state management
├── Utils/              # Utility functions and API calls
├── css/                # Global styles and CSS modules
├── images/             # Static images and assets
└── Layout.js           # Main layout wrapper
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ampirefinance/SnapPaisaWebsite.git
cd SnapPaisaWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_api_endpoint
REACT_APP_ENVIRONMENT=development
```

### API Configuration
Update `src/Utils/urls.js` with your API endpoints:
```javascript
export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
```

## 📱 Supported Cities

- **Delhi NCR**: Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida
- **Mumbai**: Maharashtra
- **Bangalore**: Karnataka
- **Hyderabad**: Telangana
- **Ahmedabad**: Gujarat

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional financial services aesthetic
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, animations, and transitions
- **Accessibility**: WCAG compliant design patterns
- **Loading States**: Smooth loading animations and progress indicators

## 🔒 Security Features

- **Protected Routes**: Authentication-based route protection
- **Data Encryption**: Secure data transmission
- **Session Management**: Secure user session handling
- **Input Validation**: Comprehensive input sanitization
- **CSRF Protection**: Cross-site request forgery prevention

## 📊 Performance Optimization

- **Code Splitting**: Dynamic imports for better performance
- **Image Optimization**: WebP format support and lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Caching Strategy**: Efficient caching mechanisms
- **CDN Integration**: Content delivery network support

## 🚀 Deployment

### AWS EC2 Deployment
1. Build the production bundle: `npm run build`
2. Upload to EC2 instance
3. Configure Nginx for static file serving
4. Set up SSL certificates

### Jenkins CI/CD
- Automated build and deployment pipeline
- Code quality checks and testing
- Automated deployment to staging/production

## 📈 Monitoring & Analytics

- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Comprehensive error logging
- **User Analytics**: User behavior and engagement metrics
- **Performance Metrics**: Load time and optimization tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Ampire Finance. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: support@ampirefinance.com
- **Phone**: +91-XXXXXXXXXX
- **Website**: https://ampirefinance.com

## 🔄 Version History

- **v1.0.0** - Initial release with core loan application features
- **v1.1.0** - Added eKYC integration and document upload
- **v1.2.0** - Enhanced dashboard and user experience
- **v1.3.0** - Location-based services and city-specific features

---

**SnapPaisaWebsite** - Empowering financial inclusion through technology.