# Medical Device Inventory Admin Dashboard

A full-featured admin dashboard to manage medical device inventories, track installations, service visits, contract lifecycles (AMC/CMC), and maintain facility-specific CRM histories, including training, feedback, and photo documentation.

## Features
- **Device Inventory Dashboard:** View all devices with type, ID, facility, status, battery %, last service/installation date, and AMC/CMC status.
- **Installation & Training Module:** Log new installations, upload unboxing photos, complete checklists, submit training forms, and track completion status.
- **Service Visit Logs:** Log field visits with notes, date, responsible engineer, purpose (Preventive/Breakdown), and attachments.
- **AMC/CMC Tracker:** Track devices with AMC/CMC contract details, show upcoming expiries, and export reports.
- **Alerts & Photo Logs:** Upload photos of device condition and handle alerts for issues during installation or maintenance.
- **Role-Based Access:** Admins have full access; Technicians have restricted views.
- **Theme Switcher:** Toggle between light and dark mode.

## Tech Stack
- ReactJS
- Redux (with Redux Toolkit)
- Material UI
- SCSS Modules
- LocalStorage (for mock API/data persistence)

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd inventory_management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

## Usage
- Use the sidebar to navigate between modules.
- Use the role selector in the top bar to switch between Admin and Technician views.
- Admins can add, edit, and delete records. Technicians have restricted access and cannot view certain data.
- Use the theme toggle to switch between light and dark mode.

## Folder Structure
```
src/
  components/         # Reusable UI components (forms, tables, etc.)
  pages/              # Main pages for each module (DeviceInventory, Installations, etc.)
  redux/              # Redux store and slices
    slices/           # State slices for devices, contracts, alerts, etc.
  App.js              # Main app component and routing
  index.js            # Entry point
```

## Role-Based Access
- **Admin:** Full access to all modules and data (CRUD operations).
- **Technician:** Restricted access. Cannot view or modify Device Inventory, Service Logs, AMC/CMC Tracker, or Alerts & Photo Logs.

## Optional Enhancements
- QR Code Scanner for device identification
- Advanced role management
- Data export (CSV/Excel)
- Improved mobile responsiveness

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
