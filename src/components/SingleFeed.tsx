import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { Feeds } from 'src/models/feeds';

interface SingleFeedProps {
  feed: Feeds
}

const SingleFeed: React.FC<SingleFeedProps> = ({ feed }) => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="User" src={'feed.embed_object.'}>
            U
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={'feed.user.short_name'}
      />
      <CardMedia component="img" height="400" image={'imageUrl'} alt="Post Image" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {'caption'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="Send">
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default SingleFeed;
