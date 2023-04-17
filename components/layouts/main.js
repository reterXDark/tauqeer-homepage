import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tauqeer's homepage" />
        <meta name="author" content="Tauqeer Nasir" />
        <meta name="author" content="Tauqeer" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tauqeer Nasir" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reterX_Dark" />
        <meta name="twitter:creator" content="@reterX_Dark" />
        <meta name="twitter:image" content="#" />
        <meta property="og:site_name" content="Tauqeer Nasir" />
        <meta name="og:title" content="Tauqeer Nasir" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/card.jpg" />
        <title>Tauqeer Nasir - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
