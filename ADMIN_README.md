# Admin System Documentation

## Overview
Complete admin system with authentication and CRUD operations for managing Journals, Books, and News & Announcements.

## Access
- **Login URL**: `/admin/login`
- **Dashboard URL**: `/admin/dashboard`

## Default Credentials
- **Username**: `admin`
- **Password**: `admin123`

## Features

### 1. Authentication
- JWT-based authentication using `jose` library
- Secure HTTP-only cookies
- Session management (24-hour expiration)
- Protected routes with middleware
- Auto-redirect if already logged in

### 2. Multi-Step Forms
All forms use a step-by-step wizard interface:

#### Journal Form (3 Steps)
1. **Basic Information**: Title, ISSN, Issues Per Year
2. **Links & Indexing**: DOI, Indexing, Image URL
3. **Description**: Full journal description

#### Book Form (2 Steps)
1. **Basic Information**: Title, Categories, Authors, Image URL
2. **Description**: Full book description

#### News Form (3 Steps)
1. **Basic Information**: Title, Date
2. **Excerpt**: Short summary
3. **Full Content**: HTML content for the article

### 3. CRUD Operations

#### Create
- Add new journals, books, and news articles
- Multi-step validation
- Auto-generated slugs for news articles
- Real-time preview

#### Read
- View all items in organized tabs
- Count badges showing total items
- Clean, searchable interface

#### Delete
- One-click delete with confirmation
- Automatic page revalidation
- Instant UI updates

### 4. Data Management
- Data stored in TypeScript constants files
- Server actions for file manipulation
- Automatic revalidation of affected pages
- Type-safe operations

## File Structure

```
app/
├── admin/
│   ├── login/
│   │   └── page.tsx          # Login page
│   └── dashboard/
│       └── page.tsx           # Main dashboard
├── actions/
│   ├── auth.ts                # Authentication actions
│   └── crud.ts                # CRUD operations
components/
└── admin/
    ├── JournalForm.tsx        # Multi-step journal form
    ├── BookForm.tsx           # Multi-step book form
    └── NewsForm.tsx           # Multi-step news form
lib/
├── auth.ts                    # JWT utilities
└── admin-credentials.ts       # Credential verification
middleware.ts                  # Route protection
```

## Security Features

1. **JWT Tokens**: Secure token-based authentication
2. **HTTP-Only Cookies**: Prevents XSS attacks
3. **Server Actions**: All mutations happen server-side
4. **Middleware Protection**: Routes protected at edge
5. **Session Validation**: Token verification on each request

## Usage

### Adding a Journal
1. Navigate to `/admin/dashboard`
2. Click "Journals" tab
3. Click "Add Journal" button
4. Fill in the 3-step form:
   - Step 1: Basic info (title, ISSN, issues per year)
   - Step 2: Links (DOI, indexing, image)
   - Step 3: Description
5. Click "Add Journal"

### Adding a Book
1. Click "Books" tab
2. Click "Add Book" button
3. Fill in the 2-step form:
   - Step 1: Basic info (title, categories, authors, image)
   - Step 2: Description
4. Click "Add Book"

### Adding News
1. Click "News" tab
2. Click "Add News" button
3. Fill in the 3-step form:
   - Step 1: Basic info (title, date)
   - Step 2: Excerpt
   - Step 3: Full HTML content
4. Click "Publish News"

### Deleting Items
1. Find the item in the list
2. Click the trash icon
3. Confirm deletion
4. Page automatically refreshes

## Production Considerations

### Before Deploying:

1. **Change JWT Secret**
   - Set `JWT_SECRET` environment variable
   - Use a strong, random secret

2. **Update Admin Credentials**
   - Modify `/lib/admin-credentials.ts`
   - Use bcrypt hashed passwords
   - Consider database storage

3. **Database Integration** (Recommended)
   - Replace file-based storage with database
   - Update CRUD actions to use database queries
   - Add proper error handling

4. **File Upload**
   - Implement image upload functionality
   - Use cloud storage (S3, Cloudinary, etc.)
   - Update forms to handle file uploads

5. **Validation**
   - Add comprehensive input validation
   - Sanitize HTML content
   - Implement rate limiting

## Environment Variables

Create a `.env.local` file:

```env
JWT_SECRET=your-super-secret-key-change-this-in-production
```

## Troubleshooting

### Can't Login
- Check credentials (admin/admin123)
- Clear browser cookies
- Check console for errors

### Changes Not Appearing
- Refresh the page
- Check file permissions
- Verify server actions are working

### Middleware Issues
- Ensure middleware.ts is in root directory
- Check cookie settings
- Verify JWT_SECRET is set

## Future Enhancements

- [ ] Edit functionality for existing items
- [ ] Image upload with preview
- [ ] Rich text editor for content
- [ ] Search and filter functionality
- [ ] Bulk operations
- [ ] Activity logs
- [ ] Multiple admin users
- [ ] Role-based permissions
- [ ] Database integration
- [ ] API endpoints
