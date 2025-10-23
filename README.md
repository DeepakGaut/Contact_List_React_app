# Contact List App – Tria Assignment

A modern, responsive contact management application built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Core Functionality**
- Display contacts with name, email, and phone number
- Real-time search filtering (case-insensitive)
- Add new contacts via modal form
- Delete contacts with confirmation
- Persistent storage using localStorage
- Loading states and empty state handling

🎨 **Design**
- Clean, modern UI with professional blue color scheme
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Card-based layout with hover effects
- Avatar initials for each contact

🛠️ **Technical Stack**
- React 18 with TypeScript
- Tailwind CSS for styling
- shadcn/ui components
- Lucide React icons
- Vite for build tooling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contact-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

**Live Demo**: [Add your Vercel URL here after deployment]

## Design Decisions

### Architecture
- **Component Structure**: Separated concerns with dedicated components (ContactCard, SearchBar, AddContactModal, EmptyState)
- **Type Safety**: Full TypeScript implementation for better developer experience and fewer runtime errors
- **State Management**: Using React hooks (useState, useEffect) for local state management
- **Data Persistence**: localStorage for client-side persistence without backend complexity

### UI/UX Decisions
- **Professional Color Scheme**: Blue/indigo palette chosen for trust and clarity
- **Card-based Layout**: Makes contacts easy to scan and visually separates information
- **Modal Form**: Non-intrusive way to add contacts without leaving the main view
- **Avatar Initials**: Visual identifiers using name initials when no profile picture exists
- **Responsive Design**: Mobile-first approach ensuring usability across all devices

### Technical Choices
- **Vite**: Fast build tool and excellent developer experience
- **shadcn/ui**: High-quality, accessible components built on Radix UI
- **Tailwind CSS**: Utility-first approach for rapid UI development
- **Design System**: Centralized color tokens and theme configuration for consistency

## Assumptions

1. **No Backend**: Using mock data and localStorage for persistence
2. **Client-Side Only**: All operations happen in the browser
3. **Basic Validation**: Email format and required fields validation only
4. **Single User**: No authentication or multi-user support
5. **Data Loss on Clear**: localStorage data is cleared if user clears browser data

## Future Enhancements

- [ ] Edit contact functionality
- [ ] Contact categories/groups
- [ ] Import/export contacts (CSV)
- [ ] Dark mode toggle
- [ ] Advanced search filters
- [ ] Contact notes/additional fields
- [ ] Backend integration with API
- [ ] Authentication system

## License

MIT

## Author

Created as part of Tria Technical Assignment
