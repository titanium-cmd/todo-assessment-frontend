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
    return data.data;
  } catch (error) {
    return null;
  }
}

export const formatBiography = (description: string): string => {
  return description.substring(0, 560) + '...';
}

export const formatUserStatus = (feed: Feed) => {
  const project = feed.add_project === 'yes' ? `<p><span style="font-weight: bold; color: #3B444B;">Project:</span> ${feed.project}</p>` : '';
  return `
        <p><span style="font-weight: bold; color: #3B444B;">Name:</span> ${feed.name}</p>
        <p><span style="font-weight: bold; color: #3B444B;">Category:</span> ${feed.category}</p>
        <p><span style="font-weight: bold; color: #3B444B;">Impact:</span> ${feed.impact}</p>
        <p><span style="font-weight: bold; color: #3B444B;">Biography:</span> ${formatBiography(feed.biography)}</p>
        ${project}`;
}