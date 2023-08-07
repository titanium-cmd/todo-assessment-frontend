import { LoadingButton } from '@mui/lab';
import { Box, Container, FormControl, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from 'src/hooks/redux';
import { Feeds } from 'src/models/store';

const NewFeedPage: React.FC = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const [newFeed, setNewFeed] = useState({} as Feeds)
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform your file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected.');
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // if (newFeed. === '' || username === '')
    //   return dispatch(notify('Please fill all fields', 'error'))
    // dispatch(userLogin({ username, password }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            // value={formData.privacy}
            // onChange={handleInputChange}
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
          // value={formData.category}
          // onChange={handleChange}
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

        <RadioGroup
          row
          name="add_project"
          value={newFeed.add_project}
          onChange={handleInputChange}
        >
          <FormControl>
            <Radio value="yes" /> Yes
          </FormControl>
          <FormControl>
            <Radio value="no" /> No
          </FormControl>
        </RadioGroup>

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

        <Container>
          <TextField
            type="file"
            onChange={handleFileChange}
            label="Select a file"
            variant="outlined"
            inputProps={{ accept: 'image/*' }} // You can customize the accepted file types
            fullWidth
          />
          {/* <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload
          </Button> */}
          </Container>

        <LoadingButton type="submit" variant="contained" color="primary">
          Post
        </LoadingButton>
      </Stack>
    </Box>
  )
}

export default NewFeedPage
