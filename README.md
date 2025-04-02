## Overview

This is a responsive web application for a skip hire business that allows customers to browse and select various skip sizes for their waste management needs. The application features a modern, user-friendly interface with a focus on providing clear information about each skip option.

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **State Management**: React Query

## Project Structure

- `/src/components`: Reusable UI components
  - `SkipCard.tsx`: Individual skip option display
  - `ProgressHeader.tsx`: Shows the current step in the booking process
  - `FooterDrawer.tsx`: Cart/selection summary drawer
- `/src/pages`: Application pages
  - `Index.tsx`: Main skip selection page
  - `NotFound.tsx`: 404 page
- `/src/lib`: Utility functions
- `/public`: Static assets
