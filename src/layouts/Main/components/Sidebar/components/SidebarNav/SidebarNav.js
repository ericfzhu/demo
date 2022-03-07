import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages, onContactUs, onClose }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { aboutUs: aboutUs, ourWork: ourWork } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="template title"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
                : 'https://raw.githubusercontent.com/ericfzhu/demo/9778acc41dba64707e687c760af97e9aadac11e2/src/images/logo.svg'
            }
            height={0.5}
            width={0.5}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'About Us'} items={aboutUs} />
        </Box>
        <Box>
          <NavItem title={'Our Work'} items={ourWork} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="_self"
            onClick={() => {
              onContactUs();
              onClose();
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
  onContactUs: PropTypes.func,
  onClose: PropTypes.func,
};

export default SidebarNav;