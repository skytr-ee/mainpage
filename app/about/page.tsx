"use client";

import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '0 16px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          borderRadius: '16px',
          padding: '4px 12px',
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: '#1d2126',
            fontWeight: 500,
          }}
        >
          About SkyTree
        </Typography>
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: '#1d2126',
          fontWeight: 700,
          mb: 2,
        }}
      >
        We&apos;re committed to giving value to your data
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: '#1d2126',
        }}
      >
        <span
          style={{
            background: 'linear-gradient(to right, #00bcd4, #8bc34a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SkyTree
        </span>{' '}
        Communication Limited
      </Typography>
    </Box>
  );
}
