export const siteData = {
  "tasks": [
    {
      "id": 1,
      "title": "Design new landing page",
      "description": "Create wireframes and mockups for the new product landing page",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-12-20",
      "projectId": 1,
      "createdAt": "2024-12-10",
      "tags": [
        "design",
        "frontend"
      ]
    },
    {
      "id": 2,
      "title": "Review pull requests",
      "description": "Review and merge pending pull requests from the team",
      "status": "todo",
      "priority": "medium",
      "dueDate": "2024-12-15",
      "projectId": 2,
      "createdAt": "2024-12-12",
      "tags": [
        "code-review",
        "development"
      ]
    },
    {
      "id": 3,
      "title": "Update documentation",
      "description": "Update API documentation with new endpoints",
      "status": "completed",
      "priority": "low",
      "dueDate": "2024-12-10",
      "projectId": 2,
      "createdAt": "2024-12-08",
      "tags": [
        "documentation"
      ]
    },
    {
      "id": 4,
      "title": "Plan sprint retrospective",
      "description": "Prepare agenda and materials for the upcoming retrospective meeting",
      "status": "todo",
      "priority": "medium",
      "dueDate": "2024-12-18",
      "projectId": 1,
      "createdAt": "2024-12-11",
      "tags": [
        "planning",
        "meeting"
      ]
    },
    {
      "id": 5,
      "title": "Fix mobile responsive issues",
      "description": "Address layout problems on mobile devices",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-12-16",
      "projectId": 1,
      "createdAt": "2024-12-09",
      "tags": [
        "frontend",
        "mobile",
        "bug"
      ]
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "description": "Complete overhaul of the company website",
      "color": "#3B82F6",
      "status": "active",
      "taskCount": 8,
      "completedTasks": 3,
      "dueDate": "2024-12-25"
    },
    {
      "id": 2,
      "name": "API Development",
      "description": "Build new REST API endpoints",
      "color": "#10B981",
      "status": "active",
      "taskCount": 5,
      "completedTasks": 2,
      "dueDate": "2024-12-30"
    },
    {
      "id": 3,
      "name": "Marketing Campaign",
      "description": "Q1 2025 product launch campaign",
      "color": "#F59E0B",
      "status": "planning",
      "taskCount": 12,
      "completedTasks": 0,
      "dueDate": "2025-01-15"
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612345b?w=32&h=32&fit=crop&crop=face",
      "role": "user"
    }
  ],
  "settings": {
    "appName": "TaskFlow",
    "description": "A clean and simple task management application",
    "version": "1.0.0",
    "theme": "light",
    "notifications": true,
    "defaultPriority": "medium",
    "dateFormat": "MM/DD/YYYY",
    "timeFormat": "12h"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "dashboard",
      "active": true
    },
    {
      "label": "All Tasks",
      "route": "/tasks",
      "icon": "tasks",
      "badge": "6"
    },
    {
      "label": "Projects",
      "route": "/projects",
      "icon": "folder"
    },
    {
      "label": "Calendar",
      "route": "/calendar",
      "icon": "calendar"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "settings"
    }
  ],
  "footer": [
    {
      "label": "Help",
      "route": "/help",
      "icon": "help"
    },
    {
      "label": "Feedback",
      "route": "/feedback",
      "icon": "feedback"
    }
  ]
};