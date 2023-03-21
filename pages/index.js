import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Divider,
  Center
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoFirebase,
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoCodepen,
  IoLogoClosedCaptioning
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        fontFamily='"JetBrains Mono", sans-serif'
        css={{ backdropFilter: 'blur(10px)' }}
        mt={10}
      >
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title" fontWeight={'black'}>
            Tauqeer Nasir
          </Heading>
          <Heading
            as="h2"
            color={'GrayText'}
            variant="page-title"
            fontWeight={'light'}
            fontSize={20}
          >
            Software Engineer
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            // borderColor="whiteAlpha.800"
            // borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            mt={5}
          >
            <ProfileImage
              src="/images/tauqeer.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          Tauqeer is a Software Engineer with 2 Years of Experience in Both
          Mobile & Web Apllication based in Pakistan with a passion for building
          digital services/stuff he wants. He has a knack for all things
          launching products, from planning and designing all the way to solving
          real-life problems with code.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bechelors Program in Computer Science at{' '}
          <Link
            href="https://trailfive.com/"
            fontWeight="extrabold"
            target={'_blank'}
          >
            National Textile University, Faisalabad.
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked as Software Engineer
          <Link fontWeight="extrabold" target={'_blank'}>
            {' '}
            The Codeditors, Karachi
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Works as a Software Engineer at{' '}
          <Link
            href="https://trailfive.com/"
            target={'_blank'}
            fontWeight="extrabold"
          >
            Trailfive Technologies, Islamabad
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/reterXDark" target="_blank">
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoGithub />}
              >
                See my github!
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.javascript.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<IoLogoJavascript />}
              >
                JavaScript (ES6)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://reactjs.org/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoReact />}
              >
                React.js
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://reactnative.dev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="twitter"
                leftIcon={<IoLogoReact />}
              >
                React Native
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://nodejs.org/en/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoNodejs />}
              >
                Node.js (Rest APIs)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://firebase.google.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<IoLogoFirebase />}
              >
                Firebase
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://firebase.google.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoReact />}
              >
                Redux Toolkit
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          on Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/reterXDark" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @reterXDark
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ig_.taukeer" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ig_.taukeer
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
