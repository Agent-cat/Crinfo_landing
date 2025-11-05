# Image Upload and Edit Features

## New Features Added

### 1. Image Upload System

**API Route**: `/api/upload`
- Handles file uploads for journals and books
- Validates file type (JPEG, PNG, WebP)
- Validates file size (max 5MB)
- Stores images in `/public/journals/` or `/public/books/`
- Returns public URL for the uploaded image
- Requires admin authentication

**Supported Formats**:
- JPEG/JPG
- PNG
- WebP

**File Size Limit**: 5MB

### 2. Updated Forms

#### Journal Form
- **Image Upload**: Click "Upload Image" button to select and upload
- **Image Preview**: Shows uploaded image with remove option
- **Edit Mode**: Pre-fills all fields when editing existing journal
- **Multi-step Progress**: Visual indicator shows current step

#### Book Form
- **Image Upload**: Click "Upload Image" button to select and upload
- **Image Preview**: Shows uploaded image with remove option
- **Edit Mode**: Pre-fills all fields when editing existing book
- **Multi-step Progress**: Visual indicator shows current step

### 3. Edit Functionality

**Server Actions**:
- `updateJournal(id, formData)` - Updates existing journal
- `updateBook(id, formData)` - Updates existing book

**Dashboard Features**:
- Blue **Edit** button next to each item
- Opens modal with pre-filled form data
- Modal title changes to "Edit" mode
- Submit button text changes to "Update"

### 4. Dashboard Updates

**New UI Elements**:
- Edit icon (blue) for each journal and book
- Delete icon (red) remains the same
- Both buttons side-by-side for easy access

**Workflow**:
1. Click Edit button on any item
2. Modal opens with form pre-filled
3. Modify any fields including uploading new image
4. Click "Update Journal" or "Update Book"
5. Changes saved and page refreshes

## Usage Guide

### Uploading Images

1. **In Add/Edit Form**:
   - Navigate to the image upload step
   - Click "Upload Image" button
   - Select image file (JPEG, PNG, or WebP)
   - Wait for upload to complete
   - Preview appears automatically
   - Click X button to remove and re-upload if needed

2. **Image Storage**:
   - Journals: `/public/journals/[timestamp]-[filename]`
   - Books: `/public/books/[timestamp]-[filename]`

### Editing Items

1. **Edit Journal**:
   - Go to admin dashboard
   - Click "Journals" tab
   - Click blue Edit icon on desired journal
   - Modify fields in 3-step form
   - Upload new image if needed
   - Click "Update Journal"

2. **Edit Book**:
   - Go to admin dashboard
   - Click "Books" tab
   - Click blue Edit icon on desired book
   - Modify fields in 2-step form
   - Upload new image if needed
   - Click "Update Book"

## Technical Details

### File Structure

```
app/
├── api/
│   └── upload/
│       └── route.ts          # Image upload API
├── actions/
│   └── crud.ts               # Added updateJournal & updateBook
components/
└── admin/
    ├── JournalForm.tsx       # Updated with upload & edit
    └── BookForm.tsx          # Updated with upload & edit
public/
├── journals/                 # Uploaded journal images
└── books/                    # Uploaded book images
```

### Security

- Upload route requires admin authentication
- File type validation prevents malicious uploads
- File size limit prevents storage abuse
- Unique filenames prevent overwrites

### Image Handling

**Upload Process**:
1. User selects file
2. File sent to `/api/upload` via FormData
3. Server validates file type and size
4. File saved to public directory
5. Public URL returned to client
6. URL stored in form data

**Preview**:
- Uses Next.js Image component
- Shows uploaded image immediately
- Remove button clears preview and field
- Supports re-uploading

## Error Handling

**Upload Errors**:
- Invalid file type: "Invalid file type. Only JPEG, PNG, and WebP are allowed."
- File too large: "File too large. Maximum size is 5MB."
- Upload failed: Generic error message

**Edit Errors**:
- Update failed: "Error updating journal/book"
- Shows alert to user
- Form remains open for retry

## Future Enhancements

- [ ] Image cropping/resizing before upload
- [ ] Multiple image upload
- [ ] Drag and drop upload
- [ ] Cloud storage integration (S3, Cloudinary)
- [ ] Image optimization
- [ ] Bulk edit functionality
- [ ] Image gallery view
- [ ] Delete old images when updating

## Notes

- Images are stored locally in `/public` folder
- For production, consider cloud storage
- Uploaded images persist across deployments if using persistent storage
- Old images are not automatically deleted when updated
- Consider implementing cleanup for unused images
