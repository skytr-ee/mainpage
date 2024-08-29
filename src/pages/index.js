import Image from "next/image";
import { Rubik } from "next/font/google";
import {Box, Button, Link, Stack, Text} from "@chakra-ui/react";
import Head from "next/head";
import {ReactTyped} from 'react-typed';

import React from "react";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
          <Head>
              <title>SKYTREE</title>
              <meta name="author" content="SKYTREE" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="robots" content="index, follow" />
              <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          </Head>
          <main
              className={`flex min-h-screen flex-col items-center justify-between p-24`}
          >
              <Box textAlign='center'>
                  <Text
                      as='h1'
                      maxW='16ch'
                      mx='auto'
                      fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                      fontFamily = {rubik.className}
                      letterSpacing='tighter'
                      fontWeight='extrabold'
                      mb='16px'
                      lineHeight='1.2'
                  >
                      <Text color='teal.500' _dark={{ color: 'teal.300' }}>
                          SKYTREE
                      </Text>
                  </Text>

                  <Text
                      maxW='760px'
                      mx='auto'
                      color='gray.500'
                      _dark={{ color: 'gray.400' }}
                      fontSize={{ base: 'lg', lg: '3xl' }}
                      mt='6'
                  >
                      SKYTREE is a fast, secure, and reliable decentralized Web3.0 platform
                  </Text>
                  <Text
                        maxW='760px'
                        mx='auto'
                        fontWeight='bold'
                        className={`bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent`}
                        fontSize={{ base: 'xl', lg: '3xl' }}
                        mt='6'
                        >
                      for&nbsp;
                      <ReactTyped
                          strings={[
                              'Workflow Automation',
                              'Social Media',
                              'E-commerce',
                              'NFTs',
                              'Blockchain Development',
                              'Decentralized Finance',
                          ]}
                          typeSpeed={40}
                          backSpeed={50}
                          loop
                      />
                  </Text>
                  <Stack
                      mt='10'
                      gap='4'
                      justify='center'
                      direction={{ base: 'column', sm: 'row' }}
                  >
                      <Button
                          h='4rem'
                          px='40px'
                          fontSize='1.2rem'
                          size='lg'
                          colorScheme='teal'
                          variant='solid'
                      >
                          Get Started
                      </Button>
                      <Button
                          h='4rem'
                          px='40px'
                          fontSize='1.2rem'
                          size='lg'
                          colorScheme='teal'
                          variant='outline'
                          onClick={() => window.open('https://github.com/skytr-ee')}
                      >
                          GitHub
                      </Button>
                  </Stack>
              </Box>
      </main>
      </>
  );
}


