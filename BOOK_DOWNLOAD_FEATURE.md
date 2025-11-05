# Book Download Request Feature

## Overview
Individual book detail pages with email-based download request functionality.

## Features

### 1. Book Detail Pages
- **Route**: `/books/[id]`
- **Dynamic routing** based on book ID
- **Responsive design** matching website theme
- **Static generation** for all books

### 2. Page Components

#### Book Cover
- Large image display
- Sticky positioning on desktop
- Responsive aspect ratio

#### Book Information
- **Categories**: Displayed as badges
- **Title**: Large, prominent heading
- **Authors**: Listed with proper formatting
- **Description**: Full book description
- **How to Access**: Instructions for requesting

#### Download Request Button
- Prominent "Request Download" button
- Opens email client with pre-filled template
- Visual feedback on hover

### 3. Email Template

When users click "Request Download", their email client opens with:

**To**: `admin@crinfoglobal.com`

**Subject**: `Request for Book: [Book Title]`

**Body**:
```
Dear Crinfo Global Team,

I am writing to request access to the following book:

Title: [Book Title]
Authors: [Author Names]
Categories: [Categories]

I am interested in this publication for my research/academic purposes. 
Could you please provide information on how I can access or purchase this book?

Thank you for your assistance.

Best regards,
[Your Name]
[Your Institution/Organization]
[Your Email]
```

### 4. Related Books Section
- Shows 3 other books
- Clickable cards to navigate
- Excludes current book

## User Flow

1. **Browse Books**: User visits `/books` page
2. **Click Book**: User clicks on any book card
3. **View Details**: Redirected to `/books/[id]` with full information
4. **Request Download**: Clicks "Request Download" button
5. **Email Opens**: Default email client opens with pre-filled template
6. **User Fills Details**: User adds their name, institution, and email
7. **Send Request**: User sends email to admin
8. **Admin Response**: Admin responds within 24-48 hours

## Technical Implementation

### File Structure
```
app/
└── books/
    ├── page.tsx              # Books listing (updated with links)
    └── [id]/
        └── page.tsx          # Individual book detail page
```

### Dynamic Route
- Uses Next.js dynamic routing `[id]`
- Generates static pages for all books at build time
- Falls back to 404 if book ID not found

### Email Functionality
- Uses `mailto:` protocol
- URL-encoded subject and body
- Works with any email client
- No server-side processing required

### Styling
- Consistent with website theme
- Black background with amber text
- Burgundy (#800020) accent color
- Responsive grid layout
- Hover effects and transitions

## Customization

### Change Admin Email
Edit the email address in `/app/books/[id]/page.tsx`:
```typescript
const mailtoLink = `mailto:your-email@domain.com?subject=${emailSubject}&body=${emailBody}`;
```

### Modify Email Template
Update the `emailBody` variable in the same file:
```typescript
const emailBody = encodeURIComponent(`Your custom template here...`);
```

### Adjust Related Books Count
Change the slice value:
```typescript
.slice(0, 3)  // Shows 3 books, change to desired number
```

## Benefits

### For Users
- Easy access to book information
- Simple request process
- Pre-filled email saves time
- Clear instructions

### For Admins
- Structured requests
- All necessary information included
- Easy to track and respond
- No complex backend needed

## Future Enhancements

- [ ] Add book availability status
- [ ] Include ISBN and publication details
- [ ] Add "Add to Wishlist" feature
- [ ] Implement direct download for open-access books
- [ ] Add book preview/sample chapters
- [ ] Include citation information
- [ ] Add social sharing buttons
- [ ] Implement book search and filters
- [ ] Add user reviews/ratings
- [ ] Create book collections/series

## SEO Benefits

- Individual pages for each book
- Static generation for fast loading
- Proper meta tags (can be added)
- Structured data for search engines
- Better indexing of book catalog

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast text
- Clear call-to-action buttons

## Browser Compatibility

- Works with all modern browsers
- Email client integration varies by OS:
  - **Windows**: Outlook, Mail app, etc.
  - **macOS**: Mail app, Outlook, etc.
  - **Linux**: Thunderbird, Evolution, etc.
  - **Mobile**: Native email apps

## Notes

- Email template is URL-encoded for compatibility
- Users must have an email client configured
- Some browsers may ask for permission to open email client
- Template can be customized per book if needed
- No backend processing required for basic functionality
