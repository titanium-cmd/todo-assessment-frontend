import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material';
import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { notify } from 'reapop';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { Feed } from 'src/models/feed';
import { saveNewFeed } from 'src/store/feeds/feedsService';
import { clearFeedState } from 'src/store/feeds/feedsSlice';
import { formatUserStatus, uploadFile } from 'src/utils';

const NewFeedPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [newFeed, setNewFeed] = useState<Feed>({
    post_type: 'activity_post',
    category: 'Academic leader',
    name: '',
    biography: '',
    impact: '',
    notify_nominee: 'no',
    add_project: 'no',
    photo_files: [{
      id: 0,
      type: '',
      status: "new",
      text: "",
      tagged_friends: []
    }],
    photo_description: '',
    project: '',
    user_status: '',
    privacy: 4,
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { status, message } = useAppSelector((state) => state.feeds);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (status === 'rejected') {
      dispatch(notify(message, 'error'))
      dispatch(clearFeedState());
    } else if (status === 'fulfilled') {
      dispatch(notify(message, 'success'))
      dispatch(clearFeedState());
      setTimeout(() => {
        navigate('/')
      }, 300);
    }
    // eslint-disable-next-line
  }, [status]);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let feed = { ...newFeed };
    if (selectedFile) {
      const image = await uploadFile(selectedFile);
      feed.post_type = 'photo_set';
      feed = {
        ...feed,
        photo_description: formatUserStatus(feed),
        photo_files: [{
          ...feed.photo_files[0],
          id: image!.temp_file,
          type: image!.item_type,
        }]
      };
    } else {
      feed.user_status = formatUserStatus(feed);
    }
    dispatch(saveNewFeed(feed))
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewFeed({ ...newFeed, [name]: value })
  }

  return (
    <Box component={'form'} p={5} mt={3} onSubmit={handleFormSubmit}>
      <Stack spacing={3}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="privacy">Privacy</InputLabel>
          <Select
            label="Privacy"
            id="privacy"
            name="privacy"
            value={newFeed.privacy}
            onChange={handleInputChange}
          >
            <MenuItem value={0}>Public</MenuItem>
            <MenuItem value={1}>Community</MenuItem>
            <MenuItem value={2}>Friends</MenuItem>
            <MenuItem value={3}>Friends of Friends</MenuItem>
            <MenuItem value={4}>Only Me</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category"
            id="category"
            name="category"
            value={newFeed.category}
            onChange={handleInputChange}
          >
            <MenuItem value="Academic leader">Academic leader</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={newFeed.name}
          onChange={handleInputChange}
          required
        />

        <TextField
          id="biography"
          name="biography"
          label="Nominee's biography"
          variant="outlined"
          multiline
          rows={4}
          value={newFeed.biography}
          onChange={handleInputChange}
          required
        />

        <TextField
          id="impact"
          name="impact"
          label="Nominee's impact"
          variant="outlined"
          multiline
          rows={4}
          value={newFeed.impact}
          onChange={handleInputChange}
          required
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Add Project</FormLabel>
          <RadioGroup
            row
            name="add_project"
            value={newFeed.add_project}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              labelPlacement="end"
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>


        {newFeed.add_project === 'yes' && (
          <TextField
            id="project"
            name="project"
            label="Project"
            variant="outlined"
            multiline
            rows={4}
            value={newFeed.project}
            onChange={handleInputChange}
          />
        )}
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Photo</FormLabel>
          <TextField
            type="file"
            onChange={handleFileChange}
            variant="outlined"
            inputProps={{ accept: 'image/*' }}
            fullWidth
          />
        </FormControl>

        <LoadingButton type="submit" variant="contained" color="primary">
          Post
        </LoadingButton>
      </Stack>
    </Box>
  )
}

export default NewFeedPage
