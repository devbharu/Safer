# GuardianSphere - Cybersecurity Awareness Platform

GuardianSphere is a comprehensive cybersecurity awareness platform built with React, Vite, and Tailwind CSS. The application educates users about cybersecurity threats and provides interactive learning tools to help them stay safe online.

## 🚀 Features

### 1. Public Security Alerts (News Feed)
- Real-time cybersecurity news and threat alerts
- Responsive grid layout with categorized content
- Mobile-first design with Tailwind CSS
- Interactive news cards with images and summaries

### 2. User Authentication
- **Sign In Component**: Email/password authentication with form validation
- **Sign Up Component**: Complete registration with password confirmation
- Form validation with real-time error feedback
- Loading states and user-friendly error messages
- Social login options (Google, Twitter)

### 3. Interactive Learning Playground
- **Phishing Email Simulator**: Analyze fake emails and identify suspicious elements
- **Password Strength Assessment**: Learn about strong password practices
- **Social Engineering Awareness**: Identify manipulation tactics
- Progress tracking and instant feedback
- Multiple exercise types with scoring system

### 4. Cybersecurity Assistant (Chatbot)
- Interactive chat interface with typing indicators
- Pre-defined responses for common cybersecurity topics
- Quick suggestion buttons for easy navigation
- Topics covered: phishing, passwords, social engineering, malware, 2FA, VPNs, ransomware
- Educational content with actionable advice

### 5. Responsive Navigation
- Mobile-friendly navigation with hamburger menu
- Active page highlighting
- Smooth transitions and animations
- Professional branding with GuardianSphere logo

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Language**: JavaScript (JSX)
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend/safe-secure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Main navigation component
│   ├── NewsFeed.jsx           # Security alerts and news
│   ├── SignIn.jsx             # User authentication
│   ├── SignUp.jsx             # User registration
│   ├── LearningPlayground.jsx # Interactive learning exercises
│   └── Chatbot.jsx            # Cybersecurity assistant
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
├── index.css                  # Global styles and Tailwind config
└── assets/                    # Static assets
```

## 🎯 Key Components

### NewsFeed Component
- Displays cybersecurity news and alerts
- Responsive grid layout (1-3 columns based on screen size)
- Category tags and timestamps
- Hover effects and smooth transitions

### SignIn/SignUp Components
- Form validation with real-time feedback
- Password strength requirements
- Loading states and error handling
- Social authentication options

### LearningPlayground Component
- Multiple exercise types (phishing, passwords, social engineering)
- Interactive scoring system
- Progress tracking
- Educational explanations for each answer

### Chatbot Component
- Real-time chat interface
- Pre-defined responses for cybersecurity topics
- Quick suggestion buttons
- Typing indicators and smooth animations

## 🎨 Design Features

- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Animations**: Smooth transitions and loading states
- **Color Scheme**: Professional blue theme with proper contrast

## 🔒 Security Features

- Form validation and sanitization
- Password strength requirements
- Educational content about cybersecurity threats
- Safe simulation environment for learning

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎓 Educational Purpose

GuardianSphere is designed to educate users about:
- Phishing attack identification
- Password security best practices
- Social engineering awareness
- Malware protection
- Two-factor authentication
- VPN usage
- Ransomware prevention

## 🔮 Future Enhancements

- Backend integration for user accounts
- Real-time threat data API integration
- Advanced chatbot with AI capabilities
- Gamification features (badges, leaderboards)
- Mobile app development
- Multi-language support
- Dark mode theme
- Advanced analytics and progress tracking

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**GuardianSphere** - Empowering users with cybersecurity knowledge and awareness.
