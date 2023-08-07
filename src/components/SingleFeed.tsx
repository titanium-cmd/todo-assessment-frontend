import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import moment from 'moment';
import React from 'react';
import { IncomingFeed } from 'src/models/feed';

interface SingleFeedProps {
  feed: IncomingFeed
}

const SingleFeed: React.FC<SingleFeedProps> = ({ feed }) => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="User" src={feed.user.avatar!}></Avatar>
        }
        action={
          <Box display={'flex'} alignItems={'center'}>
            <Typography fontSize={13}>{moment(feed.modification_date).fromNow()}</Typography>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        }
        title={feed.user.full_name}
      />
      {feed.item_type === 'photo_set' && <CardMedia component="img" height="400" image={feed?.embed_object.photos?.length > 0 ? feed.embed_object.photos[0].image.origin : ''} alt="Post Image" />}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: feed.status }}></Typography>
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
