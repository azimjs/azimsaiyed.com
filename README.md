# Azim Saiyed - Personal Portfolio Website

Welcome to my personal portfolio website built with modern web technologies. This site showcases my skills, projects, and professional experience.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Shadcn/ui component library
- **Language**: TypeScript
- **Deployment**: Docker & Kubernetes ready
- **Analytics**: Google Analytics integration

## ✨ Features

- **Responsive Design**: Mobile-first approach with custom hooks for mobile detection
- **Modern UI**: Clean, professional design with smooth animations
- **Sections**: About Me, Services, Projects, Resume, and Contact
- **Analytics**: Built-in Google Analytics tracking
- **Performance**: Optimized for speed and SEO

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd azimsaiyed.com

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production
```bash
npm run build
npm start
```

## 🐳 Docker Deployment

```bash
# Build the Docker image
docker build -t azimsaiyed-portfolio .

# Run the container
docker run -p 3000:3000 azimsaiyed-portfolio
```

## ☸️ Kubernetes Deployment

The project includes Kubernetes manifests in the `k8s/` directory:

```bash
kubectl apply -f k8s/
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
│   ├── sections/       # Main page sections
│   ├── ui/            # Shadcn/ui components
│   └── layout/        # Layout components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and config
└── types/              # TypeScript type definitions
```

## 🎨 Customization

- Update personal information in `src/lib/constants.ts`
- Modify styling in `tailwind.config.ts`
- Add new sections in `src/components/sections/`
- Update profile image in `public/profile-thumbnail.jpg`

## 📊 Analytics

Google Analytics is integrated and can be configured in `src/lib/analytics.ts`.

## 🤝 Contributing

This is a personal portfolio website, but if you have suggestions for improvements, feel free to reach out!

## 📄 License

This project is for personal use.

---

Built with ❤️ by Azim Saiyed
