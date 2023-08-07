import { Feed, PhotoUploadResult } from './models/feed';
import axios from './store/axios';

export async function uploadFile(selectedFile: File | null): Promise<PhotoUploadResult | null> {
  const formData = new FormData();
  if (!selectedFile) return null;
  formData.append('file', selectedFile!);
  formData.append('name', 'file');
  formData.append('type', 'photo');
  formData.append('item_type', 'photo');
  formData.append('file_type', 'photo');

  try {
    const { data } = await axios.post('/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('File upload successful:', data.data);
    return data.data;
  } catch (error) {
    console.error('File upload error:', error);
    return null;
  }
}

export const formatBiography = (description: string): string => {
  return description.substring(0, 60) + '...';
}

export const formatUserStatus = (feed: Feed) => {
  const project = feed.add_project === 'yes' ? `<p class="card-text"><span class="fw-bold">Project:</span> ${feed.project}</p>` : ''
  return `<h5 class="card-title"><strong>${feed.name}</strong></h5>
                <p class="card-text"><span class="fw-bold">Category:</span> ${feed.category}</p>
                <p class="card-text"><span class="fw-bold">Impact:</span> ${feed.impact}</p>
                <p class="card-text"><span class="fw-bold">Biography:</span> ${formatBiography(feed.biography)}</p>
                ${project}`
}