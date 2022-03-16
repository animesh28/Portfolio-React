import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

export default function AboutTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className='eat'>
            <FastfoodIcon color='action'/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent 
          sx={{ py: '12px', px: 2 }}
          component={motion.div}
          initial={{
            x: 200,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            duration: 2,
          }}
        >
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
          <TimelineDot color="primary" className='sleep'>
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          sx={{ py: '12px', px: 2 }}
          component={motion.div}
          initial={{
            x: -200,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            duration: 2,
          }}
        >
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className='code'>
            <LaptopMacIcon color='action'/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent 
          sx={{ py: '12px', px: 2 }}
          component={motion.div}
          initial={{
            x: 200,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            duration: 2,
          }}
        >
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary" className='repeat'>
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          sx={{ py: '12px', px: 2 }}
          component={motion.div}
          initial={{
            x: -200,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            duration: 2,
          }}  
        >
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}